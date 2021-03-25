 // Jornada TIC
// Este script efetua o cancelamento de um produto para um usuário pessoa jurídica.
// @author: Marcos Lima

describe('TIC - Cancelamento Contrato Alone (CPF)', function () {
    const cancel = [
	{
	    user: '53404312000127',
	    pwd: 'ctbc2016{enter}',
	    initialDate: '7',
		finalDate: '28',
		protocol: '' //201940250631
	}]

    for(var i = 0; i < cancel.length; i++) {
    //for(var i = 0; i < 1; i++) {
        const revocation = cancel[i];
        checking(revocation)
    }

     beforeEach(() => {
	cy.viewport(1440, 1300)
        cy.visit('https://portalapphmg.algartelecom.com.br/AreaClienteCorporativo')
    })
	
    function checking(revocation) {
        it('Cancelamento via Portal Corporativo', function () {
	    cy.wait(3000)
	    cy.log('══ FLUXO DE LOGIN ══')
	    cy.wait(4000)
  	    cy.get('#user').type(revocation.user)
	    cy.get('#password').type(revocation.pwd)
    	cy.wait(2000)
	    //cy.get('#root > div > div > section > form > div > fieldset > div.styles__btnAuthenticateWrapper___2FyW1 > button').click()
	    cy.wait(3000)
		cy.get('a').contains("Ver todas as solicitações").click()
		cy.wait(8000)
		cy.get('input').then(() => {
    		if (revocation.protocol == '') {
      		  	cy.get('#datePickerStart').click({force:true})
				cy.get('#root > main > div.fullHeight.styles__home___SBf_9 > section > header > div > div > div > div:nth-child(2) > div > div > div.DateRangePicker_picker.DateRangePicker_picker_1.DateRangePicker_picker__directionRight.DateRangePicker_picker__directionRight_2 > div > div > div > div.DayPicker_focusRegion.DayPicker_focusRegion_1 > div.DayPicker_transitionContainer.DayPicker_transitionContainer_1.DayPicker_transitionContainer__horizontal.DayPicker_transitionContainer__horizontal_2 > div > div:nth-child(2) > div > table > tbody > tr:nth-child(1) > td.CalendarDay.CalendarDay_1.CalendarDay__default.CalendarDay__default_2.CalendarDay__selected_start.CalendarDay__selected_start_3.CalendarDay__selected.CalendarDay__selected_4').click({force:true})
				cy.get('#datePickerEnd').click({force:true})
				cy.get('#root > main > div.fullHeight.styles__home___SBf_9 > section > header > div > div > div > div:nth-child(2) > div > div > div.DateRangePicker_picker.DateRangePicker_picker_1.DateRangePicker_picker__directionRight.DateRangePicker_picker__directionRight_2 > div > div > div > div.DayPicker_focusRegion.DayPicker_focusRegion_1 > div.DayPicker_transitionContainer.DayPicker_transitionContainer_1.DayPicker_transitionContainer__horizontal.DayPicker_transitionContainer__horizontal_2 > div > div:nth-child(3) > div > table > tbody > tr:nth-child(1) > td.CalendarDay.CalendarDay_1.CalendarDay__default.CalendarDay__default_2.CalendarDay__today.CalendarDay__today_3.CalendarDay__selected_end.CalendarDay__selected_end_4.CalendarDay__selected.CalendarDay__selected_5').click({force:true})
	        } else {
	      	  	cy.get('#protocol').type(revocation.protocol, {force:true})
	    	}	
			})
		cy.wait(2000)
		cy.get('#root > main > div.fullHeight.styles__home___SBf_9 > section > header > div > div > div > div.styles__displayCalcInterval___3qeB3 > button').click()
        })
    }
})
