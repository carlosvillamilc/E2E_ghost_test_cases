const { Given, When, Then } = require('@cucumber/cucumber');
var {browser} = require('cucumber')


<<<<<<< HEAD
When('I enter new post content {kraken-string}', async function (content) {
    let element = await this.driver.$('*="Begin writing your post..."')
    return await element.setValue(content);
});

When('I click on Publish button', async function(){
    let element = await this.driver.$('span=Publish')
=======
When('I enter  entre new post content {kraken-string}', async function (content) {
    let element = await this.driver.$('[data-placeholder="Begin writing your post..."]')
    return await element.setValue(content);
});

When('I click on Publish option', async function(){
    let element = await this.driver.$('#ember641')
>>>>>>> E2E_Juan
    return await element.click();
});

When('I click on Drafts', async function(){
<<<<<<< HEAD
    let element = await this.driver.$('a[href="#/posts/?type=draft"]')
=======
    let element = await this.driver.$('#ember920')
>>>>>>> E2E_Juan
    return await element.click();
});

When('I enter to first draft', async function(){
<<<<<<< HEAD
    let element = await this.driver.$('.ember-view.permalink.gh-list-data.gh-post-list-title');
    return await element.click();
});

When('I click on Publish option', async function(){
    let element = await this.driver.$('.gh-btn.gh-btn-blue.gh-publishmenu-button.gh-btn-icon.ember-view')
=======
    let element = await this.driver.$('#ember1157')
    return await element.click();
});

When('I click on Published', async function(){
    let element = await this.driver.$('#ember1241')
>>>>>>> E2E_Juan
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
<<<<<<< HEAD
    let element = await this.driver.$('a[href="#/pages/"]')
=======
    let element = await this.driver.$('#ember1815')
>>>>>>> E2E_Juan
    return await element.click();
});

When('I click on New Page', async function(){
<<<<<<< HEAD
    let element = await this.driver.$('a[href="#/editor/page/"]')
=======
    let element = await this.driver.$('#ember1826')
>>>>>>> E2E_Juan
    return await element.click();
});

When('I click on Scheduled', async function(){
<<<<<<< HEAD
    let element = await this.driver.$('a[href="#/posts/?type=scheduled"]')
=======
    let element = await this.driver.$('#ember2300')
>>>>>>> E2E_Juan
    return await element.click();
});

When('I click on Scheduled New post', async function(){
    let element = await this.driver.$('#ember2341')
    return await element.click();
});

When('I click Post', async function(){
    let element = await this.driver.$('a[href="#/posts/"]')
    return await element.click();
});

When('I click on New Post', async function(){
    let element = await this.driver.$('a[href="#/editor/post/"]')
    return await element.click();
});

When('I click on Published', async function(){
    let element = await this.driver.$('a[href="#/posts/?type=published"]')
    return await element.click();
});
