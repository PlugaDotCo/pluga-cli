const plg = require('pluga-plg');
const expect = require('chai').expect;

const trigger = require('../../lib/triggers/bar');

const event = {
  meta: {
    baseURI: process.env.BASE_URI
  },
  auth: {
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
  },
  input: {}
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
    done()
  });
});
