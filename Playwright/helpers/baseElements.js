const BasePage = require('../pageObjects/basePage');

class BaseElement extends BasePage {
    constructor(page) {
        super(page);
        this.page = page;
    }

    async click(element) {
        await element.waitFor('visible');
        await element.click();
    }

}

module.exports = BaseElement;