 // Jornada TIC
// Este script efetua a compra de um Site Pronto no Boleto
// @author: Marcos Lima

describe('TIC - Site Pronto', function () {
    const datasites = [
	{
	    period: 'Mensal',
	    signature: 'Pós-Pago',
	    shop: 'premium',
	    typeDomain: 'comprar', // use 'ja possuo' or 'comprar'
	    //ownDomain: 'hermanito.com',
	    buyDomain: 'hermanito',
	    cep: '38408056',
	    number: '495',
	    user: '61746080000113', 
	    pwd: 'ctbc2016'
	}]

    for(var i = 0; i < datasites.length; i++) {
    //for(var i = 0; i < 1; i++) {
        const site = datasites[i];
        checking(site)
    }

     beforeEach(() => {
	cy.viewport(1440, 1300)
        cy.visit('https://tic.enesolucoes.com.br/site-pronto')
    })
	
    function checking(site) {
        it('Pagamento: Boleto', function () {
            cy.get('#hero > div.mc.center.db-ns > div > div.u-sm-size7of12.u-md-size6of12.u-lg-size6of12 > div > div.flex-m.mt12 > button.fw6.bn.pv10.ph24.dib.br-pill.white.bg-green-haze.pointer.ph24.f16-ns.f18-l.mr12.mb12').click()
	    cy.get('button').contains(site.period).click()
	    cy.get('label').contains(site.signature).click()
	    cy.get('#planos-site-pronto > div.mc.center > div > div > ul > div:nth-child(3) > div.relative.SiteProntoPlanList-module--size--2CRVn > div.f14.pt16.pb12.ph12.pb24-ns > div.db.flex.justify-center.mt12.mt16-ns > button').click()

	    cy.wait(3000)
	    //cy.get('#simulator > div > div > section > div.bb.b--light-gray > div > ul > div:nth-child(2) > div.tc.te-papa-green.pb0.pa16.bg-white > div.db.flex.justify-center.mt12.mb16.mt16-ns > button').click()

	    cy.get('p').then(() => {
    		if (site.shop == 'basica') {
      		  	cy.get('#simulator > div > div > section > div.bb.b--light-gray > div > ul > div:nth-child(2) > div.tc.te-papa-green.pb0.pa16.bg-white > div.db.flex.justify-center.mt12.mb16.mt16-ns > button').click()
	       	} else if (site.shop == 'premium') {
	      	  	cy.get('#simulator > div > div > section > div.bb.b--light-gray > div > ul > div:nth-child(3) > div.tc.te-papa-green.pb0.pa16.bg-white > div.db.flex.justify-center.mt12.mb16.mt16-ns > button').click()
	     	} else {
	      	  	cy.get('#simulator > div > div > section > div.bb.b--light-gray > div > ul > div:nth-child(1) > div.tc.te-papa-green.pb0.pa16.bg-white > div.db.flex.justify-center.mt12.mb16.mt16-ns > button').click()
	     	}
    	})
	    cy.get('#resume > div > div > div.u-sizeFull.u-sm-size4of12.u-md-size4of12.u-lg-size3of12.tc.tr-ns.ph2 > button').click()

	    cy.wait(3000)	    
	    cy.get('body > div:nth-child(13) > div > div > div.CustomModal-module--innerContent--2NonP > section > div.w-100.pb16.pl12 > button > div > span').click()
	    cy.wait(4000)
	    cy.get('input').then(() => {
    		if (site.typeDomain == 'ja possuo') {
      		  	cy.get('body > div:nth-child(13) > div > div > div.CustomModal-module--innerContent--2NonP > section > div.flex.flex-column > div.ph12 > div > label:nth-child(1) > span.Radio-module--checkmark--RXmZj.mr4').click()
		  		cy.get('#DomainSelector').type(site.ownDomain)
	        } else {
	      	  	cy.get('body > div:nth-child(13) > div > div > div.CustomModal-module--innerContent--2NonP > section > div.flex.flex-column > div.ph12 > div > label:nth-child(2) > span.Radio-module--checkmark--RXmZj.mr4').click()
		  		cy.wait(4000)
		  		cy.get('#DomainSelector').type(site.buyDomain, {force:true})
	    	}	
    	})
	    cy.wait(3000)
	    cy.get('button').contains('Validar').click()
	    cy.wait(4000)
	    cy.get('button').contains('Continuar').click()
	    cy.get('button').contains('Finalizar compra').click()
	    cy.wait(4000)
	    cy.get('button').contains('Finalizar compra').click()

	    cy.log('══ FLUXO DE LOGIN ══')
	    cy.get('#username').type(site.user)
    	    cy.get('#password').type(site.pwd)
	    cy.get('#___gatsby > div > main > section > div > div.u-size12of12.u-sm-size6of12.u-md-size4of12.u-lg-size4of12 > section > form > div > button').click()
	    cy.wait(4000)
	    cy.get('button').contains('Finalizar compra').click()

	    cy.log('══ STEPS CHECKOUT ══')
	    cy.wait(12000)
  	    cy.get('#cep').type(site.cep, {force:true})
	    cy.get('#number').click()
	    cy.get('#number').type(site.number)
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
