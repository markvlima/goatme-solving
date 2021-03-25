// Jornada TIC
// Este script efetua um fluxo de login e logout com usuario PF e PJ.

describe('Login -Jornada TIC', function () {
    beforeEach(() => {
        cy.viewport(1440, 1300)
        cy.visit('https://tic.enesolucoes.com.br/sua-conta')
        cy.injectAxe()
    })
    it('Login Pessoa Fisica', function () {
        cy.wait(3000)
        cy.checkA11y()
        cy.login('24153964514','ctbc2016{enter}')
     })
})