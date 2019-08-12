const plg = require('pluga-plg');
const { expect } = require('chai');

const trigger = require('../../lib/triggers/bar');

const event = {
  meta: {
    baseURI: process.env.BASE_URI,
  },
  auth: {
    access_token: process.env.ACCESS_TOKEN,
  },
  input: {},
};

describe('Trigger: Bar', function () {
  it('test your trigger handle here', function (done) {
    /**
     * Test with local example `event`
     *
     * trigger.handle(plg, event).then((bar) => {
     *  expect(bar).to.be.an('array');
     *  done();
     * }).catch(done);
     */
  });
});
