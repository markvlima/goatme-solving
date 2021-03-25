 // Jornada TIC
// Este script efetua o relatório das ofertas de Telefonia Fixa para as cidades com Expansão
// @author: Marcos Lima

describe('Ofertas Fixa Empresas', function () {
	///*    
	const cities = [
	{
	    name: 'MONTE SANTO DE MINAS',
		fullname: 'Monte Santo de Minas/MG'
	}
    ]
	
	const offers = [
		{
			value: 'Fala muito mais'
		},
		{
			value: 'Ilimitado'
		}
	]
	
    for(var i = 0; i < cities.length; i++) {
    	for(var j = 0; j < offers.length; j++) {
			const city = cities[i];
			const offer = offers[j];
	    	checking(city, offer)
		}
    }

     beforeEach(() => {
	cy.viewport(1440, 1300)
        cy.visit('https://www.algartelecom.com.br/empresas/telefonia-fixa')
    })
	
    function checking(city, offer) {
    	var message = city.fullname+' - '+offer.value
        it(city.fullname, function () {
	    cy.wait(3000)
	    cy.get('#___gatsby > div > section:nth-child(1) > div > div.Grid-cell.u-sizeFull.u-sm-size5of12.u-md-size6of12.u-lg-size5of12.flex > div.u-size5of12.u-sm-size2of5.u-md-size2of6.u-lg-size2of5 > button > div').click()
	    cy.get('#___gatsby > div > section:nth-child(1) > div > div.Grid-cell.u-sizeFull.u-sm-size5of12.u-md-size6of12.u-lg-size5of12.flex > div.u-size5of12.u-sm-size2of5.u-md-size2of6.u-lg-size2of5 > div > div.db > input.dn.db-ns.w-100.scorpion.mt16.f16.fw5.bg-white.pv10.pr10.ba.b--boulder.br2.CitySelectModal-module--input--3SCoV').type(city.name)
		cy.wait(5000)
	    cy.get('p').contains(city.fullname).click()
	    cy.wait(3000)

	    cy.log('══ CHECK OFFERS ══')
	    cy.get('div').then(() => {
	    	if (cy.get('#planos-voz-fixo > div:nth-child(2) > div > div > ul > div > div.relative.VozFixoPlanList-module--size--1USdt > div.bg-green-haze.f20.br2.br--top.tc.pa20.white.fw5').contains(offer.value)) {
	    		cy.log(offer.value+' - OK')
			} else {
					cy.log(offer.value);
					cy.log(offer.status);
					cy.log(offer.value+' - ERROR')
					cy.server({ force404: true })
			}
		})
       })
    }
})
