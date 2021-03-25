/// <reference types="Cypress"/> 

context('Fixo', () => {
    it('Fluxo de compra apenas de Telefonia Fixa', () => {
        cy.server()
        cy.route('GET', '**/apicorp.algartelecom.com.br/telecom/location-management/geographic-information/v1/localities?**' )
          .as('getLocalities');
        cy.route('POST', '**/apicorp.algartelecom.com.br/telecom/qualidade/feasibility/v2/broadband')
           .as('postBroadband')
        cy.route('GET', '**/apicorp.algartelecom.com.br/telecom/location-management/geographic-information/v1/streets?**' )
           .as('getStreets');

        cy.visit('http://algartelecom.com.br/empresas/telefonia-fixa')
        cy.wait(3000)
        //selecionar localidade no portal
        cy.get('#menu > div > div.Grid-cell.u-sizeFull.u-sm-size5of12.u-md-size6of12.u-lg-size5of12.flex.f10 > div.u-size5of12.u-sm-size2of5.u-md-size2of6.u-lg-size2of5.CitySelector-module--modalOverlay--1QNIv > div > div.db > input.dn.db-ns.w-100.scorpion.mt16.f16.fw5.bg-white.pv10.pr10.ba.b--boulder.br2.CitySelectModal-module--input--3SCoV').type('São Paulo');
        cy.wait('@getLocalities').then((resLocalities) => {
            expect(resLocalities.status).to.eq(401)
        });
        cy.get('#menu > div > div.Grid-cell.u-sizeFull.u-sm-size5of12.u-md-size6of12.u-lg-size5of12.flex.f10 > div.u-size5of12.u-sm-size2of5.u-md-size2of6.u-lg-size2of5.CitySelector-module--modalOverlay--1QNIv > div > div.db > div > button:nth-child(1)')
          .should('contain.text','São Paulo/SP').click();
          //seleciona o produto
          cy.get('button[aria-label="Ilimitado Brasil"]').click();
          cy.url().should('contain', '/monte-seu-pacote')
          //viabilidade
          cy.get('#cep').type('04502001');
          cy.wait('@getStreets').then((resStreets) => {
              expect(resStreets.status).to.eq(200)
          });
          cy.get('#number').type('572', {force:true});
          cy.get('#gatsby-focus-wrapper > main > div > div > div:nth-child(3) > div.Grid.Grid--withGutter.flex.justify-center > div > div > button').click();
          cy.wait('@postBroadband'). then((resBroadband) => {
              expect(resBroadband.status).to.eq(200)
          });
          //montar pacote
          cy.get('#cardScroll > div > div > article > dl > div.ph16.items-center.mb16 > div.flex.justify-center.items-center > button').should('be.disabled');
        cy.get('#gatsby-focus-wrapper > main > aside > div.bg-white.br4-m.br4-l.shadow-3.br--left-m.br--left-l.lh-copy.flex.flex-column.justify-between.content-start.h-100.flex-column-reverse.flex-column-m.flex-column-l > div:nth-child(1) > div > div > button').should('be.disabled');
    });
    it.only('Fluxo de exclusão do produto  Telefonia Fixa do carrinho', () => {
        cy.server()
        cy.route('GET', '**/apicorp.algartelecom.com.br/telecom/location-management/geographic-information/v1/localities?**' )
          .as('getLocalities');
        cy.route('POST', '**/apicorp.algartelecom.com.br/telecom/qualidade/feasibility/v2/broadband')
           .as('postBroadband')
        cy.route('GET', '**/apicorp.algartelecom.com.br/telecom/location-management/geographic-information/v1/streets?**' )
           .as('getStreets');

        cy.visit('http://algartelecom.com.br/empresas/telefonia-fixa')
        cy.wait(3000)
        //selecionar localidade no portal
        cy.get('#menu > div > div.Grid-cell.u-sizeFull.u-sm-size5of12.u-md-size6of12.u-lg-size5of12.flex.f10 > div.u-size5of12.u-sm-size2of5.u-md-size2of6.u-lg-size2of5.CitySelector-module--modalOverlay--1QNIv > div > div.db > input.dn.db-ns.w-100.scorpion.mt16.f16.fw5.bg-white.pv10.pr10.ba.b--boulder.br2.CitySelectModal-module--input--3SCoV').type('São Paulo');
        cy.wait('@getLocalities').then((resLocalities) => {
            expect(resLocalities.status).to.eq(401)
        });
        cy.get('#menu > div > div.Grid-cell.u-sizeFull.u-sm-size5of12.u-md-size6of12.u-lg-size5of12.flex.f10 > div.u-size5of12.u-sm-size2of5.u-md-size2of6.u-lg-size2of5.CitySelector-module--modalOverlay--1QNIv > div > div.db > div > button:nth-child(1)')
          .should('contain.text','São Paulo/SP').click();
          //seleciona o produto
          cy.get('button[aria-label="Ilimitado Brasil"]').click();
          cy.url().should('contain', '/monte-seu-pacote')
          //viabilidade
          cy.get('#cep').type('04502001');
          cy.wait('@getStreets').then((resStreets) => {
              expect(resStreets.status).to.eq(200)
          });
          cy.get('#number').type('572', {force:true});
          cy.get('#gatsby-focus-wrapper > main > div > div > div:nth-child(3) > div.Grid.Grid--withGutter.flex.justify-center > div > div > button').click();
          cy.wait('@postBroadband'). then((resBroadband) => {
              expect(resBroadband.status).to.eq(200)
          });
          //montar pacote
          cy.get('#cardScroll > div > div > article > dl > div.ph16.items-center.mb16 > div.flex.justify-center.items-center > button').should('be.disabled');
          cy.get('#gatsby-focus-wrapper > main > aside > div.bg-white.br4-m.br4-l.shadow-3.br--left-m.br--left-l.lh-copy.flex.flex-column.justify-between.content-start.h-100.flex-column-reverse.flex-column-m.flex-column-l > div:nth-child(1) > div > div > button').should('be.disabled');
          cy.get('#gatsby-focus-wrapper > main > aside > div.bg-white.br4-m.br4-l.shadow-3.br--left-m.br--left-l.lh-copy.flex.flex-column.justify-between.content-start.h-100.flex-column-reverse.flex-column-m.flex-column-l > div:nth-child(1) > div > div > div > button').click();
          cy.get('#decrease_Telefone\ Fixo-Ilimitado\ Brasil').click();
          cy.get('#gatsby-focus-wrapper > main > aside > div.bg-white.br4-m.br4-l.shadow-3.br--left-m.br--left-l.lh-copy.flex.flex-column.justify-between.content-start.h-100.flex-column-reverse.flex-column-m.flex-column-l > div:nth-child(1) > div > div > button').should('be.enabled');
    });

});

