// Jornada TIC
// Este script efetua o relatório das ofertas de Banda Larga para as cidades com Expansão
// @author: Marcos Lima

describe('BL Empresas - Demais Localidades', function () {
	///*    
	const cities = [
		{
			name: 'ABAETE',
			fullname: 'Abaeté/MG'
		},
		{
			name: 'CARMO DO CAJURU',
			fullname: 'Carmo do Cajuru/MG'
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
			name: 'ITAUNA',
			fullname: 'Itaúna/MG'
		},
		{
			name: 'OLIVEIRA',
			fullname: 'Oliveira/MG'
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
		},
		{
			name: 'SAO JOSE DA BARRA',
			fullname: 'São José da Barra/MG'
		}
    ]

    for(var i = 0; i < cities.length; i++) {
		const city = cities[i];
    	checking(city)
	}

    beforeEach(() => {
	cy.viewport(1440, 1300)
        cy.visit('https://www.algartelecom.com.br/empresas/banda-larga')
    })
	
    function checking(city) {
		var message = city.fullname
        it(message, function () {
	    cy.wait(3000)
	    cy.get('#___gatsby > div > section:nth-child(1) > div > div.Grid-cell.u-sizeFull.u-sm-size5of12.u-md-size6of12.u-lg-size5of12.flex > div.u-size5of12.u-sm-size2of5.u-md-size2of6.u-lg-size2of5 > button > div').click()
	    cy.get('#___gatsby > div > section:nth-child(1) > div > div.Grid-cell.u-sizeFull.u-sm-size5of12.u-md-size6of12.u-lg-size5of12.flex > div.u-size5of12.u-sm-size2of5.u-md-size2of6.u-lg-size2of5 > div > div.db > input.dn.db-ns.w-100.scorpion.mt16.f16.fw5.bg-white.pv10.pr10.ba.b--boulder.br2.CitySelectModal-module--input--3SCoV').type(city.name)
		cy.wait(5000)
	    cy.get('p').contains(city.fullname).click()
	    cy.wait(3000)

	    cy.log('══ CHECK OFFERS ══')
	    cy.get('div').then(() => {
			if ((cy.get('div').contains('Que pena, esse produto ainda não está disponível na sua região.'))) {
				cy.log(city.name+' - OK')
			} else {
				cy.log(city.name+' - ERROR')
				cy.server({ force404: true })
			}
		})
       })
    }
})
