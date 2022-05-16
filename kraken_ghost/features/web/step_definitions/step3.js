const { Given, When, Then } = require('@cucumber/cucumber');


When('I click Revoke', async function() {
    const link = await this.driver.$("*= Revoke")
    console.log(await link.getText()) // outputs: "Webd console.log(await link.getAttribute('href'))
    link.click();
})

When('I see the message revoked Invited {kraken-string}', async function (mensaje) {
    let alertText = await this.driver.$('span=Invitation revoked').getText();
    if(alertText==mensaje){
        console.log("texto encontrado");
    }else{
        console.log("texto no encontrado");
    }
});