/* eslint-disable global-require */

/**
 * Place your global test hooks here.
 *
 * See more at:
 * - [mocha](https://mochajs.org)
 * - [chai](https://chaijs.com)
 */

require('dotenv/config');

before(function (done) {
  console.log('Testing functions...');
  done();
});
