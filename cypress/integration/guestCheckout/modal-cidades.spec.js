/// <reference types="Cypress"/> 

let Chance = require('chance');
let chance = new Chance();

context('Modal Cidades', () => {
    it('Localidade não retornada ', () => {
        cy.server()
        cy.route('GET', '**/api-sandbox.algartelecom.com.br/telecom/location-management/geographic-information/v1/localities?**' )
          .as('getLocalities');

        cy.visit('https://deploy-preview-2056--lucid-jepsen-ae3f5a.netlify.app/guest-checkout/city-selector/');
        cy.get('button').click();
        cy.get('h4').should('have.text', 'Localização');
        cy.get('p').should('have.text', 'Para verificar a disponibilidade deste produto, precisamos saber a sua localização.')
        cy.get('input[autocomplete="new-password"]').type(chance.city());
        cy.wait('@getLocalities').then((resLocalities) => {
            expect(resLocalities.status).to.eq(401)
        });
        cy.get('.fw6').click();
    });
    it('Localidade retornada', () => {
        cy.server()
        cy.route('GET', '**/api-sandbox.algartelecom.com.br/telecom/location-management/geographic-information/v1/localities?**' )
          .as('getLocalities');

        cy.visit('https://deploy-preview-2056--lucid-jepsen-ae3f5a.netlify.app/guest-checkout/city-selector/');
        cy.get('button').click();
        cy.get('h4').should('have.text', 'Localização');
        cy.get('p').should('have.text', 'Para verificar a disponibilidade deste produto, precisamos saber a sua localização.')
        cy.get('input[autocomplete="new-password"]').type('Uberaba');
        cy.wait('@getLocalities').then((resLocalities) => {
            expect(resLocalities.status).to.eq(200)
        });
        cy.get('#gatsby-focus-wrapper > div > div > div > div > div.db.mt16.f14.f16-m.f16-l.z-5.bg-white.relative.montserrat > button:nth-child(1) > p')
          .should('contain.text','Uberaba/MG').click();
        cy.get('.fw6').click();
    });
});