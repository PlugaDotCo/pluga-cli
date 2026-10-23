const fs = require('fs');
const mustache = require('mustache');
const { exec } = require('child_process');

const scaffold = require('./scaffold');
const mkdir = require('./mkdir');

function humanize(str) {
  return str
    .replace(/^\w/, (l) => l.toUpperCase())
    .replace(/[_-]+(\w)/g, (_, l) => l.toUpperCase());
}

function execShell(dir, shell) {
  exec(`cd ${dir} && ${shell}`, (err, stdout, stderr) => {
    console.log(err ? stderr : `\n${stdout.trim()}`);
  });
}

function writeScaffold(scope, dir, params) {
  scaffold(scope, (src, dest) => {
    const data = fs.readFileSync(src, 'utf8');
    const file = `${dir}/${dest}`;

    mkdir(file);
    fs.writeFileSync(file, mustache.render(data, params));
    console.log(`Write: ${file}`);
  });
}

module.exports = (dir, cmd) => {
  fs.mkdirSync(dir, { recursive: true });

  const appId = dir.match(/[^/]+$/)[0];
  const appName = cmd.appName || humanize(appId);
  const { t: testSuite } = cmd;

  const params = { appId, appName, [testSuite]: true };

  writeScaffold('init', dir, params);
  writeScaffold(`test_suites/${testSuite}`, dir, params);

  console.log(`\nApp ${appName} created with ${testSuite}! :D`);

  if (!cmd.skipGit) execShell(dir, 'git init');
  if (!cmd.skipDeps) execShell(dir, 'npm install');
};
