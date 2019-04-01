const program = require('commander');

const { version } = require('../package.json');

const init = require('./init');
const test = require('./test');

program.version(version, '-v, --version');

program
  .command('init <app-path>')
  .option('-n, --app-name [app-name]', 'App Name')
  .option('-D, --skip-deps', 'Skip `npm install`')
  .action(init);

program
  .command('test [files-or-directories]')
  .action(test);

program.on('command:*', () => {
  const args = program.args.join(' ');
  console.error(`Invalid command: ${args}\nSee --help for available commands`);
  process.exit(1);
});

module.exports = program;
