const { Given, When, Then } = require('@cucumber/cucumber');
var {browser} = require('cucumber')
var { document} = require('cucumber')

When('I click Labs', async function() {
    let element = await this.driver.$('*=Labs');
    return await element.click();
})

When('I click change Night shift', async function() {
    let element = await this.driver.$('.checkbox.ember-view');
    return await element.click();
})