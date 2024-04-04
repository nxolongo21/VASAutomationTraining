// @ts-check
const { devices } = require('@playwright/test');

const config = {
  testDir: './tests',
  /* Maximum time one test can run for. */
  timeout: 50 * 1000,
  expect: {

     timeout: 5000
  },

  reporter: 'html',
  /* Shared settings for all the projects below. See */
  use: {

    browserName : 'chromium',
    headless : false

  },



};

module.exports = config;

