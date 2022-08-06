const BasePage = require('../basePage');

class Search extends BasePage {
    constructor(page) {
        super(page);
        this.page = page;
        this.searchField = page.locator('#searchInput');
    }

    async searchProduct (text) {
        await this.searchField.fill(text);
        await this.searchField.press('Enter');
    }
}

module.exports = Search;