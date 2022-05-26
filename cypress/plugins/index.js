/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
}

const fs = require('fs')

module.exports = (on, config) => {
  on('after:screenshot', (details) => {
    console.log(details) // print all details to terminal

    const newPath = details.path.replace('/cypress/screenshots/'+details.specName,'')
    console.log('newPath',newPath)
    vrtScreenshotsPath = newPath.substring(0,newPath.search('Scenario')+'Scenario'.length+1)
    console.log('vrtScreenshotsPath',vrtScreenshotsPath)
    ///Users/cavillamil/Desktop/MISO/misw4103-pruebas/E2E_ghost_test_cases/vrt/Scenario1/Scenario1_V3-1.png
    return new Promise((resolve, reject) => {
      if (!fs.existsSync(vrtScreenshotsPath)){
        fs.mkdirSync(vrtScreenshotsPath);
      }
      // fs.rename moves the file to the existing directory 'new/path/to'
      // and renames the image to 'screenshot.png'
      fs.rename(details.path, newPath, (err) => {
        if (err) return reject(err)

        // because we renamed and moved the image, resolve with the new path
        // so it is accurate in the test results
        resolve({ path: newPath })
      })
    })
  })
}