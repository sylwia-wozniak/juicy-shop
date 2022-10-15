/// <reference types="cypress" />

const welcomeDialog = {
    getWelcomeDialog() {
        return cy.get('mat-dialog-container[role="dialog"]').should('not.exist');
    },
    dismissWelcomeDialog() {
        return cy.get('.close-dialog').click();
    },
};

export default welcomeDialog;
