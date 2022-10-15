/// <reference types="cypress" />

const basketPage = {
    clickCheckoutButton() {
        return cy.get('#checkoutButton').click();
    },
};

export default basketPage;
