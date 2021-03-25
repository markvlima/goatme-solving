// Jornada TIC
// Este script efetua a compra de um Telefonia banda com pagamento por débito automático
// @author: Marcos Lima
import {userPf} from "../mocks/users.mocks"
import {cepEne, cepULA2, cepULAInviavel1} from "../mocks/ceps.mocks"
import {dueDate} from "../mocks/dueDate.mocks"

describe('TIC - Banda Larga', function () {
    const user = userPf
	const cep = cepEne
	const date = dueDate.three
	const databandas = [
	{
	    period: '12 meses', //use '12 meses' or '24 meses*'
	    amount: '1',
	    flagAdress: 'Sim'
	}]

    for(var i = 0; i < databandas.length; i++) {
    //for(var i = 0; i < 1; i++) {
        const banda = databandas[i];
        checking(banda)
    }

    beforeEach(() => { 
		//cy.viewport(1400, 1290)
        cy.visit('https://tic.enesolucoes.com.br/para-voce/banda-larga')
    })
	
    function checking(banda) {
        it('Migração Banda Larga', function () {
		cy.log('══ FLUXO DE ADICIONAR PRODUTO ══')
		
	    cy.wait(4000)
		cy.get('#___gatsby > div > main > section.mc.center.Grid.Grid--withGutter.mt32.mt48-ns.justify-center.items-end > div.Grid.Grid--withGutter.items-end > div:nth-child(2) > div > div.u-size6of12.bl.b--black-10.pa0.pl12.u-md-sizeFull.u-lg-sizeFull.bn-m.bn-l.pl0-m.pl0-l > div > button')
		  .click()
		cy.tab({shift: true})
		cy.get('#number').type(cep.number, {force:true})
		cy.get('#cep').type(cep.cepNumber)
		cy.wait(5000) //alterar o tempo se necessário para +/-
		cy.get('button[class="fw6 bn pv10 ph20 dib br-pill f14 f16-m f16-l Button-module--primaryButton__HoverEffect--1fvhd pointer bg-fun-green white flex flex-row-reverse items-center justify-around w-40 w-60-ns"]')
		  .click()
		cy.wait(15000) //alterar o tempo se necessário para +/-
	    cy.get('button').contains('Finalizar compra').click()

	    cy.log('══ FLUXO DE LOGIN ══')
	    cy.wait(4000)
		cy.login(user.id,user.pwd)
    	cy.wait(4000)
	    //cy.get('#AddInfo-selectedAddOption+455949-0+225625noId').click() //Botão login
        cy.wait(18000) //instabilidade authenticates
        cy.get('#___gatsby > div > main > div > div > div:nth-child(2) > div > div.flex-ns.justify-between-ns > div.u-sizeFull.u-sm-sizeFull.u-md-size9of12.u-lg-size9of12.pr24-m.pr24-l > div.Grid.Grid--withGutter > div.Grid-cell.u-sizeFull.u-sm-size8of12.flex-nowrap > div.w-70.w-50-ns > div > div > label.f14.te-papa-green.mr12-l.mr12-m.dib.mt4.mb4.RadioButtonGroup-module--container--3ZwX7.pl20.mr0 > span.ml4.RadioButtonGroup-module--spanClass--2kFgS')
          .click()
		cy.get('span').contains('Mudar o meu atual').click()
		cy.get('span').contains('BANDA LARGA CABLE 10 MBPS 04311460').click()
        cy.get('button').contains('Continuar a compra').click({force:true})
		cy.wait(3000)
	    
		cy.log('══ STEPS DO CHECKOUT ══')
	    cy.get('#material-switch').click()
		cy.get('button').contains('Continuar a compra').click()
		
		cy.log('══ PAGAMENTO BOLETO ══')
		
		cy.get('#___gatsby > div > main > div > div > section > div.Grid.flex.justify-between.flex-column.flex-row-ns > div.u-sizeFull.u-sm-sizeFull.u-md-size9of12.u-lg-size9of12.pr24-m.pr24-l > div:nth-child(3) > div > div.BoxCollapsible-module--panelCollapse--2ZFxa.w-100-ns.ph4 > div > section > div > div.u-sizeFull.flex-m.flex-l.order-1 > div > div > div.flex.flex-wrap > div > div > label > span')
		  .click() //desmarcar
		cy.get('div').contains('Boleto').click()
		cy.wait(4000)
		cy.get('#___gatsby > div > main > div > div > section > div.Grid.flex.justify-between.flex-column.flex-row-ns > div.u-sizeFull.u-sm-sizeFull.u-md-size9of12.u-lg-size9of12.pr24-m.pr24-l > div:nth-child(2) > div > div.BoxCollapsible-module--panelCollapse--2ZFxa.w-100-ns.ph4 > div > section > div > div.u-sizeFull.flex-m.flex-l.order-1 > div > div > div.flex.flex-wrap > div > div > label > span')
		  .first().click({force:true}) //marcar
		//select dia de vencimento
		//cy.get('#react-select-2-input').select(date)
		cy.get('#BilletForm > div > div:nth-child(2) > div.checkboxContainer.Form-module--checkboxHeight--3Hlkz > label > span')
		  .click() //flag email
		cy.get('button').contains('Finalizar preenchimento').click()
		cy.wait(3000)
		cy.get('button').contains('Finalizar a compra').click()
        })
    }
})