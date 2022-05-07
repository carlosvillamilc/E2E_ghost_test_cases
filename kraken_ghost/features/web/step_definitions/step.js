const { Given, When, Then } = require('@cucumber/cucumber');

When('I enter email {kraken-string}', async function (email) {
    let element = await this.driver.$('#ember8');
    return await element.setValue(email);
});

When('I enter password {kraken-string}', async function (password) {
    let element = await this.driver.$('#ember10');
    return await element.setValue(password);
});

When('I click next', async function() {
    let element = await this.driver.$('#ember12');
    return await element.click();
})

When('I click Staff', async function() {
    let element = await this.driver.$('#ember39');
    return await element.click();
})

When('I click Invite people', async function() {
    let element = await this.driver.$('button=Invite people');
    element.click();
})

When('I enter invited email', async function () {
    let element = await this.driver.$('#new-user-email');
    return await element.setValue("yirzajes@gmail.com");
});

When('I click button invited', async function() {
    let element = await this.driver.$('button=Send invitation now');
    element.click();
})
/*
Then('I click on the first conversation', async function () {
    let element = await this.driver.$(".i224opu6 > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1)");
    return await element.click();
});

Then('I click on the redact message inputbox', async function () {
    let element = await this.driver.$("p.kvgmc6g5");
    return await element.click();

  });

  Then('I send the message', async function () {
    let element = await this.driver.$("span.tojvnm2t:nth-child(3) > div:nth-child(1)");
    return await element.click();
  });*/