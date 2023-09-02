const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://real.ph/',
    experimentalRunAllSpecs: true, 
    numTestsKeptInMemory: 50,
    chromeWebSecurity: true,
    screenshotOnRunFailure: true,
    video: false,
    trashAssetsBeforeRuns: true, 
    viewportHeight: 720,
    viewportWidth: 1280,
    testIsolation: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env: {
    userName: 'noel.dulin@august99.com',
    pass: '£rTm3z6Y4o77',
  },
});
