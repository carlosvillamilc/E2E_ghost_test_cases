const { Given, When, Then } = require('@cucumber/cucumber');
//var {browser} = require('cucumber')
//var { document} = require('cucumber')


//Unpublish post 
When('I click Published posts', async function() {
    let element = await this.driver.$(`a[href="#/posts/?type=published"]`);
    element.click();
});

When('I click the first published post', async function() {
    let element = await this.driver.$('.gh-list-row gh-posts-list-item');
    element.click();
});


When('I click update post', async function() {
    let element = await this.driver.$('.ember-view ember-basic-dropdown-trigger  gh-btn gh-btn-outline gh-publishmenu-trigger');
    element.click();
});


When('I click unpublish option', async function() {
    let element = await this.driver.$('.gh-publishmenu-radio-button');
    element.click();
});

When('I confirm unpublish', async function() {
    let element = await this.driver.$('.gh-btn gh-btn-blue gh-publishmenu-button gh-btn-icon ember-view');
    element.click();
});

// Create Tag

When('I click on Tags', async function() {
    let element = await this.driver.$(`a[href="#/tags/"]`);
    element.click();
});

When('I click newtag', async function() {
    let element = await this.driver.$(`a[href="#/tags/new/"]`);
    element.click();
});

When('I write the tag name', async function () {
    let element = await this.driver.$('#tag-name');
    return await element.setValue("The name of the tag is this one");
});

When('I click on save tag', async function() {
    let element = await this.driver.$('.gh-btn.gh-btn-blue.gh-btn-icon.ember-view');
    element.click();
});

// Change tag name

When('I click the first tag', async function() {
    let element = await this.driver.$('.gh-list-row.gh-tags-list-item.ember-view');
    element.click();
});

When('I write the new tag name', async function () {
    let element = await this.driver.$('#tag-name');
    return await element.setValue("The new name of the tag is this one, please check is different");
});

// Delete pages 

When('I enter to the Pages', async function() {
    let element = await this.driver.$(`a[href="#/pages/"]`);
    element.click();
});

When('I click the first page', async function() {
    let element = await this.driver.$('.gh-list-row.gh-posts-list-item');
    element.click();
});

When('I click post settings', async function() {
    let element = await this.driver.$('.post-settings');
    element.click();
});

When('I click delete page', async function() {
    let element = await this.driver.$('.gh-btn.gh-btn-hover-red.gh-btn-icon.settings-menu-delete-button');
    element.click();
});

When('I click confirm delete page', async function() {
    let element = await this.driver.$('.gh-btn gh-btn-red gh-btn-icon ember-view');
    element.click();
});