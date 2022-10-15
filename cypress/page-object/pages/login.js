/// <reference types="cypress" />

import { commonSelectors } from '../../utils/constants';

const loginPage = {
    validateHeading(heading) {
        return cy.get(`${commonSelectors.juiceCard} > h1`).contains(heading);
    },
    typeEmail(email) {
        return cy.get('input[name=email]').type(email);
    },
    typePassword(password) {
        return cy.get('input[name=password').type(password);
    },
    clickLoginButton() {
        return cy.get('button[type="submit"]').click();
    },
};

export default loginPage;
