/// <reference types="cypress" />

import { paths } from '../utils/constants';
import homePage from '../page-object/pages/home';
import profilePage from '../page-object/pages/profile';
import baseFunctions from '../utils/base';

describe('Account settings', () => {
    beforeEach(() => {
        baseFunctions.registerAndLogin();
    });

    it('A user should go to settings, upload an avatar and save it', () => {
        cy.intercept('GET', '/assets/public/images/uploads/**').as('upload');
        cy.visit('/');
        homePage.clickAccountButton();
        homePage.goToProfile();
        baseFunctions.validateUrl(paths.profilePath);
        profilePage.uploadPicture();
        profilePage.submitUploadPicture();
        cy.wait('@upload');

        // I don' t know if this test is enough, without assertion, I see my uploaded file in the profile, not in the Account icon
        // I don't know how to check if the file is uploaded / saved
    });
});
