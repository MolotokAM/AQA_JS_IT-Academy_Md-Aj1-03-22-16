class BasePage {
    constructor() {
    }

    async navigate(url) {
        await browser.url(url)
    }

    async close() {
        await browser.closeWindow();
    }
}

module.exports = BasePage;
