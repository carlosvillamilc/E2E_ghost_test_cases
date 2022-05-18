const { Given, When, Then } = require('@cucumber/cucumber');


When('I click option Design for label', async function() {
    let element = await this.driver.$('*=Design');
    return await element.click();
})

When('I click on the image', async function () {
    let link = await this.driver.$('div.theme-directory>a:nth-child(1)');
    return await link.click();
});

When('I save information', async function() {
    let element = await this.driver.$('*=Save');
    return await element.click();
})
//#ember3 > div > main > section > section > div.gh-theme-directory-container > div.theme-directory > a:nth-child(1)