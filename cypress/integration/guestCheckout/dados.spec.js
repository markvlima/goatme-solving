///  Projeto Guest Checkout / One click buy
// Este script é um exemplo  de como criar um script no projeto Guest Checkout / One click buy
// @author: Amanda Valentini

/// <reference types="cypress" />

let Chance = require('chance');
let chance = new Chance();

describe('Usuário sem cadastro na Algar', () => {
    it('identificação de usuário sem cadastro na Algar', () => {

        cy.server()
        cy.route('GET','**/apicorp.algartelecom.com.br/telecom/customer-management/user/v1/users?**')
          .as('getUsers');

        cy.visit('http://localhost:8000/guest-checkout');
        cy.get('#cpfCnpj').type(chance.cpf());
        cy.get('[data-cy=button-guest-checkout-prosseguir]').click()
        cy.wait('@getUsers').then((resUsers) => {
            expect(resUsers.status).to.eq(401)
        });
        cy.get('[data-cy=float-label-email]').type(chance.email())
        cy.get('[data-cy=float-label-phone]').type(chance.phone({ formatted: false}))
        cy.get('[data-cy=action-guest-checkout-prosseguir]').click()
        // cy.get('[data-cy=action-guest-checkout-alterar-usuario]').click()


        // cy.get('[data-cy=action-guest-checkout-prosseguir]').click()
    });

    it.only('identificação de usuário cadastrado na Algar', () => {
        cy.server()
        cy.route({
            method: 'GET',
            url: '**//apicorp.algartelecom.com.br/telecom/customer-management/user/v1/users?**',
            status: 200,
            response: {
                documentNumber: "08796331666"
            }
        } );
        cy.visit('http://localhost:8000/guest-checkout');
        cy.get('#cpfCnpj').type('08796331666');
        cy.get('[data-cy=button-guest-checkout-prosseguir]').click()
        cy.get('#gatsby-focus-wrapper > main > div > div > div.mt16 > section > div > div > div > div > div > div > p').should('contains.text', '087.963.316-66')
    });
});