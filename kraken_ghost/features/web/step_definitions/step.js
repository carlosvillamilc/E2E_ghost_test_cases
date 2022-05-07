const { Given, When, Then } = require('@cucumber/cucumber');
/*16. Login 
Design 
Borrar label 
Save 
View site 
Validar que no este el label 
Cuenta 
Logout */

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
    let element = await this.driver.$("//*[text()='Test']");
    return await element.click();
});

Then('I delete first design navigation item', async function () {
    let element = await this.driver.$("/html/body/div[2]/div/main/section/section/div[2]/form/div[1]/div[1]/div/button");
    return await element.click();
});

Then('I click on Save', async function () {
    let element = await this.driver.$("/html/body/div[2]/div/main/section/header/section/button");
    return await element.click();
});

Then('I click on profile', async function () {
    let element = await this.driver.$("#ember48");
    return await element.click();
});

Then('I click Sign Out', async function () {
    //let element = await this.driver.$("#ember70");
    let element = await this.driver.$('=Sign Out');
    return await element.click();
});

Then('I click on Posts', async function () {   
    let element = await this.driver.$(`a[href="#/posts/"]`);    
    return await element.click();
});

Then('I click on New Post', async function () {   
    let element = await this.driver.$(`a[href="#/editor/post/"]`);    
    return await element.click();
});
Then('I enter entre post title {kraken-string}', async function (postTitle) {
    let element = await this.driver.$('[placeholder="Post Title"]')
    return await element.setValue(postTitle);
});
Then('I click on Publish', async function () {   
    let element = await this.driver.$('.gh-btn gh-btn-outline');    
    return await element.click();
});
/*
Then('I click on the redact message inputbox', async function () {
    let element = await this.driver.$("p.kvgmc6g5");
    return await element.click();

  });

  Then('I send the message', async function () {
    let element = await this.driver.$("span.tojvnm2t:nth-child(3) > div:nth-child(1)");
    return await element.click();
  });*/