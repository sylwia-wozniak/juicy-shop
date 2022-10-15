/// <reference types="cypress" />

import { commonSelectors } from '../../utils/constants';

const homePage = {
    clickAccountButton() {
        return cy.get('#navbarAccount').click();
    },
    goToProfile() {
        return cy.get('div[role=menu]').find('button').contains(Cypress.env('email')).click();
    },
    verifyLanguage(languageAbbreviation) {
        return cy.get('[aria-label="Language selection menu"]').contains(languageAbbreviation);
    },
    clickLanguageButton() {
        return cy.get('[aria-label="Language selection menu"]').click();
    },
    selectLanguage(language) {
        return cy.get('.mat-menu-content').find('.flag-icon').parent().contains(language).click();
    },
    clickCardName(juicyName) {
        return cy.get('.item-name').contains(juicyName).click();
    },
    clickAddToBasketButton(juicyName) {
        return cy
            .get('.item-name')
            .contains(juicyName)
            .closest(commonSelectors.juiceCard)
            .find('[aria-label="Add to Basket"]')
            .click();
    },
    goToBasket() {
        return cy.get('[aria-label="Show the shopping cart"]').click();
    },
};

export default homePage;
