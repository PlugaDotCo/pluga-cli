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
  it('test your helper handle here', async function () {
    /**
     * Test with local example `event`
     *
     * const result = await helper.handle(plg, event);
     * expect(result).to.be.an('array');
     */
  });
});
