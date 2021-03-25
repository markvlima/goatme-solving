 // Jornada TIC
// Este script efetua o cancelamento de um produto para um usuário pessoa física.
// @author: Marcos Lima

describe('TIC - Cancelamento Contrato Alone (CPF)', function () {
    const databandas = [
	{
	    period: '12 meses', //use '12 meses' or '24 meses*'
	    amount: '1',
	    cep: '38442028',
	    name: 'ROSANGELA KAMILLY MORAES',
	    number: '513',
	    flagAdress: 'Sim',
	    date: '7', // options: [3, 7, 11, 16, 20, 24, 28]
	    user: '90892782650',  // CPF: 08796331666 / CNPJ: 76694988000106
	    pwd: 'ctbc2016{enter}'
	}]

    for(var i = 0; i < databandas.length; i++) {
    //for(var i = 0; i < 1; i++) {
        const banda = databandas[i];
        checking(banda)
    }

     beforeEach(() => {
	cy.viewport(1440, 1300)
        cy.visit('https://portalapphmg.algartelecom.com.br/AreaCliente/autenticacao')
    })
	
    function checking(banda) {
        it('Boleto', function () {
	    cy.wait(3000)
	    cy.get('button').contains(banda.period).click()
	    cy.wait(3000)
	    cy.get('#planos-banda-larga > div > div > ul > div:nth-child(1) > div.f14.pt16.pb12.ph12.pb24-ns > div:nth-child(6) > button').click()
	    cy.get('#cep').type(banda.cep)
	    cy.get('#float-label').clear()
	    cy.get('#float-label').type(banda.amount)
	    cy.wait(4000)	    
	    cy.get('body > div:nth-child(14) > div > div > div.CustomModal-module--innerContent--2NonP > div.flex.justify-center.mb16.mt10 > button').click() //Adicionar ao carrinho
	    cy.get('button').contains('Finalizar compra').click()
	    cy.wait(4000)
	    cy.get('button').contains('Finalizar compra').click()

	    cy.log('══ FLUXO DE LOGIN ══')
	    cy.wait(4000)
  	    cy.get('#username').type(banda.user)
	    cy.get('#password').type(banda.pwd)
    	    cy.wait(2000)
	    cy.get('#___gatsby > div > main > section > div > div.u-sm-sizeFull.u-md-size4of12.u-lg-size3of12 > section > button').click()
	    cy.wait(3000)

	    cy.log('══ STEPS DO CHECKOUT ══')
	    cy.get('#___gatsby > div > main > div > div > div.Grid.mc.center.db.mt32.mt72-ns > div.flex.justify-between.flex-column.flex-row-ns > div.u-sizeFull.u-sm-sizeFull.u-md-size9of12.u-lg-size10of12.mr24-m.mr24-l.db > div > div.Grid.Grid--withGutter > div > section > div > div.ml4.ml0-ns.tr.relative.a24 > a').click() //inserir endereço
	    cy.get('#contactName').type(banda.name)
	    cy.get('#number').type(banda.number)
	    cy.get('label').contains(banda.flagAdress).click()
	    cy.get('body > div:nth-child(17) > div > div > div.CustomModal-module--innerContent--2NonP > div > section > div:nth-child(1) > form > div > button').click()
	    cy.get('#___gatsby > div > main > div > div > div.Grid.mc.center.db.mt32.mt72-ns > div.flex.justify-between.flex-column.flex-row-ns > div.u-sizeFull.u-sm-sizeFull.u-md-size9of12.u-lg-size10of12.mr24-m.mr24-l.db > div > div.mb16 > div > div > div.u-size9of12.u-sm-size1of3 > button').click()
	    cy.log('══ PAGAMENTO BOLETO ══')
	    cy.wait(14000)
	    cy.get('#___gatsby > div > main > div > div > section > div.Grid.flex.justify-between.flex-column.flex-row-ns > div.u-sizeFull.u-sm-sizeFull.u-md-size9of12.u-lg-size9of12.pr24-m.pr24-l > section:nth-child(2) > div > div.flex.justify-between.flex-column.flex-row-ns > div:nth-child(2) > div > h2').click()
	    cy.wait(4000)
	    cy.get('#___gatsby > div > main > div > div > section > div.Grid.flex.justify-between.flex-column.flex-row-ns > div.u-sizeFull.u-sm-sizeFull.u-md-size9of12.u-lg-size9of12.pr24-m.pr24-l > section:nth-child(2) > div > div.BoxCollapsible-module--panelCollapse--2ZFxa.w-100-ns.ph4 > div > section > div > div.u-sizeFull.flex-m.flex-l.order-1 > div > div > div.flex.flex-wrap > div > div > label > span').click() //seleciona produto

	    cy.xpath('//div[@id="react-select-5-option-3"]/div').click()
	    /*cy.get('.dia').then(elem => {
	        elem.val('11', {force:true});
	    });
	    */
	    cy.get('#BilletForm > div > div > div.checkboxContainer > label > span').click() //conta via e-mail
	    cy.get('#BilletForm > div > button').click()
        })
    }
})
