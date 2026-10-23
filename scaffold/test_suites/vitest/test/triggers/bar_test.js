import plg from 'pluga-plg';
import { describe, it, expect } from 'vitest';

import trigger from '../../lib/triggers/bar';

const event = {
  meta: {
    baseURI: process.env.BASE_URI,
  },
  auth: {
    access_token: process.env.ACCESS_TOKEN,
  },
  input: {},
};

describe('Trigger: Bar', () => {
  it('test your trigger handle here', async () => {
    /**
     * Test with local example `event`
     *
     * const result = await trigger.handle(plg, event);
     * expect(result).toBeInstanceOf(Array);
     */
  });
});
