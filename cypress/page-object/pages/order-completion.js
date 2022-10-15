/// <reference types="cypress" />

const orderCompletionPage = {
    clickPrintOrderButton() {
        return cy.get('[aria-label="Print order confirmation"]').click();
    },
};

export default orderCompletionPage;
