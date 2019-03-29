const program = require('commander');

const { version } = require('../package.json');

const actionNew  = require('./new');
const actionTest = require('./test');

program.version(version, '-v, --version');

program
  .command('new <dir>')
  .option('-n, --app-name [app-name]', 'App Name')
  .option('-D, --skip-deps', 'Skip `npm install`')
  .action(actionNew);

program
  .command('test [dir]')
  .action(actionTest);

module.exports = program;
