/// <reference types="cypress" />

import { faker } from '@faker-js/faker';
import juiceDialog from '../page-object/views/juice';
import homePage from '../page-object/pages/home';
import baseFunctions from '../utils/base';
import { snackBars } from '../utils/constants';

let juices = require('../fixtures/juices.json');

context('Home page', () => {
    beforeEach(() => {
        baseFunctions.registerAndLogin();
    });

    describe('Language changes', () => {
        it('A user should change language to Polish from English which is default', () => {
            cy.visit('/');
            homePage.clickLanguageButton();
            homePage.selectLanguage(' Język Polski ');
            homePage.verifyLanguage('PL');
        });
    });

    describe('Juice reviews', () => {
        juices.forEach((juice) => {
            it(`A user should add a review to ${juice.name}`, () => {
                cy.intercept('PUT', '/rest/products/**').as('addReview');
                cy.visit('/');
                homePage.clickCardName(juice.name);
                juiceDialog.addReview(faker.lorem.sentence());
                juiceDialog.submitReview();
                cy.wait('@addReview').its('response.statusCode').should('be.oneOf', [200, 201]);
                juiceDialog.getSnackBarAboutReviewSuccess(snackBars.reviewSuccess);
            });
        });
    });
});
