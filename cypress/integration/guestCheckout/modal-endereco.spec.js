/// <reference types="cypress" />

context('Layout Modal de Confirmação de endereço', () => {
    it('Modal para até 3 endereços - mobile', () => {
        cy.viewport(360,589)
        cy.visit('https://deploy-preview-2134--lucid-jepsen-ae3f5a.netlify.app/sandbox/')
        cy.get('#gatsby-focus-wrapper > main > div > div > div.mt16 > button:nth-child(1)').click();
        cy.get('#cancel-copy').click()
        cy.get('#gatsby-focus-wrapper > main > div > div > div.mt16 > button:nth-child(1)').click();
        cy.get('body > div:nth-child(32) > div > div > div.CustomModal-module--innerHeight--131Gu.CustomModal-module--innerContent--2NonP.CustomModal-module--innerOverflow--1XqwN > div.Grid.Grid--withGutter.styles-module--modalWraper--3V4Rp > div:nth-child(1) > div > div > div > div > h2')
          .should('contain.text', 'Confirmação de endereço');
        cy.get('body > div:nth-child(32) > div > div > div.CustomModal-module--innerHeight--131Gu.CustomModal-module--innerContent--2NonP.CustomModal-module--innerOverflow--1XqwN > div.Grid.Grid--withGutter.styles-module--modalWraper--3V4Rp > div:nth-child(1) > div > div > div > div > h2')
          .should('have.css', 'font-size').and('eq', '16px')
        cy.get('body > div:nth-child(32) > div > div > div.CustomModal-module--innerHeight--131Gu.CustomModal-module--innerContent--2NonP.CustomModal-module--innerOverflow--1XqwN > div.Grid.Grid--withGutter.styles-module--modalWraper--3V4Rp > div:nth-child(1) > div > div > div > div > h2')
          .should('have.css', 'font-weight').and('eq', '700')
        cy.get('body > div:nth-child(32) > div > div > div.CustomModal-module--innerHeight--131Gu.CustomModal-module--innerContent--2NonP.CustomModal-module--innerOverflow--1XqwN > div.Grid.Grid--withGutter.styles-module--modalWraper--3V4Rp > div:nth-child(1) > div > div > div > div > h2')
          .should('have.css', 'margin-bottom').and('eq', '4px')
        cy.get('.bg-white > .f14').should('contain.text', 'Você possui mais de um endereço cadastrado, qual você deseja escolher?');
        cy.get('.bg-white > .f14').should('have.css', 'font-size').and('eq', '14px')
        cy.get('.bg-white > .f14').should('have.css', 'margin-bottom').and('eq', '16px')
        cy.get('input[value="endereço 2"').check('endereço 2', {force:true})
        cy.get('.styles-module--buttonWrapper--2AjqC > .fw6')
          .should('contain.text', 'Confirmar')
          .click({force:true})      
    });
    it('Modal para até 3 endereços - tablet', () => {
        cy.viewport(768,589)
        cy.visit('https://deploy-preview-2134--lucid-jepsen-ae3f5a.netlify.app/sandbox/')
        cy.get('#gatsby-focus-wrapper > main > div > div > div.mt16 > button:nth-child(1)').click();
        cy.get('#cancel-copy').click()
        cy.get('#gatsby-focus-wrapper > main > div > div > div.mt16 > button:nth-child(1)').click();
        cy.get('body > div:nth-child(32) > div > div > div.CustomModal-module--innerHeight--131Gu.CustomModal-module--innerContent--2NonP.CustomModal-module--innerOverflow--1XqwN > div.Grid.Grid--withGutter.styles-module--modalWraper--3V4Rp > div:nth-child(1) > div > div > div > div > h2')
          .should('contain.text', 'Confirmação de endereço');
        cy.get('body > div:nth-child(32) > div > div > div.CustomModal-module--innerHeight--131Gu.CustomModal-module--innerContent--2NonP.CustomModal-module--innerOverflow--1XqwN > div.Grid.Grid--withGutter.styles-module--modalWraper--3V4Rp > div:nth-child(1) > div > div > div > div > h2')
          .should('have.css', 'font-size').and('eq', '18px')
        cy.get('body > div:nth-child(32) > div > div > div.CustomModal-module--innerHeight--131Gu.CustomModal-module--innerContent--2NonP.CustomModal-module--innerOverflow--1XqwN > div.Grid.Grid--withGutter.styles-module--modalWraper--3V4Rp > div:nth-child(1) > div > div > div > div > h2')
          .should('have.css', 'font-weight').and('eq', '700')
        cy.get('body > div:nth-child(32) > div > div > div.CustomModal-module--innerHeight--131Gu.CustomModal-module--innerContent--2NonP.CustomModal-module--innerOverflow--1XqwN > div.Grid.Grid--withGutter.styles-module--modalWraper--3V4Rp > div:nth-child(1) > div > div > div > div > h2')
          .should('have.css', 'margin-bottom').and('eq', '12px')
        cy.get('.bg-white > .f14').should('contain.text', 'Você possui mais de um endereço cadastrado, qual você deseja escolher?');
        cy.get('.bg-white > .f14').should('have.css', 'font-size').and('eq', '14px')
        cy.get('.bg-white > .f14').should('have.css', 'margin-bottom').and('eq', '24px')
        cy.get('input[value="endereço 3"').check('endereço 3', {force:true})
        // cy.get('input[type="radio"]').should('not.be.selected', ['endereço 3'])
        cy.get('.styles-module--buttonWrapper--2AjqC > .fw6')
          .should('contain.text', 'Confirmar')
          .click({force:true})      
    });

      it('Modal para até 3 endereços - desktop', () => {
        cy.viewport(1024,768)
        cy.visit('https://deploy-preview-2134--lucid-jepsen-ae3f5a.netlify.app/sandbox/')
        cy.get('#gatsby-focus-wrapper > main > div > div > div.mt16 > button:nth-child(1)').click();
        cy.get('#cancel-copy').click()
        cy.get('#gatsby-focus-wrapper > main > div > div > div.mt16 > button:nth-child(1)').click();
        cy.get('body > div:nth-child(32) > div > div > div.CustomModal-module--innerHeight--131Gu.CustomModal-module--innerContent--2NonP.CustomModal-module--innerOverflow--1XqwN > div.Grid.Grid--withGutter.styles-module--modalWraper--3V4Rp > div:nth-child(1) > div > div > div > div > h2')
          .should('contain.text', 'Confirmação de endereço');
        cy.get('body > div:nth-child(32) > div > div > div.CustomModal-module--innerHeight--131Gu.CustomModal-module--innerContent--2NonP.CustomModal-module--innerOverflow--1XqwN > div.Grid.Grid--withGutter.styles-module--modalWraper--3V4Rp > div:nth-child(1) > div > div > div > div > h2')
          .should('have.css', 'font-size').and('eq', '20px')
        cy.get('body > div:nth-child(32) > div > div > div.CustomModal-module--innerHeight--131Gu.CustomModal-module--innerContent--2NonP.CustomModal-module--innerOverflow--1XqwN > div.Grid.Grid--withGutter.styles-module--modalWraper--3V4Rp > div:nth-child(1) > div > div > div > div > h2')
          .should('have.css', 'font-weight').and('eq', '700')
        cy.get('body > div:nth-child(32) > div > div > div.CustomModal-module--innerHeight--131Gu.CustomModal-module--innerContent--2NonP.CustomModal-module--innerOverflow--1XqwN > div.Grid.Grid--withGutter.styles-module--modalWraper--3V4Rp > div:nth-child(1) > div > div > div > div > h2')
          .should('have.css', 'margin-bottom').and('eq', '8px')
        cy.get('.bg-white > .f14').should('contain.text', 'Você possui mais de um endereço cadastrado, qual você deseja escolher?');
        cy.get('.bg-white > .f14').should('have.css', 'font-size').and('eq', '16px')
        cy.get('.bg-white > .f14').should('have.css', 'margin-bottom').and('eq', '24px')
        cy.get('input[value="endereço 3"').check('endereço 3', {force:true})
        cy.get('.styles-module--buttonWrapper--2AjqC > .fw6')
          .should('contain.text', 'Confirmar')
          .click({force:true})      
    });

      it.only('Modal mais que 3 endereços - mobile', () => {
        cy.viewport(360,589)
        cy.visit('https://deploy-preview-2134--lucid-jepsen-ae3f5a.netlify.app/sandbox/')
        cy.get('#gatsby-focus-wrapper > main > div > div > div.mt16 > button:nth-child(2)').click();
        cy.get('#cancel-copy').click()
        cy.get('#gatsby-focus-wrapper > main > div > div > div.mt16 > button:nth-child(2)').click();
        cy.get('.f18').should('contain.text', 'Confirmação de endereço');
        cy.get('.f18').should('have.css', 'font-size').and('eq', '16px')
        cy.get('.f18').should('have.css', 'font-weight').and('eq', '700')
        cy.get('.f18').should('have.css', 'margin-bottom').and('eq', '4px')
        cy.get('.bg-white > .f14').should('contain.text', 'Você possui mais de um endereço cadastrado, qual você deseja escolher?');
        cy.get('.bg-white > .f14').should('have.css', 'font-size').and('eq', '14px')
        cy.get('.bg-white > .f14').should('have.css', 'margin-bottom').and('eq', '16px')
        cy.get('.css-yk16xz-control').click();
        cy.get('.styles-module--buttonWrapper--2AjqC > .fw6')
          .should('contain.text', 'Confirmar')
          .click({force:true})      
    });
        it.only('Modal mais que 3 endereços - mobile', () => {
          cy.viewport(768,589)
          cy.visit('https://deploy-preview-2134--lucid-jepsen-ae3f5a.netlify.app/sandbox/')
          cy.get('#gatsby-focus-wrapper > main > div > div > div.mt16 > button:nth-child(2)').click();
          cy.get('#cancel-copy').click()
          cy.get('#gatsby-focus-wrapper > main > div > div > div.mt16 > button:nth-child(2)').click();
          cy.get('.f18').should('contain.text', 'Confirmação de endereço');
          cy.get('.f18').should('have.css', 'font-size').and('eq', '18px')
          cy.get('.f18').should('have.css', 'font-weight').and('eq', '700')
          cy.get('.f18').should('have.css', 'margin-bottom').and('eq', '12px')
          cy.get('.bg-white > .f14').should('contain.text', 'Você possui mais de um endereço cadastrado, qual você deseja escolher?');
          cy.get('.bg-white > .f14').should('have.css', 'font-size').and('eq', '14px')
          cy.get('.bg-white > .f14').should('have.css', 'margin-bottom').and('eq', '24px')
          cy.get('.css-yk16xz-control').click();
          cy.get('.styles-module--buttonWrapper--2AjqC > .fw6')
            .should('contain.text', 'Confirmar')
            .click({force:true})      
      });

      it.only('Modal mais que 3 endereços - mobile', () => {
        cy.viewport(1024,768)
        cy.visit('https://deploy-preview-2134--lucid-jepsen-ae3f5a.netlify.app/sandbox/')
        cy.get('#gatsby-focus-wrapper > main > div > div > div.mt16 > button:nth-child(2)').click();
        cy.get('#cancel-copy').click()
        cy.get('#gatsby-focus-wrapper > main > div > div > div.mt16 > button:nth-child(2)').click();
        cy.get('.f18').should('contain.text', 'Confirmação de endereço');
        cy.get('.f18').should('have.css', 'font-size').and('eq', '20px')
        cy.get('.f18').should('have.css', 'font-weight').and('eq', '700')
        cy.get('.f18').should('have.css', 'margin-bottom').and('eq', '8px')
        cy.get('.bg-white > .f14').should('contain.text', 'Você possui mais de um endereço cadastrado, qual você deseja escolher?');
        cy.get('.bg-white > .f14').should('have.css', 'font-size').and('eq', '16px')
        cy.get('.bg-white > .f14').should('have.css', 'margin-bottom').and('eq', '24px')
        cy.get('.css-yk16xz-control').click();
        cy.get('.styles-module--buttonWrapper--2AjqC > .fw6')
          .should('contain.text', 'Confirmar')
          .click({force:true})      
    });
});