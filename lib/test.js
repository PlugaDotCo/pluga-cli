const fs = require('fs');
const glob = require('glob');
const Mocha = require('mocha');
const { spawnSync } = require('child_process');

const options = {
  timeout: 5 * 60 * 1000,
  reporter: 'dot',
};

function runMocha(dir = 'test/**/*_test.js') {
  const mocha = new Mocha(options);

  mocha.addFile('test/test_helper.js');

  glob.sync(dir)
    .filter((f) => f.slice(-3) === '.js')
    .forEach((f) => mocha.addFile(f));

  mocha.run((failures) => process.exit(failures ? 1 : 0));
}

function runVitest(dir) {
  const args = dir ? ['vitest', 'run', dir] : ['vitest', 'run'];
  const { status } = spawnSync('npx', args, { stdio: 'inherit' });

  process.exit(status);
}

module.exports = (dir) => {
  if (fs.existsSync('vitest.config.mjs')) runVitest(dir);
  else runMocha(dir);
};
