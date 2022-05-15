const { Given, When, Then } = require('@cucumber/cucumber');
var {browser} = require('cucumber')
var { document} = require('cucumber')

When('I click option Members', async function() {
    let element = await this.driver.$('div=Members');
    return await element.click();
})

When('I click option activate members', async function() {
    let element = await this.driver.$('.input-toggle-component');
    return await element.click();
})

Then('I can see other otions in Screen {kraken-string}', async function (mensaje) {
    let alertText = await this.driver.$('div=Portal').getText();
    if(alertText==mensaje){
        console.log("texto encontrado");
    }else{
        alertText = await this.driver.$('span=Save settings').click();
        console.log("texto no encontrado");
    }
});