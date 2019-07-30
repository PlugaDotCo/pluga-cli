const glob = require('glob');
const Mocha = require('mocha');

const options = {
  timeout: 5 * 60 * 1000,
  reporter: 'dot',
};

module.exports = (dir = 'test/**/*_test.js') => {
  const mocha = new Mocha(options);

  mocha.addFile('test/test_helper.js');

  glob.sync(dir)
    .filter(f => f.substr(-3) === '.js')
    .forEach(f => mocha.addFile(f));

  mocha.run(failures => process.exit(failures ? 1 : 0));
};
