 // Jornada TIC
// Este script efetua o cadastro de pessoa física no portal
// @author: Marcos Lima

describe('TIC - E-mail Profissional', function () {
    const dataemails = [
	{
	    period: 'Mensal',
	    signature: 'Pré-Pago',
	    typeDomain: 'comprar', // use 'ja possuo' or 'comprar'
	    //ownDomain: 'hermanito.com',
	    buyDomain: 'hermanito24',
	    cep: '38408056',
	    number: '697',
	    user: '76694988000106',
	    pwd: 'ctbc2016'
	}]

    for(var i = 0; i < dataemails.length; i++) {
    //for(var i = 0; i < 1; i++) {
        const email = dataemails[i];
        checking(email)
    }

     beforeEach(() => {
	cy.viewport(1440, 1300)
        cy.visit('https://tic.enesolucoes.com.br/email-profissional')
    })
	
    function checking(email) {
        it('Pagamento: Boleto', function () {
            cy.get('#hero > div.mc.center.db-ns > div > div.u-sm-size7of12.u-md-size6of12.u-lg-size6of12 > div > div.flex-m.mt12 > button.fw6.bn.pv10.ph24.dib.br-pill.white.bg-green-haze.pointer.ph24.f16-ns.f18-l.mr12.mb12').click()
	    cy.get('button').contains(email.period).click()
	    cy.get('label').contains(email.signature).click()
	    cy.get('#planos-presenca-digital-email > div.mb32.ml2 > div > ul > div:nth-child(1) > div.relative.undefined > div.f14.pt16.pb12.ph12.pb24-ns > div.db.flex.justify-center.mt12.mt16-ns > button').click()
	    
	    cy.get('input').then(() => {
    		if (email.typeDomain == 'ja possuo') {
      		  cy.get('body > div:nth-child(13) > div > div > div.CustomModal-module--innerContent--2NonP > section > div.flex.flex-column > div.ph12 > div > label:nth-child(1) > span.Radio-module--checkmark--RXmZj.mr4').click()
		  cy.get('#DomainSelector').type(email.ownDomain)
	        } else {
	      	  cy.get('body > div:nth-child(13) > div > div > div.CustomModal-module--innerContent--2NonP > section > div.flex.flex-column > div.ph12 > div > label:nth-child(2) > span.Radio-module--checkmark--RXmZj.mr4').click()
		  cy.wait(4000)
		  cy.get('#DomainSelector').type(email.buyDomain, {force:true})
	     	}	
    	    })
	    cy.wait(3000)	    
	    cy.get('body > div:nth-child(13) > div > div > div.CustomModal-module--innerContent--2NonP > section > div.w-100.pb16.pl12 > button > div > span').click()
	    cy.wait(4000)
	    cy.get('button').contains('Adicionar ao carrinho').click()
	    cy.wait(3000)
	    cy.get('button').contains('Finalizar compra').click()
	    cy.wait(3000)
	    cy.get('button').contains('Finalizar compra').click()

	    cy.log('══ FLUXO DE LOGIN ══')
	    cy.get('#username').type(email.user)
    	    cy.get('#password').type(email.pwd)
	    cy.get('#___gatsby > div > main > section > div > div.u-size12of12.u-sm-size6of12.u-md-size4of12.u-lg-size4of12 > section > form > div > button').click()
	    cy.wait(3000)
	    cy.get('button').contains('Finalizar compra').click()

	    cy.log('══ STEPS CHECKOUT ══')
	    cy.wait(12000)
  	    cy.get('#cep').type(email.cep, {force:true})
	    cy.get('#number').click()
	    cy.get('#number').type(email.number)
    	    cy.wait(2000)
	    cy.get('#___gatsby > div > main > div > div > div.Grid.mc.center.db.mt32.mt72-ns > div.flex.justify-between.flex-column.flex-row-ns > div.u-sizeFull.u-sm-sizeFull.u-md-size9of12.u-lg-size10of12.mr24-m.mr24-l.db > div > div.u-sizeFull.u-lg-size8of12 > section > div:nth-child(1) > form > div > button').click()

	    cy.log('══ FORMA DE PAGAMENTO ══')
	    cy.wait(4000)
            cy.get('#___gatsby > div > main > div > div > section > div.Grid.flex.justify-between.flex-column.flex-row-ns > div.u-sizeFull.u-sm-sizeFull.u-md-size9of12.u-lg-size9of12.pr24-m.pr24-l > section:nth-child(3) > div > div.flex.justify-between.flex-column.flex-row-ns > div:nth-child(2) > div > h2').click() //seleciona opção boleto
	    cy.get('#___gatsby > div > main > div > div > section > div.Grid.flex.justify-between.flex-column.flex-row-ns > div.u-sizeFull.u-sm-sizeFull.u-md-size9of12.u-lg-size9of12.pr24-m.pr24-l > section:nth-child(3) > div > div.BoxCollapsible-module--panelCollapse--2ZFxa.w-100-ns.ph4 > div > section > div > div.u-sizeFull.flex-m.flex-l.order-1 > div > div > div.flex.flex-wrap > div > div > label > span').click()
	    cy.get('#BilletForm > div > button').click()
	    cy.get('button').contains('Finalizar Compra').click()
	    cy.wait(4000)

	    /*cy.log('══ OBTENDO PROTOCOLO ══')
	    const message = cy.get('body > div:nth-child(16) > div > div > div.CustomModal-module--innerContent--2NonP > section > div.ph32.mt32.flex.flex-column.bb.b--black-30 > div:nth-child(2) > p.f14.lh-copy.tc.pb12').invoke('text').then(text => { const protocol = text; cy.log(protocol) })
	    cy.log(message)*/
        })
    }
})
