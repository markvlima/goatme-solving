const sizes = ['iphone-3','iphone-6', 'iphone-6+', 'ipad-2', [1024, 768]]
describe('Modal', () => {
       sizes.forEach((size) => {
         it(`Should display logo on ${size} screen`, () => {
           if (Cypress._.isArray(size)) {
             cy.viewport(size[0], size[1], size[2], size[3])
           } else {
             cy.viewport(size)
           }
           cy.visit('tic.enesolucoes.com.br/site-pronto')
           cy.wait(3000)
           cy.xpath('(.//*[normalize-space(text()) and normalize-space(.)="Selecionar plano"])[2]/preceding::button[2]').click()
           cy.xpath('//div[@id="resume"]/div/div/div[3]/button').click()
           cy.xpath('//div[3]/div/div/div/div/label').click()
           cy.xpath('//input[@id="DomainSelector"]').click().type('www.google.com')
           cy.wait(2000)           
           cy.xpath('//button/div').click()
           cy.wait(3000)
           cy.xpath('//button/div/span').click()
           cy.wait(4000)
           cy.xpath('//a/button').click()
           cy.wait(2000)
           cy.xpath('//div[@id="___gatsby"]/div/main/section/div/div[2]/section/button').click()
           cy.wait(3000)
           cy.log('════ FLUXO DE LOGIN ════')
           cy.get('#username').type('06493131600')
           cy.get('#password').type('ctbc2016{enter}')
           cy.wait(3000)
           cy.get('#cep').click().type('38400389')
           cy.wait(2000)
           cy.get('#number').click().type('1573')
           cy.xpath('//form/div/button/span').click()
           cy.wait(4000)
      })
  })
})