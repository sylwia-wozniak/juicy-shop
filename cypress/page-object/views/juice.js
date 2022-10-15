/// <reference types="cypress" />

const juiceDialog = {
    addReview(reviewText) {
        return cy.get('[aria-label="Text field to review a product"]').click().type(reviewText);
    },
    submitReview() {
        return cy.get('#submitButton').click();
    },
    getSnackBarAboutReviewSuccess(snackBarText) {
        return cy.get('simple-snack-bar').contains(snackBarText);
    },
};

export default juiceDialog;
