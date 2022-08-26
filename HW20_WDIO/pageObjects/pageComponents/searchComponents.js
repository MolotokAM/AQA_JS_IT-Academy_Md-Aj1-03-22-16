const BasePage = require('../../pageObjects/basePage')

class SearchComponents extends BasePage {
    constructor() {
        super();
    }

    get searchButton() {
        return $('.DocSearch-Button-Placeholder');
    }

    get searchField() {
        return $('.DocSearch-Input');
    }

    get firstSearchResult() {
        return $(' #docsearch-item-0');
    }

    get searchResultTitle() {
        return $('header > h1');
    }

    async getSearch(request, timeout = 3000) {
        await this.searchField.setValue(request);
        await this.firstSearchResult.waitForDisplayed(timeout);
        await this.firstSearchResult.click();
        return this.searchResultTitle.waitForDisplayed(timeout);
    }
}

module.exports = SearchComponents;
