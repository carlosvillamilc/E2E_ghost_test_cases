const { After, Before, AfterStep, BeforeStep, scenario } = require('@cucumber/cucumber');
//const { defineSupportCode } = require('cucumber');
const { WebClient } = require('kraken-node');

let fs = require('fs');
let dir = './vrt/';
let scenarioCounter = 1;
let path = '';

String.prototype.replaceAll = function(search, replacement) {
  var target = this;
  return target.replace(new RegExp(search, 'g'), replacement);
};

Before(async function(scenario) {
  console.log(scenario.version)
  featureName = scenario.pickle.name.replaceAll(" ", "_");
  this.deviceClient = new WebClient('chrome', {}, this.userId);
  this.driver = await this.deviceClient.startKrakenForUserId(this.userId);
  if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
  }
})

After(async function() {
  await this.deviceClient.stopKrakenForUserId(this.userId);
  scenarioCounter= 1;
});


AfterStep(async function () {
  path = `./${dir}/${featureName}-${scenarioCounter}.png`;
  scenarioCounter++;
  try {
      console.log(path, scenarioCounter);      
      let screenshot = await this.driver.saveScreenshot(path);
      this.attach(screenshot, 'image/png');
  } catch {
      console.log("KRAKEN: Could not take screenshot");
  }
  return;
});
