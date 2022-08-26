module.exports = class MainPage {
    get(locator) {
        if (locator.includes('//'))
            return cy.xpath(locator)
        else return cy.get(locator)
    }
};