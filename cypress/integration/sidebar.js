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
    const dataBL = [
	{
	    period: '12 meses', //use '12 meses' or '24 meses*'
	    amount: '1',
	    flagAdress: 'Sim'
	}]

    for(var i = 0; i < dataBL.length; i++) {
    //for(var i = 0; i < 1; i++) {
        const banda = dataBL[i];
        checking(banda)
    }

    beforeEach(() => { 
		//cy.viewport(1400, 1290)
        cy.visit('https://tic.enesolucoes.com.br/sua-conta')
    })
	
    function checking(banda) {
        it('Sidebar Boleto', function () {
            cy.log('══ FLUXO DE LOGIN ══')
            cy.wait(4000)
            cy.login(user.id,user.pwd)
            cy.wait(9000) //instabilidade authenticates
            
            cy.log('══ FLUXO DE ADICIONAR PRODUTOS ══')
            // Banda Larga
            cy.get('#comboSection > div > div > div > div > div > div.u-sizeFull.ph12-ns > section > div.u-sizeFull.u-sm-size4of12.u-md-size4of12.u-lg-size3of12.flex.justify-center > button')
              .click()
            cy.get('button').contains('Internet').click()
            cy.get('body > div.ReactModalPortal.ReactModal__Animation.ReactModal__FullHeight > div > div > div.ComboLayout-module--greenBgOn--tOZIs.ComboLayout-module--animated--1tVka.ComboLayout-module--fadeIn--3Du4M.ComboLayout-module--comboTopBar--39f_r > div > div > div.ComboLayout-module--wrapperContent--13fpb.ComboLayout-module--borderSidebar--1W84N.bg-white.overflow-hidden.br2.br--left-ns.br--top.pt10 > div > div > div > div.relative > div > div > div:nth-child(5) > div > div.u-size6of12.bl.b--black-10.pa0.pl12 > div > button')
              .click()
            cy.get('#number').type(cep.number, {force:true})
            cy.get('#cep').type(cep.cepNumber)
            cy.wait(5000)
            cy.get('button').contains('OK').click()
            cy.wait(16000) // tempo de checagem da viabilidade do BL

            // Fixo
            cy.get('button').contains('Fixo').click()
            cy.wait(5000)
            cy.get('body > div.ReactModalPortal.ReactModal__Animation.ReactModal__FullHeight > div > div > div.ComboLayout-module--greenBgOn--tOZIs.ComboLayout-module--animated--1tVka.ComboLayout-module--fadeIn--3Du4M.ComboLayout-module--comboTopBar--39f_r > div > div > div.ComboLayout-module--wrapperContent--13fpb.ComboLayout-module--borderSidebar--1W84N.bg-white.overflow-hidden.br2.br--left-ns.br--top.pt10 > div > div > div > div.u-size6of12.bl.b--black-10.pa0.pl12 > div > button')
              .contains('Comprar').click()
            cy.wait(20000) // tempo de checagem da viabilidade do Telefonia

            // Celular
            cy.get('button').contains('Celular').click()
            cy.wait(5000)
            cy.get('body > div.ReactModalPortal.ReactModal__Animation.ReactModal__FullHeight > div > div > div.ComboLayout-module--greenBgOn--tOZIs.ComboLayout-module--animated--1tVka.ComboLayout-module--fadeIn--3Du4M.ComboLayout-module--comboTopBar--39f_r > div > div > div.ComboLayout-module--wrapperContent--13fpb.ComboLayout-module--borderSidebar--1W84N.bg-white.overflow-hidden.br2.br--left-ns.br--top.pt10 > div > div:nth-child(1) > div > div.u-size6of12.bl.b--black-10.pa0.pl12 > div > button')
              .contains('Comprar').click()
            cy.wait(15000) // tempo de checagem da viabilidade do Celular

            cy.log('══ STEPS DO CHECKOUT ══')
            cy.get('body > div.ReactModalPortal.ReactModal__Animation.ReactModal__FullHeight > div > div > div > section > div.ComboConstructionAside-module--packageFooterContainer--1eXz2 > footer > button.pointer.pv12.ph20.f14.f16-m.f16-l.mine-shaft.bg-supernova.Button-module--buyButton__HoverEffect--2JNYK.nowrap.mb10.fw6.no-underline.bn.dib.tc.br-pill.self-center')
              .contains('Finalizar compra').click()
            cy.wait(5000)
            cy.get('button').contains('Continuar a compra').click({force:true})
            
            cy.log('══ PAGAMENTO BOLETO ══')
            cy.get('div').contains('Boleto').click()
            cy.get('#___gatsby > div > main > div > div > section > div.Grid.flex.justify-between.flex-column.flex-row-ns > div.u-sizeFull.u-sm-sizeFull.u-md-size9of12.u-lg-size9of12.pr24-m.pr24-l > div:nth-child(3) > div > div.BoxCollapsible-module--panelCollapse--2ZFxa.w-100-ns.ph4 > div > section > div > div.u-sizeFull.flex-m.flex-l.order-1 > div > div > div.flex.flex-wrap > div > div > label > span')
            .click() //desmarcar
            cy.get('#___gatsby > div > main > div > div > section > div.Grid.flex.justify-between.flex-column.flex-row-ns > div.u-sizeFull.u-sm-sizeFull.u-md-size9of12.u-lg-size9of12.pr24-m.pr24-l > div:nth-child(3) > div > div.BoxCollapsible-module--panelCollapse--2ZFxa.w-100-ns.ph4 > div > section > div > div.u-sizeFull.flex-m.flex-l.order-1 > div > div > div.flex.flex-wrap > div > div > label > span')
            .click() //marcar
            //select dia de vencimento
            cy.get('#react-select-2-input').select(date)
            cy.get('#BilletForm > div > div:nth-child(2) > div.checkboxContainer.Form-module--checkboxHeight--3Hlkz > label > span').click() //flag email
            cy.get('button').contains('Finalizar preenchimento').click()
            cy.wait(3000)
            cy.get('button').contains('Finalizar a compra').click()
        })
    }
})