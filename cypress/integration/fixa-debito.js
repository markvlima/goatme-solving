 // Jornada TIC
// Este script efetua a compra de um Telefonia Fixa com pagamento por débito automático
// @author: Marcos Lima

describe('TIC - Telefonia Fixa', function () {
    const data = [
	{
	    period: '12 meses', //use '12 meses' or '24 meses*'
	    amount: '1',
	    cep: '38408056',
	    portable: 'Sim', //use 'Sim' or 'Nao'
		phonenumber: '3499987987',
	    usability: 'Residencial', //use 'Comercial' or 'Residencial'
	    name: 'Mariana',
	    number: '697',
	    flagAdress: 'Sim',
	    agency: '4436',
	    //dagency: '0',
	    //operation: '11',
	    account: '01000567',
	    daccount: '6',
	    cpf: '04980660614',
	    date: '7', // options: [3, 7, 11, 16, 20, 24, 28]
	    user: '08796331666',  // CPF: 08796331666 / CNPJ: 76694988000106
	    pwd: 'ctbc2016{enter}'
	}
    ]

    for(var i = 0; i < data.length; i++) {
    //for(var i = 0; i < 1; i++) {
        const fixa = data[i];
        checking(fixa)
    }

     beforeEach(() => {
	cy.viewport(1440, 1300)
        cy.visit('https://tic.enesolucoes.com.br/telefonia-fixa')
    })
	
    function checking(fixa) {
        it('Débito Automático', function () {
	    cy.wait(3000)
	    cy.get('button').contains(fixa.period).click()
	    cy.wait(3000)
	    cy.get('#planos-voz-fixo > div:nth-child(2) > div > div > ul > div:nth-child(1) > div.relative.VozFixoPlanList-module--size--1USdt > div.f14.pt16.pb12.ph12.pb24-ns.bg-white > div:nth-child(5) > button').click()
	    cy.get('#cep').type(fixa.cep)
	    cy.get('#float-label').clear()
	    cy.get('#float-label').type(fixa.amount)
	    cy.wait(4000)	    
	    cy.get('body > div:nth-child(14) > div > div > div.CustomModal-module--innerContent--2NonP > div.flex.justify-center.mb16.mt10 > button').click() //Adicionar ao carrinho
	    cy.get('button').contains('Finalizar compra').click()
	    cy.wait(4000)
	    cy.get('button').contains('Finalizar compra').click()

	    cy.log('══ FLUXO DE LOGIN ══')
	    cy.wait(4000)
  	    cy.get('#username').type(fixa.user)
	    cy.get('#password').type(fixa.pwd)
    	    cy.wait(2000)
	    cy.get('#___gatsby > div > main > section > div > div.u-sm-sizeFull.u-md-size4of12.u-lg-size3of12 > section > button').click()
	    cy.wait(3000)

	    cy.log('══ STEPS DO CHECKOUT ══')
	    cy.get('span').then(() => {
	    	if (fixa.portable == 'Sim') {
				cy.get('span').contains(fixa.portable).click()
				cy.get('#phoneNumber').type(fixa.phonenumber)
			} else {
				cy.get('span').contains(fixa.portable).click()
			}
		})
	    cy.get('span').contains(fixa.usability).click()
	    cy.get('button').contains('Continuar a compra').click()
	    cy.wait(3000)

	    cy.get('#___gatsby > div > main > div > div > div.Grid.mc.center.db.mt32.mt72-ns > div.flex.justify-between.flex-column.flex-row-ns > div.u-sizeFull.u-sm-sizeFull.u-md-size9of12.u-lg-size10of12.mr24-m.mr24-l.db > div > div.Grid.Grid--withGutter > div > section > div > div.ml4.ml0-ns.tr.relative.a24 > a').click() //inserir endereço
	    cy.get('#contactName').type(fixa.name)
	    cy.get('#number').type(fixa.number)
	    cy.get('label').contains(fixa.flagAdress).click()
	    cy.get('body > div:nth-child(17) > div > div > div.CustomModal-module--innerContent--2NonP > div > section > div:nth-child(1) > form > div > button').click()
	    cy.get('#___gatsby > div > main > div > div > div.Grid.mc.center.db.mt32.mt72-ns > div.flex.justify-between.flex-column.flex-row-ns > div.u-sizeFull.u-sm-sizeFull.u-md-size9of12.u-lg-size10of12.mr24-m.mr24-l.db > div > div.mb16 > div > div > div.u-size9of12.u-sm-size1of3 > button').click()
	    cy.wait(10000)
	    cy.get('#___gatsby > div > main > div > div > section > div.Grid.flex.justify-between.flex-column.flex-row-ns > div.u-sizeFull.u-sm-sizeFull.u-md-size9of12.u-lg-size9of12.pr24-m.pr24-l > section:nth-child(3) > div > div.flex.justify-between.flex-column.flex-row-ns > div:nth-child(2) > div > h2').click()
	    cy.wait(4000)
	    cy.get('#___gatsby > div > main > div > div > section > div.Grid.flex.justify-between.flex-column.flex-row-ns > div.u-sizeFull.u-sm-sizeFull.u-md-size9of12.u-lg-size9of12.pr24-m.pr24-l > section:nth-child(3) > div > div.BoxCollapsible-module--panelCollapse--2ZFxa.w-100-ns.ph4 > div > section > div > div.u-sizeFull.flex-m.flex-l.order-1 > div > div > div.flex.flex-wrap > div > div > label > span').click() //seleciona produto

	    cy.log('══ DADOS DÉBITO AUTOMÁTICO ══')
	    cy.wait(2000)
	    //cy.xpath('//div[@id="react-select-9-input-option-3"]/div').click() //banco
  	    cy.get('#agencia').type(fixa.agency)
	    //cy.get('#digitAgency').type(fixa.dagency)
	    //cy.get('#operacao').type(fixa.operation)
            cy.get('#conta').type(fixa.account)
	    cy.get('#digitAccount').type(fixa.daccount)
	    cy.get('#cpf').type(fixa.cpf)

	    //cy.xpath('//div[@id="react-select-7-option-2"]/div/div[2]').click()
	    cy.get('#DebitForm > div > div > div > div:nth-child(6) > label > span.checkmark').click() //confirma titular
     	    cy.get('#DebitForm > div > div > div > div:nth-child(7) > label > span.checkmark').click() //conta via e-mail
	    cy.get('#DebitForm > div > button').click()
        })
    }
})
