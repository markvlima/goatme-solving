// Jornada TIC
// Este script efetua a compra de um Banda Larga com pagamento por débito automático
// @author: Marcos Lima
import {userPj} from "../mocks/users.mocks"
import {cepEne, cepULA2, cepULAInviavel1} from "../mocks/ceps.mocks"
import {banks} from "../mocks/banks.mocks"
import {caixaAccount} from "../mocks/bankAccounts.mocks"
import {dueDate} from "../mocks/dueDate.mocks"

describe('TIC - Banda Larga', function () {
    const user = userPj
    const cep = cepEne
    const bank = banks
    const dataAccount = caixaAccount
    const date = dueDate.three
    const data = [
	{
	    period: '12 meses', //use '12 meses' or '24 meses*'
	    amount: '1',
	    flagAdress: 'Sim'
	}]

    for(var i = 0; i < data.length; i++) {
    	for(var j = 0; j < banks.length; j++) {
		    const banda = data[i];
			const bank = banks[i];
		    checking(banda,bank)
		}  
    }

     beforeEach(() => {
	cy.viewport(1440, 1300)
        cy.visit('https://tic.enesolucoes.com.br/empresas/banda-larga')
    })
	
    function checking(banda, bank) {
        it('Débito Automático', function () {
            cy.log('══ FLUXO DE DÉBITO AUTOMÁTICO ══')

            cy.wait(3000)
            cy.get('button').contains(banda.period).click()
            cy.wait(3000)
            cy.get('#___gatsby > div > main > section.mc.center.Grid.Grid--withGutter.mt32.mt48-ns.justify-center.items-end > div.Grid.Grid--withGutter.items-end > div:nth-child(2) > div > div.u-size6of12.bl.b--black-10.pa0.pl12.u-md-sizeFull.u-lg-sizeFull.bn-m.bn-l.pl0-m.pl0-l > div > button')
            .click()
            cy.wait(3000)
            cy.get('#cep').type(cep.cepNumber)
            cy.get('#number').type(cep.number, { force: true })
            cy.wait(4000)
            cy.get('#cep').click()
            cy.wait(3000)
            cy.get('button').contains('OK').click()
            cy.wait(20000)
            cy.get('button').contains('Finalizar compra').should('be.visible')
            cy.get('button').contains('Finalizar compra').click({ force: true })

            cy.log('══ FLUXO DE LOGIN ══')
            cy.wait(4000)
            cy.login(user.id,user.pwd)
            cy.wait(22000)
            //cy.get('#___gatsby > div > main > section > div > div.u-sm-sizeFull.u-md-size4of12.u-lg-size3of12 > section > button').click()
            cy.get('button').contains('Continuar a compra').click({ force: true })
            cy.wait(3000)
            
            cy.log('══ STEPS DO CHECKOUT ══')
            cy.get('#material-switch').click()
            cy.get('button').contains('Continuar a compra').click({ force: true })

            cy.log('══ DÉBITO AUTOMÁTICO ══')
            //cy.get('div').contains('Débito automático').click()
            //cy.get('#___gatsby > div > main > div > div > section > div.Grid.flex.justify-between.flex-column.flex-row-ns > div.u-sizeFull.u-sm-sizeFull.u-md-size9of12.u-lg-size9of12.pr24-m.pr24-l > div:nth-child(2) > div > div.BoxCollapsible-module--panelCollapse--2ZFxa.w-100-ns.ph4 > div > section > div > div.u-sizeFull.flex-m.flex-l.order-1 > div > div > div.flex.flex-wrap > div > div > label > span').click() //desmarcar
            //cy.get('#___gatsby > div > main > div > div > section > div.Grid.flex.justify-between.flex-column.flex-row-ns > div.u-sizeFull.u-sm-sizeFull.u-md-size9of12.u-lg-size9of12.pr24-m.pr24-l > div:nth-child(3) > div > div.BoxCollapsible-module--panelCollapse--2ZFxa.w-100-ns.ph4 > div > section > div > div.u-sizeFull.flex-m.flex-l.order-1 > div > div > div.flex.flex-wrap > div > div > label > span').click() //marcar
            cy.wait(3000)
            cy.get('#DebitForm > div > div > div > div:nth-child(2) > div > div > div > div.css-1wy0on6 > div > svg').click()
            cy.wait(2000)
            cy.get('div').contains(bank.bank_name).click()
            cy.wait(2000)
            cy.get('#agencia').type(dataAccount.agency)
            if (bank.da == 'true') {
                cy.get('#digitAgency').type(dataAccount.d_agency)
            }
            if (bank.op == 'true') {
                cy.get('#operacao').type(dataAccount.operation)
            }
            cy.get('#conta').type(dataAccount.account)
            cy.get('#digitAccount').type(dataAccount.d_account)
            cy.get('#cpf').type(dataAccount.cpf)

            // Selecionar data de vencimento manualmente e finalizar o pedido.
            cy.get('#DebitForm > div > div > div > div.ph4.ph0-ns > div.u-size6of12.u-lg-size2of12 > div > div > div > div.css-1wy0on6 > div').click()
            cy.wait(3000)
            //cy.get('#react-select-5-input').contains(date.three).click()
            //cy.get('#DebitForm > div > button').click()
        })
    }
})
