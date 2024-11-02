import {defineConfig, devices} from '@playwright/test';
import type {TestOptions} from "./test-options";

require('dotenv').config();

export default defineConfig<TestOptions>({
  retries: 1,
  reporter: 'html',
  use: {
    globalsQaURL: 'https://www.globalsqa.com/demo-site/draganddrop',
    baseURL: process.env.DEV === 'tst' ? 'http://localhost:4200/'
      : process.env.DEV === 'tst2' ? 'http://localhost:4201/'
        : 'http://localhost:4200/',
    trace: 'on-first-retry',
    actionTimeout: 20000,
    navigationTimeout: 25000,
    video: {
      mode: 'off',
      size: {width: 1920, height: 1080}
    }
  },

  projects: [
    {
      name: 'tst',
      use: {
        ...devices['Desktop Chrome'],
        baseURL: 'http://localhost:4200/'
      }

    },
    {
      name: 'chromium',
    },

    {
      name: 'firefox',
      use: {
        browserName: "firefox"
      },
    }
  ]

});
