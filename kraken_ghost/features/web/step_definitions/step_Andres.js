const { Given, When, Then } = require('@cucumber/cucumber');
var {browser} = require('cucumber')


When('I enter  entre new post content {kraken-string}', async function (content) {
    let element = await this.driver.$('[data-placeholder="Begin writing your post..."]')
    return await element.setValue(content);
});

When('I click on Publish option', async function(){
    let element = await this.driver.$('#ember641')
    return await element.click();
});

When('I click on Drafts', async function(){
    let element = await this.driver.$('#ember920')
    return await element.click();
});

When('I enter to first draft', async function(){
    let element = await this.driver.$('#ember1157')
    return await element.click();
});

When('I click on Published', async function(){
    let element = await this.driver.$('#ember1241')
    return await element.click();
});

When('I enter to first published', async function(){
    let element = await this.driver.$('#ember1318')
    return await element.click();
});

When('I click on Update', async function(){
    let element = await this.driver.$('#ember1532')
    return await element.click();
});

When('I click on Update option', async function(){
    let element = await this.driver.$('#ember1587')
    return await element.click();
});

When('I click on Pages', async function(){
    let element = await this.driver.$('#ember1815')
    return await element.click();
});

When('I click on New Page', async function(){
    let element = await this.driver.$('#ember1826')
    return await element.click();
});

When('I click on Scheduled', async function(){
    let element = await this.driver.$('#ember2300')
    return await element.click();
});

When('I click on Scheduled New post', async function(){
    let element = await this.driver.$('#ember2341')
    return await element.click();
});