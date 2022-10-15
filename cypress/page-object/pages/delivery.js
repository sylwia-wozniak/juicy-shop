/// <reference types="cypress" />

const deliveryPage = {
    selectFirstDeliveryMethod() {
        return cy.get('mat-radio-button').first().click();
    },
    submitDelivery() {
        return cy.get('[aria-label="Proceed to delivery method selection"]').click();
    },
};

export default deliveryPage;
