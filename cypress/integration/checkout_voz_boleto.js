// Jornada TIC
// Este script efetua um fluxo de compra de produto Voz Fixa
describe('', () => {
  beforeEach(() => {
     cy.visit('https://deploy-preview-326--lucid-jepsen-ae3f5a.netlify.com/telefonia-fixa')
  
  })
    Cypress.on('uncaught:exception', (err, runnable) => { return false })

describe('Jornada TIC', function () {
    it('Voz Fixa - Checkout Boleto', function () {
	cy.viewport(1440, 1300)
    cy.visit('https://tic.enesolucoes.com.br/telefonia-fixa')
    cy.get('#planos-voz-fixo > div:nth-child(2) > div > div > ul > div:nth-child(1) > div.relative.VozFixoPlanList-module--size--1USdt > div.f14.pt16.pb12.ph12.pb24-ns.bg-white > div.flex.justify-center.db.mt12.mb16 > div > div > div:nth-child(2) > button').click()
    cy.get('#planos-voz-fixo > div:nth-child(2) > div > div > ul > div:nth-child(1) > div.relative.VozFixoPlanList-module--size--1USdt > div.f14.pt16.pb12.ph12.pb24-ns.bg-white > div:nth-child(5) > button').click()
    cy.wait(3000)
    cy.get('#cep').focus().type('38400389')
    cy.get('#float-label').focus().click()
    cy.wait(2000)
    cy.xpath('/html/body/div[4]/div/div/div[2]/div[2]/button').focus().click()
    cy.xpath('/html/body/div[5]/div/div/div[2]/div/div/div[2]/div[2]/a/button').click()
    cy.get('#___gatsby > div > main > section > div > div.u-sm-sizeFull.u-md-size4of12.u-lg-size3of12 > section > button').click()
    cy.log('════ FLUXO DE LOGIN ════')
    cy.login('08796331666','ctbc2016')
    cy.wait(30000)
    cy.log('═══════ ENDEREÇO ═══════')
    cy.get('#___gatsby > div > main > div > div > div.Grid.mc.center.db.mt32.mt72-ns > div.flex.justify-between.flex-column.flex-row-ns > div.u-sizeFull.u-sm-sizeFull.u-md-size8of12.u-lg-size10of12.mr24-m.mr24-l.db > div > div.mb16 > div > div > div.u-size9of12.u-sm-size1of3 > button').should('be.disabled')
    cy.xpath('//*[@id="___gatsby"]/div/main/div/div/div[1]/div[2]/div[1]/div/div[3]/div/section/div/div[2]/a').click()
    cy.get('#contactName').type('Teste Ene')
    cy.get('#cep').type('38400389').should('have.value', '38400389')
    cy.get("#number").focus()
    cy.get('#number').type('1573')
    cy.get('#complement').should('be.disabled')
    cy.xpath('/html/body/div[7]/div/div/div[2]/div/section/div[1]/form/div/div[2]/div/div/div/label[1]/span[2]').click()
    cy.xpath('/html/body/div[7]/div/div/div[2]/div/section/div[1]/form/div/button').click()
    cy.get('#___gatsby > div > main > div > div > div.Grid.mc.center.db.mt32.mt72-ns > div.flex.justify-between.flex-column.flex-row-ns > div.u-sizeFull.u-sm-sizeFull.u-md-size8of12.u-lg-size10of12.mr24-m.mr24-l.db > div > div.mb16 > div > div > div.u-size9of12.u-sm-size1of3 > button').click()
     cy.log('═══════ PAGAMENTO ═══════')
     cy.get('#___gatsby > div > main > div > div > section > div.Grid.flex.justify-between.flex-column.flex-row-ns > div.u-sizeFull.u-sm-sizeFull.u-md-size9of12.u-lg-size9of12.pr24-m.pr24-l > div > div > div > div.u-size9of12.u-sm-size1of3 > button').should('be.disabled')
     cy.get('#___gatsby > div > main > div > div > section > div.Grid.flex.justify-between.flex-column.flex-row-ns > div.u-sizeFull.u-sm-sizeFull.u-md-size9of12.u-lg-size9of12.pr24-m.pr24-l > section:nth-child(2) > div > div.flex.justify-between.flex-column.flex-row-ns > div:nth-child(2) > div > h2').click()
     cy.get('#BilletForm > div > button').click()
     cy.get('#BilletForm > div > div > div.Grid > div.u-size5of12.u-sm-size2of12 > div > span').contains('Selecione dia')
     cy.get('#___gatsby > div > main > div > div > section > div.Grid.flex.justify-between.flex-column.flex-row-ns > div.u-sizeFull.u-sm-sizeFull.u-md-size9of12.u-lg-size9of12.pr24-m.pr24-l > section:nth-child(2) > div > div.BoxCollapsible-module--panelCollapse--2ZFxa.w-100-ns.ph4 > div > section > div > div.u-sizeFull.flex-m.flex-l.order-1 > div > div > div.flex.flex-wrap > div > div > label > span').click()
     cy.xpath('//form[@id="BilletForm"]/div/div/div/div[2]/div/div/div/div/div/span').click()
     cy.xpath('//div[@id="react-select-5-option-3"]/div').click()
     cy.get('#BilletForm > div > button').click()
     cy.get('#___gatsby > div > main > div > div > div.Grid.mc.center.db.mb16.mt32.mt24-ns > div.flex-ns.justify-between-ns > div.u-sizeFull.u-sm-sizeFull.u-md-size9of12.u-lg-size9of12.pr24-m.pr24-l > div > div > div > div.u-size9of12.u-sm-size1of3 > button').click()
     cy.wait(3000)
     cy.screenshot()
    })


})

})


