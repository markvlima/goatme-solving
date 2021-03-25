// Jornada TIC
// Este script efetua o fluxo com vários produtos

describe('checkout multiplos produtos', () => {
	it('max-monitor' , function() {
		cy.viewport(1366, 1300)
		cy.log('===COMPRAR 1 PLANO MAX-MONITOR===')
    	cy.visit('https://tic.enesolucoes.com.br/max-monitor')
    	cy.get('#planos-max-monitor > div.Grid.Grid--alignCenter.flex-column-ns.mb16 > div > div > div.u-sizeFull.u-sm-size5of12.u-md-sizeFull.u-lg-sizeFull.db > div > div > div > div > label.f16.fw5.scorpion.dib.RadioButtonGroup-module--container--3ZwX7.pl20.mr0 > span.RadioButtonGroup-module--checkmark--yXo0x').click() //clicar em pré-pago
    	cy.get('#planos-max-monitor > div.Grid.Grid--alignCenter.flex-column-ns.mt12-ns > div.mc.center.u-sm-size10of12.u-md-size10of12.u-lg-size8of12 > div > div > div.flex-ns > div:nth-child(2) > div > div.f14.pt16.pb12.ph12.pb24-ns > div.mt12.mb12.u-sizeFull > section > div > svg.Counter-module--plus--3ItZr').click() // add 1 máquina plano avançado
    	cy.get('#planos-max-monitor > div.Grid.Grid--alignCenter.flex-column-ns.mt12-ns > div.mc.center.u-sm-size10of12.u-md-size10of12.u-lg-size8of12 > div > div > div.u-sizeFull > div > div > div.u-sizeFull.u-sm-size6of12.u-md-size4of12.u-lg-size4of12.flex.justify-center.justify-end-ns.mt12.mt0-ns > button').click() //clicar em add no carrinho
    	cy.xpath('//div[2]/div[2]/button').click() // clicar em continuar comprando

    	cy.wait(3000)
    	cy.log('===COMPRAR 1 PLANO SITE-PRONTO===')
    	cy.visit('https://tic.enesolucoes.com.br/site-pronto')
    	cy.xpath('//label[2]/span[2]').click() // selecionar pré-pago
    	cy.xpath('//div[@id="planos-site-pronto"]/div[2]/div/div/ul/div[3]/div/div[2]/div[3]/button').click() // selecionar plano de R$99,90
    	cy.xpath('//div[@id="simulator"]/div/div/section/div/div/ul/div[2]/div/div[3]/button').click() // selecionar simulador pró + loja básica
    	cy.xpath('//div[@id="resume"]/div/div/div[3]/button').click() // add no carrinho
    	cy.xpath('//input[@id="DomainSelector"]').type('www.google.com') //inserir domínio (já possuo)
    	cy.wait(3000) //espera do botão "validar" estar habilitado
    	cy.xpath('//section/div[2]/button').click() //clicar em "validar"
    	cy.wait(3000) //espera do botão "continuar" estar habilitado
    	cy.xpath('//button/div/span').click() //clicar em continuar
    	cy.xpath('//div[2]/div[2]/button').click() // clicar em continuar comprando

    	cy.wait(3000)
    	cy.log('===COMPRAR 1 PLANO TELEFONIA-FIXA===')
    	cy.visit('https://tic.enesolucoes.com.br/telefonia-fixa')
    	cy.get('#planos-voz-fixo > div:nth-child(2) > div > div > ul > div:nth-child(1) > div.relative.VozFixoPlanList-module--size--1USdt > div.f14.pt16.pb12.ph12.pb24-ns.bg-white > div.flex.justify-center.db.mt12.mb16 > div > div > div:nth-child(2) > button').click() //selecionar 12 meses
    	cy.get('#planos-voz-fixo > div:nth-child(2) > div > div > ul > div:nth-child(1) > div.relative.VozFixoPlanList-module--size--1USdt > div.f14.pt16.pb12.ph12.pb24-ns.bg-white > div:nth-child(5) > button').click() // selecionar plano R$86.95
    	cy.wait(3000) //espera abrir modal
    	cy.get('#cep').type('38010-070').should('have.value', '38010-070') // insere cep
    	cy.get('#float-label').click() //clique para habilitar botão
    	cy.wait(2000)
    	cy.xpath('/html/body/div[4]/div/div/div[2]/div[2]/button').focus().click() // add no carrinho 
    	cy.xpath('/html/body/div[5]/div/div/div[2]/div/div/div[2]/div[2]/a/button').click() //clique finalizar compra
    	cy.get('#___gatsby > div > main > section > div > div.u-sm-sizeFull.u-md-size4of12.u-lg-size3of12 > section > button').click() // finalizar compra no carrinho

    	cy.wait(3000)
    	cy.log('════ FLUXO DE LOGIN ════')
    	cy.get('#username').type('08796331666')
    	cy.get('#password').type('ctbc2016{enter}')
    	cy.wait(3000)
	})
})