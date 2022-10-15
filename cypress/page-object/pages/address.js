/// <reference types="cypress" />

import { commonSelectors } from '../../utils/constants';

const addressPage = {
    clickAddNewAddressButton() {
        return cy.get('[aria-label="Add a new address"]').click();
    },
    validateHeading(heading) {
        return cy.get(`${commonSelectors.juiceCard} > h1`).contains(heading);
    },
    typeCountry(countryName) {
        return cy.get('[data-placeholder="Please provide a country."]').type(countryName);
    },
    typeName(name) {
        return cy.get('[data-placeholder="Please provide a name."]').type(name);
    },
    typeMobileNumber(mobileNumber) {
        return cy.get('[data-placeholder="Please provide a mobile number."]').type(mobileNumber);
    },
    typeZipCode(zipCode) {
        return cy.get('[data-placeholder="Please provide a ZIP code."]').type(zipCode);
    },
    typeAddress(address) {
        return cy.get('[data-placeholder="Please provide an address."]').type(address);
    },
    typeCityName(cityName) {
        return cy.get('[data-placeholder="Please provide a city."]').type(cityName);
    },
    submitAddress() {
        return cy.get('#submitButton').click();
    },
    selectAddress() {
        return cy.get('mat-radio-button').first().click();
    },
    submitBasketContinue() {
        return cy.get('[aria-label="Proceed to payment selection"]').click();
    },
};

export default addressPage;
