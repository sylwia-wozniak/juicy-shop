/// <reference types="cypress" />

import { headings, paths } from './constants';
import cookieDialog from '../page-object/views/cookie';
import registerPage from '../page-object/pages/register';
import loginPage from '../page-object/pages/login';
import welcomeDialog from '../page-object/views/welcome';

const baseFunctions = {
    getAndCloseWelcomeDialog() {
        welcomeDialog.getWelcomeDialog();
        welcomeDialog.dismissWelcomeDialog();
        welcomeDialog.getWelcomeDialog();
    },

    validateUrl(path) {
        cy.url().should('contain', path);
    },

    login() {
        loginPage.validateHeading(headings.loginHeading);
        loginPage.typeEmail(Cypress.env('email'));
        loginPage.typePassword(Cypress.env('password'));
        loginPage.clickLoginButton();
    },

    registerAndLogin: () => {
        cy.session('registrationAndLogin', () => {
            cy.intercept('POST', '/api/SecurityAnswers/').as('successfulRegistration');
            cy.visit(paths.registerPath);
            baseFunctions.getAndCloseWelcomeDialog();
            cookieDialog.dismissCookieDialog();
            registerPage.validateHeading(headings.registerHeading);
            registerPage.typeEmail(Cypress.env('email'));
            registerPage.typePassword(Cypress.env('password'));
            registerPage.repeatPassword(Cypress.env('password'));
            registerPage.selectFirstSecurityQuestion();
            registerPage.fillAnswerInput('Answer');
            registerPage.clickRegisterButton();
            cy.wait('@successfulRegistration');
            baseFunctions.validateUrl(paths.loginPath);
            baseFunctions.login();
            baseFunctions.validateUrl(paths.homePath);
        });
    },
};

export default baseFunctions;
