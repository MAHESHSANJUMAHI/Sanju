// const { defineConfig } = require("cypress");
// const { allureCypress } = require("allure-cypress/reporter");
// const {downloadFile} = require('cypress-downloadfile/lib/addPlugin')
// const cucumber = require('cypress-cucumber-preprocessor').default
// module.exports = defineConfig({
  
//   reporter: 'cypress-mochawesome-reporter',
  
//   e2e: {
//     video: true,
//     experimentalStudio: true,
//       baseUrl: "https://opensource-demo.orangehrmlive.com",
//       //  baseUrl:"https://reqres.in",
//     //defaultCommandTimeout: 20000,
//     pageLoadTimeout: 120000,
//     specPattern : "**/*.feature",
//     viewportWidth: 1920,
//     viewportHeight: 1080,
//     watchForFileChanges: false,
//     screenshotsFolder: "cypress/raju",
//     videosFolder: "cypress/recordings",
//     // retries: {"openMode": 3, runMode:2},
//     videoCompression: 51,
//     env: {
//       "raju": "orangehrm=9e808d52a257ba474d025ca3919d9ae4",

//       "username": "Mahesh",
//       "password": "Raju"

//     },
//     setupNodeEvents(on, config) {
//       // implement node event listeners here
//       require('cypress-mochawesome-reporter/plugin')(on);
//       allureCypress(on, config);
//       // on('task', {downloadFile})
//       // return config;
//     },
//   },
// });




const { defineConfig } = require("cypress");
const {downloadFile} = require('cypress-downloadfile/lib/addPlugin')


module.exports = defineConfig({

  projectId: "iiv5j4",
  reporter: 'cypress-mochawesome-reporter',
  e2e: {

    specPattern:  "**/*.feature",
    video:true,
    baseUrl: "https://opensource-demo.orangehrmlive.com",
   //baseUrl:"https://reqres.in",
    //defaultCommandTimeout: 20000,
    pageLoadTimeout: 120000,
    viewportWidth:1920,
    viewportHeight:1080,
    watchForFileChanges:false,
    screenshotsFolder: "cypress/raju",
    videosFolder:"cypress/recordings",
   // retries: {"openMode": 3, runMode:2},
    videoCompression: 0,
    env:{
      
       "username": "Mahesh",
       "password":"Raju",
       "xyz" : "",
       "raju": "orangehrm=4e747955a38fd3002e2fdf359213a9dd"

    },
    setupNodeEvents(on, config) {
      // implement node event listeners here

      return require('./cypress/plugins/index.js')(on, config)
      
      on('task', {downloadFile})
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
