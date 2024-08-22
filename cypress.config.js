const { defineConfig } = require("cypress");
const { allureCypress } = require("allure-cypress/reporter");
const {downloadFile} = require('cypress-downloadfile/lib/addPlugin')
module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    video: true,
    baseUrl: "https://opensource-demo.orangehrmlive.com",
    //defaultCommandTimeout: 20000,
    pageLoadTimeout: 120000,
    viewportWidth: 1920,
    viewportHeight: 1080,
    watchForFileChanges: false,
    screenshotsFolder: "cypress/raju",
    videosFolder: "cypress/recordings",
    // retries: {"openMode": 3, runMode:2},
    videoCompression: 51,
    env: {

      "username": "Mahesh",
      "password": "Raju"

    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
      allureCypress(on, config);
      // on('task', {downloadFile})
      // return config;
    },
  },
});
