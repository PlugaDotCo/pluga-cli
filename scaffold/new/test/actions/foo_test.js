const plg = require('pluga-plg');
const expect = require('chai').expect;

const action = require('../../lib/actions/foo');

const event = {
  meta: {
    baseURI: process.env.BASE_URI
  },
  auth: {
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
  },
  input: {
    a: 'Example'
  }
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
    done();
  });
});
