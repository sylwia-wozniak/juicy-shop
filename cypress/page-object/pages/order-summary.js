/// <reference types="cypress" />

const orderSummaryPage = {
    submitOrderAndPayContinue() {
        return cy.get('#checkoutButton').click();
    },
};

export default orderSummaryPage;
