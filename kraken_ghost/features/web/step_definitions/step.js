const { Given, When, Then } = require('@cucumber/cucumber');

let globalText = "";

When('I enter email {kraken-string}', async function (email) {
    let element = await this.driver.$('#ember8');
    return await element.setValue(email);
});

When('I enter password {kraken-string}', async function (password) {
    let element = await this.driver.$('#ember10');
    return await element.setValue(password);
});

When('I click Sign In', async function() {
    let element = await this.driver.$('#ember12');
    return await element.click();
})


Then('I click on Design', async function () {
    let element = await this.driver.$("#ember42");    
    return await element.click();
});

Then('I click on Your Profile', async function () {
    let element = await this.driver.$("/html/body/div[1]/div/ul/li[4]/a");    
    return await element.click();
});

Then('I enter new user name {kraken-string}', async function (name) {
    let element = await this.driver.$('.user-name');
    return await element.setValue(name);
});

Then('I check Navigation Text', async function () {
    let element = await this.driver.$("/html/body/div[2]/div/main/section/section/div[2]/form/div[1]/div/div/div/span[1]/input");
    globalText = element.getValue();
    globalText = String(globalText);    
});

Then('I click on View Site', async function () {
    let element = await this.driver.$(`a[href="#/site/"]`);    
    return await element.click();
});

When('I click on Suscribe', async function () {
    let element = await this.driver.$(`a[href="#subscribe"]`);        
    return await element.click();
});

When('I enter email to suscribe {kraken-string}', async function (email) {
    let element = await this.driver.$('.suscribe-email');
    return await element.setValue(email);
});

Then('I check Navigation Text on site', async function () {
    let navText = String(globalText);
    navText.toLowerCase();
    console.log(navText);    
    let element = await this.driver.$("//*[text()='Test']")});

When('I click Staff', async function() {
    let element = await this.driver.$('*=Staff');
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
});

When('I click close popup Invite a New User', async function() {
    let element = await this.driver.$('.close');
    element.click();
});

When('I close session', async function() {
    let element = await this.driver.$('.gh-user-email');
    element.click();
});

When('I click option Sign Out', async function() {
    let element = await this.driver.$('.dropdown-item.user-menu-signout.ember-view');
    element.click();
});

Then('I enter page title {kraken-string}', async function (postTitle) {
    let element = await this.driver.$('[placeholder="Page Title"]')
    await element.setValue(postTitle);
    let element2 = await this.driver.$('[data-placeholder="Begin writing your page..."]')
    return await element2.setValue(postTitle);
});

Then('I enter post title {kraken-string}', async function (postTitle) {
    let element = await this.driver.$('[placeholder="Post Title"]')
    await element.setValue(postTitle);
    let element2 = await this.driver.$('[data-placeholder="Begin writing your post..."]')
    return await element2.setValue(postTitle);
});

Then('I click on Publish', async function () {   
    let element = await this.driver.$('.gh-btn gh-btn-outline');    
    return await element.click();
});

Then('I click Sign Out', async function () {
    //let element = await this.driver.$("#ember70");
    let element = await this.driver.$(`a[href="#/signout/"]`);
    return await element.click();
});

Then('I click on profile', async function () {
    //let element = await this.driver.$(".gh-nav-bottom");
    let element = await this.driver.$("div.gh-user-avatar.relative");
    return await element.click();
});