const PageFactory = require('../pageObjects/pageFactory');

const Page = new PageFactory();

describe('WebdriverIO tests', () => {
    it.skip(`Check Text 'WebdriverIO' in MainTitle`, async () => {
        await Page.homePage.navigate('https://webdriver.io/');
        await expect(browser).toHaveTitleContaining('WebdriverIO');
        await expect(browser).toHaveUrlContaining('webdriver');
    })

    it.skip(`Check subTitle on HomePage`, async () => {
        await Page.homePage.navigate('https://webdriver.io/');
        await expect(Page.homePage.subTitle).toBeExisting();
        await expect(Page.homePage.subTitle).toHaveText('Next-gen browser and mobile automation test framework for Node.js');

    })

    it.skip(`Check Text 'Blog ' in MainTitle`, async () => {
        await Page.homePage.navigate('https://webdriver.io/');
        await Page.baseElement.click(Page.header.blogButton);
        await expect(browser).toHaveTitleContaining('Blog');
        await expect(browser).toHaveUrlContaining('blog');
    })

    it.skip(`Check searching functionality`, async () => {
        await Page.homePage.navigate('https://webdriver.io/');
        await Page.baseElement.click(Page.searchComponents.searchButton);
        await Page.searchComponents.getSearch('Expect');
        await expect(browser).toHaveUrlContaining('expect');
        await expect(await Page.searchComponents.searchResultTitle).toHaveText('Expect');
    })

    it.skip(`Check api-element "click" in API tab`, async () => {
        await Page.homePage.navigate('https://webdriver.io/');
        await Page.baseElement.click(Page.header.apiButton);
        await Page.baseElement.click(Page.apiPage.tabElement);
        await Page.baseElement.click(Page.apiPage.elemClick);
        await expect(browser).toHaveUrlContaining('click');
        console.log(await Page.apiPage.headerSelector.getText());
        await expect(await Page.apiPage.headerSelector).toHaveText('click');
    })

    it(`Check switch lighting mode (Light or Dark)`, async () => {
        await Page.homePage.navigate('https://webdriver.io/');
        await Page.baseElement.click(Page.header.apiButton);
        await Page.baseElement.click(Page.header.modeSwitcherButton);
        console.log(await Page.header.getTheme());
        await expect(await Page.header.fieldSwithMode).toHaveAttr('data-theme');
    })
});

