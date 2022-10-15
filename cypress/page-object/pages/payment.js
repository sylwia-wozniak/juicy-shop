/// <reference types="cypress" />

const paymentPage = {
    expandPaymentOptionToAddNewCard() {
        return cy.get('mat-expansion-panel-header').first().click();
    },
    typeName(name) {
        return cy.get('input').eq(1).type(name); //weak solution, but there are weak selectors
    },
    typeCardNumber(cardNumber) {
        return cy.get('input').eq(2).type(cardNumber); //weak solution, but there are weak selectors
    },
    selectExpiryMonth() {
        return cy.get('select').eq(0).select(0); //weak solution, but there are weak selectors
    },
    selectExpiryYear() {
        return cy.get('select').eq(1).select(0); //weak solution, but there are weak selectors
    },
    submitAddingCard() {
        return cy.get('#submitButton').click();
    },
    selectCard() {
        return cy.get('mat-radio-button').first().click();
    },
    submitPaymentContinue() {
        return cy.get('[aria-label="Proceed to review"]').click();
    },
};

export default paymentPage;
