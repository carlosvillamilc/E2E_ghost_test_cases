const { Given, When, Then } = require('@cucumber/cucumber');
var {browser} = require('cucumber')
var { document} = require('cucumber')
var {setValue} = require('cucumber')

When('I click option Design for label', async function() {
    let element = await this.driver.$('*=Design');
    return await element.click();
})

When('I type the text {kraken-string}', async function (texto) {
    let element = await this.driver.$('#ember218').waitForDisplayed(5000);
    return await element.setValue(texto);
});

When('I save information', async function() {
    let element = await this.driver.$('*=Save');
    return await element.click();
})
