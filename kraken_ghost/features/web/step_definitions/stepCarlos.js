const { Given, When, Then} = require('@cucumber/cucumber');

const expect = require('chai').expect;

let globalText = "";
When('I enter email {kraken-string}', async function (email) {
    let element = await this.driver.$('input[name="identification"]');
    //let element = await this.driver.$('#ember8');
    return await element.setValue(email);
});

When('I enter password {kraken-string}', async function (password) {
    let element = await this.driver.$('input[name="password"]');
    //let element = await this.driver.$('#ember10');
    return await element.setValue(password);
});

When('I click Sign In', async function() {
    //let element = await this.driver.$('#ember12');
    let element = await this.driver.$('button[type="submit"]');
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
    globalText = await element.getValue();
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

When('I enter email to subscribe {kraken-string}', async function (email) {
    let element = await this.driver.$('.subscribe-email');
    await element.setValue(email);
    let element2= await this.driver.$('#subscribe > div > div > form > div.form-group > button');
    return await element2.click();
});

Then('I check subscribe error', async function() {
    let errorMsg = 'Please enter a valid email address!'    
    let responseElement= await this.driver.$('div.message-error');    
    responseMessage = await responseElement.getText();    
    console.log(responseMessage)
    expect(responseMessage).to.equal(errorMsg);

});

Then('I click on X button', async function () {    
    let element = await this.driver.$('#subscribe > a.subscribe-close-button');
    return await element.click();
   
});

Then('I check Navigation Text on site', async function () {
    let navText = globalText.toLowerCase();
    console.log(navText);    
    let element = await this.driver.$(`li.nav-${navText} > a`);

});

When('I click Staff', async function() {
    let element = await this.driver.$(`a[href="#/staff/"]`);
    return await element.click();
})

When('I click Invite people', async function() {
    let element = await this.driver.$('button=Invite people');
    element.click();
})

When('I enter invited email', async function () {
    let element = await this.driver.$('#new-user-email');
    return await element.setValue("test@gmail.com");
});

When('I click button invited', async function() {
    let element = await this.driver.$('button=Send invitation now');
    element.click();
});


Then('I check error', async function() {
    let errorMsg = 'A user with that email address was already invited.'    
    let responseElement= await this.driver.$('p.response');    
    responseMessage = await responseElement.getText();    
    console.log(responseMessage)
    expect(responseMessage).to.equal(errorMsg);

});

When('I click close popup Invite a New User', async function() {
    let element = await this.driver.$('.close');
    element.click();
})

When('I close session', async function() {
    let element = await this.driver.$('.gh-user-email');
    element.click();
})

When('I click option Sign Out', async function() {
    let element = await this.driver.$('=Sign Out');
    element.click();
})

Then('I delete first design navigation item', async function () {
    let element = await this.driver.$("/html/body/div[2]/div/main/section/section/div[2]/form/div[1]/div[1]/div/button");
    return await element.click();
});

Then('I click on Save', async function () {
    //let element = await this.driver.$("/html/body/div[2]/div/main/section/header/section/button");
    let element = await this.driver.$('section[class="view-actions"]');
    return await element.click();
});

Then('I click on profile', async function () {
    //let element = await this.driver.$(".gh-nav-bottom");
    let element = await this.driver.$("div.gh-user-avatar.relative");
    return await element.click();
});


Then('I click Sign Out', async function () {
    //let element = await this.driver.$("#ember70");
    let element = await this.driver.$(`a[href="#/signout/"]`);
    return await element.click();
});

Then('I click on Posts', async function () {   
    let element = await this.driver.$(`a[href="#/posts/"]`);
    return await element.click();
});

Then('I click on Published', async function () {   
    let element = await this.driver.$(`a[href="#/posts/?type=published"]`);
    return await element.click();
});

Then('I filter by Author', async function () {   
    let nameElement = await this.driver.$("span.gh-user-name.mb1");
    let name = await nameElement.getValue();

    let element = await this.driver.$(`a[href="#/posts/?type=published"]`);
    return await element.click();
});


Then('I click on New Post', async function () {   
    let element = await this.driver.$(`a[href="#/editor/post/"]`);    
    return await element.click();
});
Then('I enter post title {kraken-string}', async function (postTitle) {
    let element = await this.driver.$('textArea[class="gh-editor-title ember-text-area gh-input ember-view"]')    
    await element.setValue(postTitle);
    let element2 = await this.driver.$('[data-placeholder="Begin writing your post..."]')    
    await element2.click();
    return await element2.setValue(postTitle);
});

Then('I click on Publish', async function () {   
    let element = await this.driver.$('div[class*="ember-view ember-basic-dropdown-trigger"]');    
    return await element.click();
});

Then('I click on Publish confirm', async function () {   
    let element2 = await this.driver.$('button[class*="gh-publishmenu-button gh-btn-icon ember-view"]');    
    return await element2.click(); 
});

Then('I click on Publish confirm v4', async function () {   
    let element = await this.driver.$('button[class="gh-btn gh-btn-black gh-publishmenu-button gh-btn-icon ember-view"]');    
    await element.click(); 

    let element2 = await this.driver.$('button[class="gh-btn gh-btn-black gh-btn-icon ember-view"]');    
    return await element2.click(); 
});

Then('I click on search option', async function () {   
    let element = await this.driver.$('button[class="gh-nav-btn-search"]');    
    return await element.click();    
});

Then('I search post title {kraken-string}', async function (postTitle) {
    let element = await this.driver.$('input[placeholder="Search site..."]');
    await element.setValue(postTitle);    
    expect(String(await element.getValue())).to.equal(postTitle);
    let element2 = await this.driver.$('div.fullscreen-modal-background');
});

Then('I search post title {kraken-string} v4', async function (postTitle) {
    let element = await this.driver.$('input[class="gh-input-with-select-input"]');
    await element.setValue(postTitle);    
    expect(String(await element.getValue())).to.equal(postTitle);
    let element2 = await this.driver.$('div.fullscreen-modal-background');
});
