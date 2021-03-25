// Jornada TIC
// Este script efetua o relatório das ofertas de Banda Larga para as cidades com Expansão
// @author: Marcos Lima

describe('BL Empresas - Demais Localidades', function () {
	///*    
	const cities = [
		{
			name: 'BRUMADINHO',
			fullname: 'Brumadinho/MG'
		},
		{
			name: 'NOVA LIMA',
			fullname: 'Nova Lima/MG'
		}
    ]
	   
	const offers = [
	{
	    value: '60 Mega',
		status: 'inactive'
	},
	{
	    value: '100 Mega',
		status: 'inactive'
	},
	{
	    value: '200 Mega',
		status: 'inactive'
	}]

    for(var i = 0; i < cities.length; i++) {
    	for(var j = 0; j < offers.length; j++) {
			const city = cities[i];
			const offer = offers[j];
	    	checking(city, offer)
		}
    }

     beforeEach(() => {
	cy.viewport(1440, 1300)
        cy.visit('https://www.algartelecom.com.br/empresas/banda-larga')
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

	    cy.log('══ CHECK OFFERS ══')
	    cy.get('div').then(() => {
			if ((cy.get('div').contains(offer.value)) && (offer.status == 'active')) {
				cy.log(offer.value+' - OK')
			} else if ((cy.get('div').contains(offer.value)) && (offer.status == 'inactive')) {
					cy.log(offer.value);
					cy.log(offer.status);
					cy.log(offer.value+' - ERROR')
					cy.server({ force404: true })
					
			}
else {
				cy.log(offer.value+' - Not found')
			}
		})
       })
    }
})
