const { Given, When, Then, browser } = require('@cucumber/cucumber');
const expect = require('chai').expect;

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

Then('I click button send invitation and check', async function() {
    let errorMsg = 'A user with that email address was already invited'
    let element = await this.driver.$('button=Send invitation now');
    await element.click();
    let responseElement= await this.driver.$('p.response');    
    responseMessage = await responseElement.getText();    
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

/*
Then('I click on the first conversation', async function () {
    let element = await this.driver.$(".i224opu6 > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1)");

    return await element.click();
});
*/
Then('I delete first design navigation item', async function () {
    let element = await this.driver.$("/html/body/div[2]/div/main/section/section/div[2]/form/div[1]/div[1]/div/button");
    return await element.click();
});

Then('I click on Save', async function () {
    let element = await this.driver.$("/html/body/div[2]/div/main/section/header/section/button");
    return await element.click();
});

Then('I click on profile', async function () {
    let element = await this.driver.$(".gh-nav-bottom");
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
    let element = await this.driver.$('[placeholder="Post Title"]')    
    await element.setValue(postTitle);
    let element2 = await this.driver.$('[data-placeholder="Begin writing your post..."]')    
    await element2.click();
    return await element2.setValue(postTitle);
});

Then('I click on Publish', async function () {   
    let element = await this.driver.$('div[class="ember-view ember-basic-dropdown-trigger  gh-btn gh-btn-outline gh-publishmenu-trigger"]');    
    await element.click();
    let element2 = await this.driver.$('button[class="gh-btn gh-btn-blue gh-publishmenu-button gh-btn-icon ember-view"]');    
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

/*
Then('I click on the redact message inputbox', async function () {
    let element = await this.driver.$("p.kvgmc6g5");
    return await element.click();

  });

  Then('I send the message', async function () {
    let element = await this.driver.$("span.tojvnm2t:nth-child(3) > div:nth-child(1)");
    return await element.click();
  });*/