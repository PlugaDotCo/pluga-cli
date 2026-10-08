import plg from 'pluga-plg';
import { describe, it, expect } from 'vitest';

import helper from '../../lib/helper_methods/baz';

const event = {
  meta: {
    baseURI: process.env.BASE_URI,
  },
  auth: {
    access_token: process.env.ACCESS_TOKEN,
  },
  input: {},
};

describe('Helper method: Baz', () => {
  it('test your helper handle here', async () => {
    /**
     * Test with local example `event`
     *
     * const result = await helper.handle(plg, event);
     * expect(result).toBeInstanceOf(Array);
     */
  });
});
