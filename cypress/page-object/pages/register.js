/// <reference types="cypress" />

const registerPage = {
    validateHeading(heading) {
        return cy.get('mat-card > h1').contains(heading);
    },
    typeEmail(email) {
        return cy.get('#emailControl').type(email);
    },
    typePassword(password) {
        return cy.get('#passwordControl').type(password);
    },
    repeatPassword(password) {
        return cy.get('#repeatPasswordControl').type(password);
    },
    selectFirstSecurityQuestion() {
        cy.get('.security-container mat-select').click();
        cy.get('div[role=listbox]').find('mat-option').first().click();
    },
    fillAnswerInput(answer) {
        return cy.get('#securityAnswerControl').type(answer);
    },
    clickRegisterButton() {
        return cy.get('#registerButton').click();
    },
};

export default registerPage;
