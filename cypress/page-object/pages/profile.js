/// <reference types="cypress" />

import 'cypress-file-upload';

const profilePage = {
    submitUploadPicture() {
        return cy.get('button[type=submit]').contains('Upload Picture').click();
    },
    uploadPicture() {
        return cy.get('#picture').attachFile('coffee.jpg');
    },
};

export default profilePage;
