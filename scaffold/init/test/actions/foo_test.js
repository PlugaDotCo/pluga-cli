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
  it('test your action handle here', function (done) {
    /**
     * Test with local example `event`
     *
     * action.handle(plg, event).then((foo) => {
     *  expect(foo).to.not.be.null;
     *  done();
     * }).catch(done);
     */
  });
});
