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
  it('test your trigger handle here', async function () {
    /**
     * Test with local example `event`
     *
     * const result = await trigger.handle(plg, event);
     * expect(result).to.be.an('array');
     */
  });
});
