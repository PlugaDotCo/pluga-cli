const plg = require('pluga-plg');
const { expect } = require('chai');

const app = require('../lib');

const event = {
  meta: {
    baseURI: process.env.BASE_URI,
  },
  auth: {
    access_token: process.env.ACCESS_TOKEN,
  },
};

describe('App: Ping', function () {
  it('test your app ping here', async function () {
    /**
     * Test with local example `event`
     *
     * const result = await app.ping(plg, event);
     * expect(result).to.not.eq(null);
     */
  });
});
