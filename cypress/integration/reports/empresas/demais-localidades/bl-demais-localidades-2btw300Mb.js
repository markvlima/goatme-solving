// Jornada TIC
// Este script efetua o relatório das ofertas de Banda Larga para as cidades com Expansão
// @author: Marcos Lima

describe('BL Empresas - Demais Localidades', function () {
	///*    
	const cities = [
		{
			name: 'BATATAIS',
			fullname: 'Batatais/SP'
		},
		{
			name: 'BRODOWSKI',
			fullname: 'Brodowski/SP'
		},
		{
			name: 'CARMO DO PARANAIBA',
			fullname: 'Carmo do Paranaíba/MG'
		},
		{
			name: 'FRUTAL',
			fullname: 'Frutal/MG'
		},
		{
			name: 'ITUIUTABA',
			fullname: 'Ituiutaba/MG'
		},
		{
			name: 'ITUMBIARA',
			fullname: 'Itumbiara/GO'
		},
		{
			name: 'ITURAMA',
			fullname: 'Iturama/MG'
		},
		{
			name: 'ITUVERAVA',
			fullname: 'Ituverava/SP'
		},
		{
			name: 'JARDINOPOLIS',
			fullname: 'Jardinópolis/SP'
		},
		{
			name: 'LUZ',
			fullname: 'Luz/MG'
		},
		{
			name: 'MORRO AGUDO',
			fullname: 'Morro Agudo/SP'
		},
		{
			name: 'NOVA SERRANA',
			fullname: 'Nova Serrana/MG'
		},
		{
			name: 'PAPAGAIOS',
			fullname: 'Papagaios/MG'
		},
		{
			name: 'PARA DE MINAS',
			fullname: 'Pará de Minas/MG'
		},
		{
			name: 'PARANAIBA',
			fullname: 'Paranaíba/MS'
		},
		{
			name: 'PERDIGAO',
			fullname: 'Perdigão/MG'
		},
		{
			name: 'PITANGUI',
			fullname: 'Pitangui/MG'
		},
		{
			name: 'RIO PARANAIBA',
			fullname: 'Rio Paranaíba/MG'
		},
		{
			name: 'SALES OLIVEIRA',
			fullname: 'Sales Oliveira/SP'
		}
    ]
	   
	const offers = [
		{
			value: '2 Mega',
			status: 'active'
		},
		{
			value: '4 Mega',
			status: 'active'
		},
		{
			value: '6 Mega',
			status: 'active'
		},
		{
			value: '10 Mega',
			status: 'active'
		},
		{
			value: '20 Mega',
			status: 'active'
		},
		{
			value: '40 Mega',
			status: 'active'
		},
		{
			value: '60 Mega',
			status: 'active'
		},
		{
			value: '100 Mega',
			status: 'active'
		},
		{
			value: '200 Mega',
			status: 'active'
		},
		{
			value: '300 Mega',
			status: 'active'
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
