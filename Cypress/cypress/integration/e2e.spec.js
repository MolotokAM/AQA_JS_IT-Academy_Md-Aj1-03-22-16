const _ = require("../pageObjects/testing.page")

describe(`Testing first part of the app. Methods 'click' and 'dblClick'`, () => {
    beforeEach(() => {
        cy.visit('http://localhost:5500/example-4')
    });

    it(`Field 'Selected Item' changed after dblclick`, () => {
        cy.get('.box-1-list-item')
            .first()
            .dblclick()

        cy.get('span[data-cy="box-1-selected-name"]')
            .should('have.text', 'Option One')

        cy.get('.box-1-list-item')
            .last()
            .dblclick()

        cy.get('span[data-cy="box-1-selected-name"]')
            .should('have.text', 'Option Three')
    });

    it('Highlight element after click on it', () => {
        cy.get('.box-1-list-item')
            .first()
            .click()
            .should('have.class', 'lgSOuT')

        cy.get('.box-1-list-item:nth-child(2)')
            .last()
            .click()
            .should('have.class', 'lgSOuT')
    });
});

describe(`Testing second part of the app. Methods 'check' and 'uncheck'`, function () {
    beforeEach(function () {
        cy.visit('http://localhost:5500/example-4')
    });

    it('Counter of active checkboxes changes after the checkboxes are checked and unchecked', function () {
        const _ = require("../pageObjects/testing.page")

        _
            .get(fourthPage.optionOneCheckbox)
            .check()

        _
            .getActiveCheckboxesCounter()
            .should('have.text', 1)

        _
            .get(fourthPage.optionTwoCheckbox)
            .check()

        _
            .getActiveCheckboxesCounter()
            .should('have.text', 2)

        _
            .get(fourthPage.optionThreeCheckbox)
            .check()

        _
            .getActiveCheckboxesCounter()
            .should('have.text', 3)

        _
            .get(fourthPage.optionOneCheckbox)
            .uncheck()

        _
            .get(fourthPage.optionTwoCheckbox)
            .uncheck()

        _
            .get(fourthPage.optionThreeCheckbox)
            .uncheck()

        _
            .getActiveCheckboxesCounter()
            .should('have.text', 0)
    });
});

describe(`Testing third part of the app. Adding Cypress commands and method 'select'`, function () {
    beforeEach(function () {
        cy.visit('http://localhost:5500/example-4')
    });

    it('Сhange the text of the value of selected item after selecting another value', function () {
        cy.selectValueTwo()
        cy.getSelectedValue()
            .should('have.text', 'Option Two')

        cy.selectValueOne()
        cy.getSelectedValue()
            .should('have.text', 'Option One')

        cy.selectValueThree()
        cy.getSelectedValue()
            .should('have.text', 'Option Three')
    });
});

describe(`Testing fourth part of the app. Method 'trigger'`, function () {
    beforeEach(function () {
        cy.visit('http://localhost:5500/example-4')
    });

    it('Text of selected item value changed after mouse hover to another value', function () {
        _
            .get(fourthPage.optionOneTrigger)
            .trigger('mouseover')

        _
            .getActiveTriggeredItem()
            .should('have.text', 'Option One')

        _
            .get(fourthPage.optionTwoTrigger)
            .trigger('mouseover')

        _
            .getActiveTriggeredItem()
            .should('have.text', 'Option Two')

        _
            .get(fourthPage.optionThreeTrigger)
            .trigger('mouseover')

        _
            .getActiveTriggeredItem()
            .should('have.text', 'Option Three')
    });
});