require('cypress-xpath');
const MainPage = require('../pageObjects/main.page');

class TestingPage extends MainPage {
    constructor() {
        super()
        this.optionOneCheckbox = '(//div[@class="checkboxes"]//input)[1]'
        this.optionTwoCheckbox = '(//div[@class="checkboxes"]//input)[2]'
        this.optionThreeCheckbox = '(//div[@class="checkboxes"]//input)[3]'
        this.optionOneTrigger = '//ul[@data-cy="box-4-items-list"]//li[contains(text(),"Option One")]'
        this.optionTwoTrigger = '//ul[@data-cy="box-4-items-list"]//li[contains(text(),"Option Two")]'
        this.optionThreeTrigger = '//ul[@data-cy="box-4-items-list"]//li[contains(text(),"Option Three")]'
    }

    getActiveTriggeredItem() {
        return cy.xpath('//span[@data-cy="box-4-selected-name"]')
    }

    getActiveCheckboxesCounter() {
        return cy.xpath('//span[@data-cy="box-2-selected-count"]')
    }
};

module.exports = new TestingPage();