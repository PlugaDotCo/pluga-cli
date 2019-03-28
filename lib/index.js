const program = require('commander');

const actionNew  = require('./new');
const actionTest = require('./test');

program.version('0.0.1', '-v, --version');

program
  .command('new <dir>')
  .option('-n, --app-name [app-name]', 'App Name')
  .action(actionNew);

program
  .command('test [dir]')
  .action(actionTest);

module.exports = program;
