const plg = require('pluga-plg');
const { expect } = require('chai');

const helper = require('../../lib/helper_methods/baz');

const event = {
  meta: {
    baseURI: process.env.BASE_URI,
  },
  auth: {
    access_token: process.env.ACCESS_TOKEN,
  },
  input: {},
};

describe('Helper method: Baz', function () {
  it('test your helper handle here', function (done) {
    /**
     * Test with local example `event`
     *
     * helper.handle(plg, event).then((result) => {
     *  expect(result).to.be.an('array');
     *  done();
     * }).catch(done);
     */
  });
});
