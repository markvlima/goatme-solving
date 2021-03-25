// Jornada TIC
// Este script efetua um fluxo de compra de produto TIC

describe('Jornada TIC', function () {
	const datatic = [
	{
	    cep: '38408056',
	    name: 'MARIANA DAVI JUSTINO',
	    number: '697',
	    flagAdress: 'Sim',
	    date: '7', // options: [3, 7, 11, 16, 20, 24, 28]
	    user: '08796331666',  // CPF: 08796331666 / CNPJ: 76694988000106
	    pwd: 'ctbc2016{enter}',
		signature: 'pre', // [pre, pos]
		months: 'Mensal', // [Anual, Semestral, Trimestral, Mensal
		cellphone: '4',
		computer: '2',
		physical_server: '1',
		virtual_server: '0',
		email: '0',
		payment: 'Boleto' // [Boleto, Cartão de Crédito]
	}]
	
	for(var i = 0; i < datatic.length; i++) {
    //for(var i = 0; i < 1; i++) {
        const tic = datatic[i];
        checking(tic)
    }
	
    beforeEach(() => { 
		cy.viewport(1440, 1300)
        cy.visit('https://tic.enesolucoes.com.br/empresas/cloud-backup')
    })
	
	function checking(tic) {
		it('TIC - Checkout', function () {
		cy.get('#hero > div.mc.center.db-ns > div > div.u-sm-size7of12.u-md-size6of12.u-lg-size6of12 > div > div.flex-m.mt12 > button.fw6.bn.pv10.ph20.dib.br-pill.white.bg-green-haze.pointer.ph24.f16-ns.f18-l.mr12.mb12').click()
		if(tic.signature == 'pos') {
			cy.get('#planos-cloud-backup > div.Grid.Grid--alignCenter.flex-column-ns.mb16 > div > div > div.u-sizeFull.u-sm-size5of12.u-md-sizeFull.u-lg-sizeFull.db > div > div > div > div > label.f16.fw5.scorpion.dib.RadioButtonGroup-module--container--3ZwX7.pl20.mr32 > span.RadioButtonGroup-module--checkmark--yXo0x').click()
		}
		else {
			cy.get('#planos-cloud-backup > div.Grid.Grid--alignCenter.flex-column-ns.mb16 > div > div > div.u-sizeFull.u-sm-size5of12.u-md-sizeFull.u-lg-sizeFull.db > div > div > div > div > label.f16.fw5.scorpion.dib.RadioButtonGroup-module--container--3ZwX7.pl20.mr0 > span.RadioButtonGroup-module--checkmark--yXo0x').click()
		}
		cy.get('button').contains(tic.months).click()
		cy.get('button').contains('Escolher agora').click()
		cy.get('#qtd_products_bsc').clear()
		cy.get('#qtd_products_bsc').type(tic.cellphone)
		//cy.get('#qtd_products_bsc').next().type(tic.computer)
		//cy.get('#qtd_products_bsc').type(tic.physical_server)
		//cy.get('#qtd_products_bsc').type(tic.virtual_server)
		//cy.get('#qtd_products_bsc').type(tic.email)
		cy.get('button').contains('Adicionar ao carrinho').click()
		cy.wait(3000)
		cy.get('button').contains('Finalizar compra').click()
		cy.wait(3000)
		cy.get('button').contains('Finalizar compra').click()

		cy.log('══ FLUXO DE LOGIN ══')
	    cy.wait(4000)
  	    cy.get('#username').type(tic.user)
	    cy.get('#password').type(tic.pwd)
    	cy.wait(5000)

		cy.log('═══════ ENDEREÇO ═══════')
		cy.get('#cep').type('38010-070').should('have.value', '38010-070')
	   	//cy.focused().type('{tab}');
		cy.get("#number").focus()
		cy.get('#number').type('1573')
		// cy.xpath('//*[@id="___gatsby"]/div/main/div/div/div[1]/div[2]/div[1]/div/div[2]/section/div[1]/form/div/div/div[2]/div[5]/div[1]/div/div').click()
		// cy.xpath('//div[@id="react-select-2-option-0"]/div').click()
		// cy.get('#complement').type('b', {force: true})
		cy.get('#state').should('have.value', 'MG')
		cy.get('#city').should('have.value', 'Uberaba')
		cy.get('#tipoLogradouro').should('have.value', 'Avenida') 
		cy.get('#neighbourhood').should('have.value', 'Centro')
		cy.get('#endereco').should('have.value', 'Avenida Presidente Vargas')
		cy.get('#number').should('have.value', '1573')
		//cy.get('#___gatsby > div > main > div > div > div.Grid.mc.center.db > div.flex.justify-between.flex-column.flex-row-ns > div.u-sizeFull.u-sm-size8of12.u-md-size8of12.u-lg-size8of12 > section > div:nth-child(1) > form > div > div.Grid.flex > div:nth-child(5) > div.u-sizeFull.u-sm-size8of12.u-md-size8of12.u-lg-size8of12.mr12-ns > div > div').should('have.value', 'APARTAMENTO')
		//cy.get('#complement').should('have.value', 'b')
		cy.get('button').contains('Salvar endereço').click()

		cy.log('══ FORMA DE PAGAMENTO ══')
		if (tic.payment == 'Boleto') {
			cy.get('div').contains(tic.payment).click()
			cy.get('#___gatsby > div > main > div > div > section > div.Grid.flex.justify-between.flex-column.flex-row-ns > div.u-sizeFull.u-sm-sizeFull.u-md-size9of12.u-lg-size9of12.pr24-m.pr24-l > div:nth-child(3) > div > div.BoxCollapsible-module--panelCollapse--2ZFxa.w-100-ns.ph4 > div > section > div > div.u-sizeFull.flex-m.flex-l.order-1 > div > div > div.flex.flex-wrap > div > div > label > span').click()
			cy.get('#BilletForm > div > div > div.checkboxContainer.Form-module--checkboxHeight--3Hlkz > label > span').click()
			cy.get('#BilletForm > div > button').click()
		} else if (tic.payment == 'Cartão de Crédito') {
			cy.get('div').contains(tic.payment).click()
			cy.get('#___gatsby > div > main > div > div > section > div.Grid.flex.justify-between.flex-column.flex-row-ns > div.u-sizeFull.u-sm-sizeFull.u-md-size9of12.u-lg-size9of12.pr24-m.pr24-l > div:nth-child(2) > div > div.BoxCollapsible-module--panelCollapse--2ZFxa.w-100-ns.ph4 > div > div > div > div.u-sizeFull.flex-m.flex-l.order-1 > div > div > div.flex.flex-wrap > div > div > label > span').click()
			cy.get('#CreditForm > div > div.u-sizeFull.u-sm-size6of12.u-md-size6of12.u-lg-size6of12 > div > div > div > div.css-1wy0on6 > div > svg').click()
			cy.log('Tempo para escolher um cartão ou cadastrar um novo.')
			cy.wait(10000)
			cy.get('#CreditForm > div > button').click()
		} else {
			cy.log('Formato de pagamento inválido para este tipo de produto.')
		}
		cy.get('button').contains('Finalizar a compra').click()
		})
	}
})
