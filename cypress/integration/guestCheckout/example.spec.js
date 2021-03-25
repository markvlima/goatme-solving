///  Projeto Guest Checkout / One click buy
// Este script é um exemplo  de como criar um script no projeto Guest Checkout / One click buy
// @author: Amanda Valentini

/// <reference types="cypress" />

describe('Fluxo de confirmação CPF/CNPJ', () => {

    it('Fluxo CPF já cadastrado', function() {
        cy.viewport(1366, 1024)
        cy.visit('http://localhost:8000/guest-checkout')
        cy.wait(5000)
        cy.get('#gatsby-focus-wrapper > main > div > div > div:nth-child(1) > span')
          .should('be.visible')
          .contains('Ambiente Seguro')  
        cy.get('#cpfcnpj').type('05985630676')
        cy.get('.mc > .fw6').click()
        cy.get('body > div.ReactModalPortal > div > div > div > div > div > div > div > h2')
          .contains('Confirmação dos dados')
        cy.get('#name').type('Amanda Valentini Soares')
        cy.get('#birthDate').click({force:true})
          .type('29/06/1983')
        cy.get('#mothersName').click({force:true})
          .type('Rita Valentini')
        cy.get('form.w-100 > .fw6').click()
        

    })

  

})