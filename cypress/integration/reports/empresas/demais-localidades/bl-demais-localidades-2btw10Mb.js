// Jornada TIC
// Este script efetua o relatório das ofertas de Banda Larga para as cidades com Expansão
// @author: Marcos Lima

describe('BL Empresas - Demais Localidades', function () {
	///*    
	const cities = [
		{
			name: 'UBERLANDIA',
			fullname: 'Uberlândia/MG'
		},
		{
			name: 'ABAETE',
			fullname: 'Abaeté/MG'
		},
		{
			name: 'BOM DESPACHO',
			fullname: 'Bom Despacho/MG'
		},
		{
			name: 'CARMO DO CAJURU',
			fullname: 'Carmo do Cajuru/MG'
		},
		{
			name: 'CHAPADA',
			fullname: 'Chapada/MG'
		},
		{
			name: 'CHAVES',
			fullname: 'Chaves/MG'
		},
		{
			name: 'CHAVESLANDIA',
			fullname: 'Chaveslândia/MG'
		},
		{
			name: 'CLARO DE MINAS',
			fullname: 'Claro de Minas/MG'
		},
		{
			name: 'CLAUDIO',
			fullname: 'Cláudio/MG'
		},
		{
			name: 'COROMANDEL',
			fullname: 'Coromandel/MG'
		},
		{
			name: 'IBIA',
			fullname: 'Ibiá/MG'
		},
		{
			name: 'ITAGUACU',
			fullname: 'Itaguaçu/GO'
		},
		{
			name: 'ITAPECIRICA',
			fullname: 'Itapecirica/MG'
		},
		{
			name: 'ITAUNA',
			fullname: 'Itaúna/MG'
		},
		{
			name: 'OLIVEIRA',
			fullname: 'Oliveira/SP'
		},
		{
			name: 'PATROCINIO',
			fullname: 'Patrocínio/MG'
		},
		{
			name: 'PERDIZES',
			fullname: 'Perdizes/MG'
		},
		{
			name: 'POMPEU',
			fullname: 'Pompéu/MG'
		},
		{
			name: 'SACRAMENTO',
			fullname: 'Sacramento/MG'
		},
		{
			name: 'SAO GOTARDO',
			fullname: 'São Gotardo/MG'
		}
    ]
	   
	const offers = [
	{
	    value: '2 Mega',
		status: 'active'
	},
	{
	    value: '4 Mega',
		status: 'inactive'
	},
	{
	    value: '6 Mega',
		status: 'inactive'
	},
	{
	    value: '10 Mega',
		status: 'inactive'
	},
	{
	    value: '20 Mega',
		status: 'inactive'
	},
	{
	    value: '40 Mega',
		status: 'inactive'
	},
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
	},
	{
	    value: '300 Mega',
		status: 'inactive'
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
			} else if ((cy.expect('div').to.not.equal(offer.value)) && (offer.status == 'inactive')) {
				cy.log('OK '+offer.value+' - Not found')
			}
else {
				cy.log(offer.value+' - Not found')
			}
		})
       })
    }
})
