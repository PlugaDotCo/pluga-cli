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

module.exports = (dir, cmd) => {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir);

  const appId = dir.match(/[^/]+$/)[0];
  const appName = cmd.appName || humanize(appId);

  const params = { appId, appName };

  scaffold('init', (src, dest) => {
    const data = fs.readFileSync(src, 'utf8');
    const file = `${dir}/${dest}`;

    mkdir(file);
    fs.writeFileSync(file, mustache.render(data, params));
    console.log(`Write: ${file}`);
  });

  console.log(`\nApp ${appName} created! :D`);

  if (!cmd.skipGit) execShell(dir, 'git init');
  if (!cmd.skipDeps) execShell(dir, 'npm install');
};
