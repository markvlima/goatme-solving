/// <reference types="Cypress"/> 

context('Viabilidade', () => {
    it('Fluxo de viabilidade', () => {
        cy.server()
        cy.route('GET', '**/apicorp.algartelecom.com.br/telecom/location-management/geographic-information/v1/localities?**' )
          .as('getLocalities');

        cy.visit('http://algartelecom.com.br/para-voce')
        cy.wait(3000)
        // cy.get('input[placeholder="Digite uma cidade"]').type('uber')
        cy.get('#menu > div > div.Grid-cell.u-sizeFull.u-sm-size5of12.u-md-size6of12.u-lg-size5of12.flex.f10 > div.u-size5of12.u-sm-size2of5.u-md-size2of6.u-lg-size2of5.CitySelector-module--modalOverlay--1QNIv > div > div.db > input.dn.db-ns.w-100.scorpion.mt16.f16.fw5.bg-white.pv10.pr10.ba.b--boulder.br2.CitySelectModal-module--input--3SCoV').type('Uber');
        cy.wait('@getLocalities').then((resLocalities) => {
            expect(resLocalities.status).to.eq(401)
        });
        cy.get('#menu > div > div.Grid-cell.u-sizeFull.u-sm-size5of12.u-md-size6of12.u-lg-size5of12.flex.f10 > div.u-size5of12.u-sm-size2of5.u-md-size2of6.u-lg-size2of5.CitySelector-module--modalOverlay--1QNIv > div > div.db > div > button:nth-child(3)')
          .should('contain.text','Uberlândia/MG').click();
        cy.get('#gatsby-focus-wrapper > section.pv10.pv0-ns.bg-white.bb-ns.b--very-light-pink > div > div.Grid-cell.u-size7of12.u-sm-size10of12.flex.items-center.pr12.pv10-ns.pv24-m.pv24-l > div.dn.db-ns.Grid-cell.u-sizeFull.flex-ns.items-center-ns > div > ul > li:nth-child(3) > a').click();
        // cy.get('#teste').click();
        cy.get('button[aria-label="Plano fala muito mais"]').click();

    });

});


