describe('fluxo compra email-profissional', () => {
  beforeEach(() => {
    cy.visit('https://deploy-preview-326--lucid-jepsen-ae3f5a.netlify.com/email-profissional')
  
  })
  
  Cypress.on('uncaught:exception', (err, runnable) => { return false })

   it('comprar planos email-profissional', () => {

      for (var i = 1 ; i < 6 ; i++) {

    cy.xpath('(.//*[normalize-space(text()) and normalize-space(.)="/mês"])['+ i +']/following::button[2]').click()
    cy.wait(2000)
    cy.get('body > div:nth-child(13) > div > div > div:nth-child(1) > section > div > div.u-size1of12.flex.justify-end.pr20.pr32-l.self-center > button > svg').click()
    cy.log('estou aqui')  
  }

  })

})