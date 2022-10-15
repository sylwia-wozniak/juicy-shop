/// <reference types="cypress" />

const cookieDialog = {
    dismissCookieDialog() {
        return cy.get('[aria-label="dismiss cookie message"]').click();
    },
};

export default cookieDialog;
