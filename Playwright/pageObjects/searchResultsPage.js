const BasePage = require('./basePage');

class SearchResultsPage extends BasePage {
    constructor(page) {
        super(page);
        this.page = page;
        this.goodsName = page.locator('.goods-name');
        this.firstResult = page.locator('#c71597493');
    }
}

module.exports = SearchResultsPage;