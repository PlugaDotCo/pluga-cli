import plg from 'pluga-plg';
import { describe, it, expect } from 'vitest';

import action from '../../lib/actions/foo';

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

describe('Action: Foo', () => {
  it('test your action handle here', async () => {
    /**
     * Test with local example `event`
     *
     * const result = await action.handle(plg, event);
     * expect(result).not.toBeNull();
     */
  });
});
