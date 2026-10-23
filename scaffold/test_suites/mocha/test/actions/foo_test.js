const plg = require('pluga-plg');
const { expect } = require('chai');

const action = require('../../lib/actions/foo');

const event = {
  meta: {
    baseURI: process.env.BASE_URI,
  },
  auth: {
    access_token: process.env.ACCESS_TOKEN,
  },
  input: {
    a: 'Example',
  },
};

describe('Action: Foo', function () {
  it('test your action handle here', async function () {
    /**
     * Test with local example `event`
     *
     * const result = await action.handle(plg, event);
     * expect(result).to.not.eq(null);
     */
  });
});
