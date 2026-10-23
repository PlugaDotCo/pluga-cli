import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: ['test/**/*_test.js'],
    setupFiles: ['test/test_helper.js'],
    testTimeout: 5 * 60 * 1000,
    hookTimeout: 5 * 60 * 1000,
    reporters: ['dot'],
  },
});
