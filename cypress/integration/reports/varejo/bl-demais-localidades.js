// Jornada TIC
// Este script efetua o relatório das ofertas de Banda Larga para as cidades com Expansão Combate
// @author: Marcos Lima

describe('Ofertas Banda Larga Empresas - Expansão Combate', function () {
	///*    
	const cities = [
	{
	    name: 'ABAETE',
		fullname: 'Abaeté/MG',
		classification: 'Demais Localidades'
	}
	]//*/

	///*    
	const offers = [
	values: {
	    only2Mb: ['2 Mega'],
			btw2_10Mb: ['2 Mega','4 Mega','6 Mega','10 Mega'],
			btw2_4and10Mb: ['2 Mega','4 Mega','10 Mega'],
			btw2_40Mb: ['2 Mega','4 Mega','6 Mega','10 Mega','20 Mega','40 Mega'],
			btw2_300Mb: ['2 Mega','4 Mega','6 Mega','10 Mega','20 Mega','40 Mega','60 Mega','100 Mega','200 Mega','300 Mega'],
			btw6_300Mb: ['6 Mega','10 Mega','20 Mega','40 Mega','60 Mega','100 Mega','200 Mega','300 Mega'],
			btw20_300Mb: ['20 Mega','40 Mega','60 Mega','100 Mega','200 Mega','300 Mega'],
			btw60_200Mb: ['60 Mega','100 Mega','200 Mega'],
			empty_state: ['Que pena, esse produto ainda não está disponível na sua região.']
	}
	]//*/
	
	for(var i = 0; i < cities.length; i++) {
    	for(var j = 0; j < offers.length; j++) {
		    const city = cities[i];
			const offer = offers[j];
		    checking(city, offer)
		}
    }

    beforeEach(() => {
	cy.viewport(1440, 1300)
        cy.visit('https://www.algartelecom.com.br/para-voce/banda-larga')
    })
	
    function checking(city, offer) {
		var message = city.fullname+' - '+offer.value
        it(message, function () {
	    cy.wait(3000)
	    cy.get('#___gatsby > div > section:nth-child(1) > div > div.Grid-cell.u-sizeFull.u-sm-size5of12.u-md-size6of12.u-lg-size5of12.flex > div.u-size5of12.u-sm-size2of5.u-md-size2of6.u-lg-size2of5 > button > div').click()
	    cy.get('#___gatsby > div > section:nth-child(1) > div > div.Grid-cell.u-sizeFull.u-sm-size5of12.u-md-size6of12.u-lg-size5of12.flex > div.u-size5of12.u-sm-size2of5.u-md-size2of6.u-lg-size2of5 > div > div.db > input.dn.db-ns.w-100.scorpion.mt16.f16.fw5.bg-white.pv10.pr10.ba.b--boulder.br2.CitySelectModal-module--input--3SCoV').type(city.name)
		cy.wait(5000)
	    cy.get('p').contains(city.fullname).click()
	    cy.wait(3000)
		cy.get('button').contains('Ver todas velocidades').click()
		cy.wait(3000)

	    cy.log('══ CHECK OFFERS ══')
	    cy.get('div').then(() => {
	    	if (city.classification == 'Demais Localidades') {
				if (cy.get('div.fw6.mb4.f20.f32-m.f32-l.fw6.mb4').contains(offer.value)) {
				//if (cy.contains('div', offer.value).parent('.Grid Grid--withGutter').parent('div').parent('div').parent('div').parent('div')) {
					cy.log(offer.value+' - OK')
				} else {
				cy.log(offer.value+' - Not found')
			}
			} else {
				cy.log('Offer or city not found.')
			}
		})
       })
    }
	//cy.log(cities.length+'cidade avaliadas.')
})