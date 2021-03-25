// Jornada TIC
// Este script efetua um fluxo de login e logout com usuario PF e PJ.
// Este script também verifica se o usuário tem o redirecionamento correto de acordo com sua categoria de negócio.

import {userPf, userPj, userPj2} from "../mocks/users.mocks"

describe('Login -Jornada TIC', function () {
    const pf = userPf
    const pj = userPj2

    it('Login Pessoa Fisica', function () {
        cy.viewport(1440, 1300)
        cy.visit('https://tic.enesolucoes.com.br/sua-conta')
        cy.wait(3000)
        cy.login(pf.id,pf.pwd)
        cy.wait(8000)
        cy.location().should((loc) => {
            expect(loc.toString()).to.eq('https://tic.enesolucoes.com.br/para-voce') 
        })
        cy.get('#___gatsby > div > section.pv10.pv0-ns.bb-ns.b--very-light-pink > div > div.Grid-cell.u-size5of12.u-sm-size2of12.u-md-size3of12.u-lg-size3of12.flex.justify-end.items-center.pr0-m > div > div > div > div > button')
          .click({force:true})
        cy.get('button').contains('Logout')
          .click()
        cy.location().should((loc) => {
            expect(loc.toString()).to.eq('https://tic.enesolucoes.com.br/para-voce') 
        })
     })

    it('Login Pessoa Juridica', function () {
        cy.viewport(1440, 1300)
        cy.visit('https://tic.enesolucoes.com.br/sua-conta')
        cy.wait(3000)
        cy.login(pj.id,pj.pwd)
        cy.wait(3000)
        /*cy.location().should((loc) => {
            expect(loc.toString()).to.eq('https://tic.enesolucoes.com.br/empresas') 
        })
        cy.get('#___gatsby > div > section.pv10.pv0-ns.bb-ns.b--very-light-pink > div > div.Grid-cell.u-size5of12.u-sm-size2of12.u-md-size3of12.u-lg-size3of12.flex.justify-end.items-center.pr0-m > div > div > div > div > button')
          .click({force:true})
        cy.get('button').contains('Logout')
          .click()
        cy.location().should((loc) => {
            expect(loc.toString()).to.eq('https://tic.enesolucoes.com.br/empresas') 
        })*/
    })
})