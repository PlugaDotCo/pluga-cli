/**
 * Place your global test hooks here.
 *
 * See more at:
 * - [vitest](https://vitest.dev)
 */

import 'dotenv/config';
import { beforeAll } from 'vitest';

beforeAll(() => {
  console.log('Testing functions...');
});
