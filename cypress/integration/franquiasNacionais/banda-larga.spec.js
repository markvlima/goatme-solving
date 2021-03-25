/// <reference types="Cypress"/> 

context('Banda Larga', () => {
    it('Fluxo de compra apenas de Banda Larga', () => {
        cy.server()
        cy.route('GET', '**/apicorp.algartelecom.com.br/telecom/location-management/geographic-information/v1/localities?**' )
          .as('getLocalities');
        cy.route('POST', '**/apicorp.algartelecom.com.br/telecom/qualidade/feasibility/v2/broadband')
           .as('postBroadband')
        cy.route('GET', '**/apicorp.algartelecom.com.br/telecom/location-management/geographic-information/v1/streets?**' )
           .as('getStreets');

        cy.visit('http://algartelecom.com.br/empresas/banda-larga')
        cy.wait(3000)
        //selecionar localidade no portal
        cy.get('#menu > div > div.Grid-cell.u-sizeFull.u-sm-size5of12.u-md-size6of12.u-lg-size5of12.flex.f10 > div.u-size5of12.u-sm-size2of5.u-md-size2of6.u-lg-size2of5.CitySelector-module--modalOverlay--1QNIv > div > div.db > input.dn.db-ns.w-100.scorpion.mt16.f16.fw5.bg-white.pv10.pr10.ba.b--boulder.br2.CitySelectModal-module--input--3SCoV').type('São Paulo');
        cy.wait('@getLocalities').then((resLocalities) => {
            expect(resLocalities.status).to.eq(401)
        });
        cy.get('#menu > div > div.Grid-cell.u-sizeFull.u-sm-size5of12.u-md-size6of12.u-lg-size5of12.flex.f10 > div.u-size5of12.u-sm-size2of5.u-md-size2of6.u-lg-size2of5.CitySelector-module--modalOverlay--1QNIv > div > div.db > div > button:nth-child(1)')
          .should('contain.text','São Paulo/SP').click();
          //seleciona o produto
          cy.get('button[aria-label="Internet Algar Fibra 100 Mega"]').click();
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
          cy.get('#cardScroll > div > div.ws-normal.u-size12of12.u-sm-size2of12.u-md-size1of12.u-lg-size2of12.dit.mr0-ns.pr26.pr12-ns.pr16-m.pr16-l > article > dl > div.ph16.items-center.mb16 > div.flex.justify-center.items-center > button').should('be.disabled');
          cy.get('#gatsby-focus-wrapper > main > aside > div.bg-ebony-clay.br1-m.br1-l.white.f14.fw5.mh4-m.mv10-m.mh4-l.mv10-l.pa10.pr32.pr10-m.pr10-l.flex.items-center.flex-row.dn.flex-m.flex-l > p')
             .should('contain.text', 'Ganhe mais desconto adicionando um plano de celular e fixo');
        cy.get('#gatsby-focus-wrapper > main > aside > div.bg-white.br4-m.br4-l.shadow-3.br--left-m.br--left-l.lh-copy.flex.flex-column.justify-between.content-start.h-100.flex-column-reverse.flex-column-m.flex-column-l > div:nth-child(1) > div > div > button').click({force:true});
        cy.url().should('contain', '/sua-conta')
    });
    it.only('Fluxo de compra de Banda Larga e SVA', () => {
        cy.server()
        cy.route('GET', '**/apicorp.algartelecom.com.br/telecom/location-management/geographic-information/v1/localities?**' )
          .as('getLocalities');
        cy.route('POST', '**/apicorp.algartelecom.com.br/telecom/qualidade/feasibility/v2/broadband')
           .as('postBroadband')
        cy.route('GET', '**/apicorp.algartelecom.com.br/telecom/location-management/geographic-information/v1/streets?**' )
           .as('getStreets');

        cy.visit('http://algartelecom.com.br/para-voce/banda-larga')
        cy.wait(3000)
        //selecionar localidade no portal
        cy.get('#menu > div > div.Grid-cell.u-sizeFull.u-sm-size5of12.u-md-size6of12.u-lg-size5of12.flex.f10 > div.u-size5of12.u-sm-size2of5.u-md-size2of6.u-lg-size2of5.CitySelector-module--modalOverlay--1QNIv > div > div.db > input.dn.db-ns.w-100.scorpion.mt16.f16.fw5.bg-white.pv10.pr10.ba.b--boulder.br2.CitySelectModal-module--input--3SCoV').type('Uber');
        cy.wait('@getLocalities').then((resLocalities) => {
            expect(resLocalities.status).to.eq(401)
        });
        cy.get('#menu > div > div.Grid-cell.u-sizeFull.u-sm-size5of12.u-md-size6of12.u-lg-size5of12.flex.f10 > div.u-size5of12.u-sm-size2of5.u-md-size2of6.u-lg-size2of5.CitySelector-module--modalOverlay--1QNIv > div > div.db > div > button:nth-child(3)')
          .should('contain.text','Uberlândia/MG').click();
          //seleciona o produto
        cy.get('button[aria-label="Internet Algar Fibra 200 Mega"]').click();
        cy.url().should('contain', '/monte-seu-pacote')
          //viabilidade
        cy.get('#cep').type('38400389');
        cy.wait('@getStreets').then((resStreets) => {
            expect(resStreets.status).to.eq(200)
        });
        cy.get('#number').type('572', {force:true});
        cy.get('#gatsby-focus-wrapper > main > div > div > div:nth-child(3) > div.Grid.Grid--withGutter.flex.justify-center > div > div > button').click();
        cy.wait('@postBroadband'). then((resBroadband) => {
            expect(resBroadband.status).to.eq(200)
        });
          //montar pacote
        cy.get('#cardScroll > div > div:nth-child(3) > article > dl > div.ph16.items-center.mb16 > div > button').should('be.disabled');
        cy.get('#gatsby-focus-wrapper > main > aside > div.bg-ebony-clay.br1-m.br1-l.white.f14.fw5.mh4-m.mv10-m.mh4-l.mv10-l.pa10.pr32.pr10-m.pr10-l.flex.items-center.flex-row.dn.flex-m.flex-l > p')
          .should('contain.text', 'Ganhe mais desconto adicionando um plano de celular e fixo');
        cy.get('#gatsby-focus-wrapper > main > aside > div.bg-white.br4-m.br4-l.shadow-3.br--left-m.br--left-l.lh-copy.flex.flex-column.justify-between.content-start.h-100.flex-column-reverse.flex-column-m.flex-column-l > div:nth-child(1) > div > div > button').click({force:true});
        cy.url().should('contain', '/sua-conta')
    });
});

