const { Given, When, Then } = require('@cucumber/cucumber');
var {browser} = require('cucumber')
var { document} = require('cucumber')
const { expect } = require('chai');

When('I click Resend', async function() {
    const link = await this.driver.$("*= Resend")
    console.log(await link.getText()) // outputs: "Webd console.log(await link.getAttribute('href'))
    link.click();

})

/*When('I see the message resend Invited {kraken-string}', async function (mensaje) {
    let alertText = await this.driver.$('span=Sending Invite...').getText();
    if(alertText==mensaje){
        console.log("texto encontrado");
    }else{
        console.log("texto no encontrado");
    }
});*/

Then('I see the message resend Invited', async function() {
    const isDisplayed = await this.driver.$('span=Sending Invite...').isDisplayed();
    //console.log(isDisplayed);
    expect(isDisplayed).to.equal(true);
});
