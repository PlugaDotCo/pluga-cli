import plg from 'pluga-plg';
import { describe, it, expect } from 'vitest';

import app from '../lib';

const event = {
  meta: {
    baseURI: process.env.BASE_URI,
  },
  auth: {
    access_token: process.env.ACCESS_TOKEN,
  },
};

describe('App: Ping', () => {
  it('test your app ping here', async () => {
    /**
     * Test with local example `event`
     *
     * const result = await app.ping(plg, event);
     * expect(result).not.toBeNull();
     */
  });
});
