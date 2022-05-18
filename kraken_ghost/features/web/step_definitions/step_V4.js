const { Given, When, Then } = require('@cucumber/cucumber');

const { expect } = require('chai');

let globalText = "";

When('I enter password Ghost V4 {kraken-string}', async function (password) {
    let element = await this.driver.$('.password.ember-text-field.gh-input.ember-view');
    return await element.setValue(password);
});

When('I click Sign In Ghost V4', async function() {
    let element = await this.driver.$('#ember11');
    return await element.click();
})

When('I click change Night shift V4', async function() {
    let element = await this.driver.$('.nightshift-toggle');
    return await element.click();
})

When('I click option configuration ghost V4', async function() {
    let element = await this.driver.$('//section/div[2]/div[1]/div/div[2]/a');
    return await element.click();
})

When('I click in option Labs Ghost V4', async function() {
    let element = await this.driver.$('.pink');
    return await element.click();
})

When('I click in option Staff Ghost V4', async function() {
    let element = await this.driver.$('.green');
    return await element.click();
})

When('I close session Ghost v4', async function() {
    let element = await this.driver.$('gh-user-avatar.relative');
    element.click();
});

When('I enter invited email Ghost V4', async function () {
    var numero = getRandomArbitrary(0, 100);
        numero = Math.round(numero);
        var emailPart1 = 'yirzajes';
        var emailPart2 = '@gmail.com'
    let element = await this.driver.$('.email.ember-text-field.gh-input.ember-view');
    return await element.setValue(emailPart1+numero+emailPart2);
});

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }

When('I click on button Send invited Ghost V4', async function() {
    let element = await this.driver.$('span=Send invitation now →');
    element.click();
});

Then('I can see the invited users', async function() {
    const isDisplayed = await this.driver.$('h4=Invited users').isDisplayed();
    //console.log(isDisplayed);
    expect(isDisplayed).to.equal(true);
});

Then('I see the message revoked Invited Ghost V4', async function () {
    const isDisplayed = await this.driver.$('span=Invitation revoked').isDisplayed();
    expect(isDisplayed).to.equal(true);
});

When('I close session ghost V4', async function() {
    let element = await this.driver.$('.flex-auto.flex.items-center');
    element.click();
});

When('I click option Sign Out Ghost V4', async function() {
    let element = await this.driver.$('.ember-view.dropdown-item.user-menu-signout');
    element.click();
});