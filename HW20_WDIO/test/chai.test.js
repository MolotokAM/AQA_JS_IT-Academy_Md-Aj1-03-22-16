const PageFactory = require('../pageObjects/pageFactory');
const { expect } = require('chai');

const Page = new PageFactory();

describe.skip('WebdriverIO  tests', () => {
    it(`Check Text 'WebdriverIO ' in MainTitle`, async () => {
        await Page.homePage.navigate('https://webdriver.io/');
        await expect(await browser.getTitle()).to.contain('WebdriverIO');
        await expect(await browser.getUrl()).to.contain('webdriver');
    })

    it(`Check subTitle on HomePage`, async () => {
        await Page.homePage.navigate('https://webdriver.io/');
        await expect(await Page.homePage.subTitle.getText()).to.contain('Next-gen browser and mobile automation test framework for Node.js');

    })

    it(`Check Text 'Blog ' in MainTitle`, async () => {
        await Page.homePage.navigate('https://webdriver.io/');
        await Page.baseElement.click(Page.header.blogButton);
        await expect(await browser.getTitle()).to.contain('Blog');
        await expect(await browser.getUrl()).to.contain('blog');
    })

    it(`Check searching functionality`, async () => {
        await Page.homePage.navigate('https://webdriver.io/');
        await Page.baseElement.click(Page.searchComponents.searchButton);
        await Page.searchComponents.getSearch('Expect');
        await expect(await browser.getUrl()).to.contain('expect');
        console.log(await Page.searchComponents.searchResultTitle.getText());
        await expect(await Page.searchComponents.searchResultTitle.getText()).to.contain('Expect');
    })

    it(`Check api-element "click" in API tab`, async () => {
        await Page.homePage.navigate('https://webdriver.io/');
        await Page.baseElement.click(Page.header.apiButton);
        await Page.baseElement.click(Page.apiPage.tabElement);
        await Page.baseElement.click(Page.apiPage.elemClick);
        await expect(await browser.getUrl()).to.contain('click');
        console.log(await Page.apiPage.headerSelector.getText());
        await expect(await Page.apiPage.headerSelector.getText()).to.contain('click');
    })

    it(`Check switch lighting mode (Light or Dark)`, async () => {
        await Page.homePage.navigate('https://webdriver.io/');
        await Page.baseElement.click(Page.header.apiButton);
        await Page.baseElement.click(Page.header.modeSwitcherButton);
        console.log(await Page.header.getTheme());
        await expect(await Page.header.getTheme()).to.contain('dark');
    })
});
