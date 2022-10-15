/// <reference types="cypress" />

import { faker } from '@faker-js/faker';
import { commonSelectors, headings, paths } from '../utils/constants';
import addressPage from '../page-object/pages/address';
import basketPage from '../page-object/pages/basket';
import deliveryPage from '../page-object/pages/delivery';
import orderCompletionPage from '../page-object/pages/order-completion';
import orderSummaryPage from '../page-object/pages/order-summary';
import paymentPage from '../page-object/pages/payment';
import homePage from '../page-object/pages/home';
import baseFunctions from '../utils/base';

const juices = require('../fixtures/juices.json');

describe('Payment process', () => {
    beforeEach(() => {
        baseFunctions.registerAndLogin();
    });

    // I've noticed that juices can be sold out, so probably I should change my approach, but for now I use my fixture file here
    // Probaby I should check if the card has ribbon class and if not I should try to write the juice name with writeFile() in my fixture file

    context('Purchase of juice', () => {
        it('A user should add 2 juices to the basket and go through the entire purchasing process', () => {
            cy.visit('/');
            juices.forEach((juice) => {
                homePage.clickAddToBasketButton(juice.name);
            });
            homePage.goToBasket();
            baseFunctions.validateUrl(paths.basketPath);
            basketPage.clickCheckoutButton();
            baseFunctions.validateUrl(paths.addressSelectPath);

            cy.get('body').then(($body) => {
                if ($body.find(commonSelectors.tableRow).length > 0) {
                    addressPage.selectAddress();
                } else {
                    addressPage.clickAddNewAddressButton();
                    baseFunctions.validateUrl(paths.addressCreatePath);
                    addressPage.validateHeading(headings.addressHeading);
                    addressPage.typeCountry(faker.address.country());
                    addressPage.typeName(faker.name.findName());
                    addressPage.typeMobileNumber(faker.phone.number('501######'));
                    addressPage.typeZipCode(faker.address.zipCode('####'));
                    addressPage.typeAddress(faker.address.streetAddress());
                    addressPage.typeCityName(faker.address.city());
                    addressPage.submitAddress();
                    addressPage.selectAddress();
                }
                addressPage.submitBasketContinue();
                baseFunctions.validateUrl(paths.deliveryMethodPath);
                deliveryPage.selectFirstDeliveryMethod();
                deliveryPage.submitDelivery();
                baseFunctions.validateUrl(paths.paymentPath);
                paymentPage.expandPaymentOptionToAddNewCard();
            });

            cy.get('body').then(($body) => {
                if ($body.find(commonSelectors.tableRow).length > 0) {
                    paymentPage.selectCard();
                } else {
                    paymentPage.typeName(faker.name.findName());
                    paymentPage.typeCardNumber(faker.finance.creditCardNumber('################'));
                    paymentPage.selectExpiryMonth();
                    paymentPage.selectExpiryYear();
                    paymentPage.submitAddingCard();
                    paymentPage.selectCard();
                }
            });
            paymentPage.submitPaymentContinue();
            baseFunctions.validateUrl(paths.orderSummaryPath);
            orderSummaryPage.submitOrderAndPayContinue();

            // TODO: More assertions should be written

            orderCompletionPage.clickPrintOrderButton();

            // TODO: Write read PDF assertion
            // I don't know how to check the content of this file

            cy.intercept('GET', '/ftp/*').as('orderPdf');
            cy.wait('@orderPdf').then((interception) => {
                cy.request({
                    url: interception.request.url,
                    encoding: 'binary',
                }).then((response) => {
                    cy.writeFile('cypress/downloads/order.pdf', response.body, 'binary');
                });
            });
            cy.readFile('cypress/downloads/order.pdf');
        });
    });
});
