// Jornada TIC
// Este script efetua o relatório das ofertas de Banda Larga para as cidades com Expansão Combate
// @author: Marcos Lima

describe('Ofertas Banda Larga Empresas - Expansão Combate', function () {
   
	const cities = [
		{
			name: 'ALTINOPOLIS',
			fullname: 'Altinópolis/SP',
			classification: 'Concessão Combate',
			offers: 'btw2_300Mb'
		},
		{
			name: 'CAJURU',
			fullname: 'Cajuru/SP',
			classification: 'Concessão Combate',
			offers: 'btw2_300Mb'
		},
		{
			name: 'CAMPOS ALTOS',
			fullname: 'Campos Altos/MG',
			classification: 'Concessão Combate',
			offers: 'btw2_10Mb'
		},
		/*{
			name: 'CARNEIRINHO',
			fullname: 'Carneirinho/MG',
			classification: 'Concessão Combate',
			offers: 'btw2_10Mb'
		},
		{
			name: 'CONCEICAO DAS ALAGOAS',
			fullname: 'Conceição das Alagoas/MG',
			classification: 'Concessão Combate',
			offers: 'btw2_300Mb'
		},
		{
			name: 'DIVNIOPOLIS',
			fullname: 'Divinópolis/MG',
			classification: 'Concessão Combate',
			offers: 'btw2_300Mb'
		},
		{
			name: 'FRANCA',
			fullname: 'Franca/SP',
			classification: 'Concessão Combate',
			offers: 'btw2_300Mb'
		},
		{
			name: 'GUAIRA',
			fullname: 'Guaíra/SP',
			classification: 'Concessão Combate',
			offers: 'btw2_300Mb'
		},
		{
			name: 'GUARA',
			fullname: 'Guará/SP',
			classification: 'Concessão Combate',
			offers: 'btw2_300Mb'
		},
		{
			name: 'IPUA',
			fullname: 'Ipuã/SP',
			classification: 'Concessão Combate',
			offers: 'btw2_300Mb'
		},
		{
			name: 'MARAVILHAS',
			fullname: 'Maravilhas/MG',
			classification: 'Concessão Combate',
			offers: 'btw2_10Mb'
		},
		{
			name: 'NOVA PONTE',
			fullname: 'Nova Ponte/MG',
			classification: 'Concessão Combate',
			offers: 'btw2_310Mb'
		},
		{
			name: 'NUPORANGA',
			fullname: 'Nuporanga/SP',
			classification: 'Concessão Combate',
			offers: 'btw2_300Mb'
		},
		{
			name: 'ORLANDIA',
			fullname: 'Orlândia/SP',
			classification: 'Concessão Combate',
			offers: 'btw2_300Mb'
		},
		{
			name: 'PATOS DE MINAS',
			fullname: 'Patos de Minas/MG',
			classification: 'Concessão Combate',
			offers: 'btw2_300Mb'
		},
		{
			name: 'POCOS DE CALDAS',
			fullname: 'Poços de Caldas/MG',
			classification: 'Concessão Combate',
			offers: 'btw2_300Mb'
		},
		{
			name: 'UBERABA',
			fullname: 'Uberaba/MG',
			classification: 'Concessão Combate',
			offers: 'btw2_300Mb'
		},
		{
			name: 'UBERLANIDA',
			fullname: 'Uberlândia/MG',
			classification: 'Concessão Combate',
			offers: 'btw2_300Mb'
		}*/
	]

	const offers = {
		values: {
			btw2_10Mb: ['2 Mega','4 Mega','6 Mega','10 Mega'],
			btw2_300Mb: ['2 Mega','4 Mega','6 Mega','10 Mega','20 Mega','40 Mega','60 Mega','100 Mega','200 Mega','300 Mega']
		}
	}

	/*const offers = [
	{
	    value: '2 Mega'
	},
	{
	    value: '4 Mega'
	},
	{
	    value: '6 Mega'
	},
	{
	    value: '10 Mega'
	},
	{
	    value: '20 Mega'
	},
	{
	    value: '40 Mega'
	},
	{
	    value: '60 Mega'
	},
	{
	    value: '100 Mega'
	},
	{
	    value: '200 Mega'
	},
	{
	    value: '300 Mega'
	}
	]*/
	
	for(var i = 0; i < cities.length; i++) {
    	//for(var j = 0; j < offers.length; j++) {
		const city = cities[i];
		Object.keys(offers).forEach(function(item) {	
		//for(var j = 0; j < offers.length; j++) {	    
			const offer[] = offers[item];
		    checking(city, offer)
		});
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
	    	if (city.offers == 'btw2_300Mb') {
				if (cy.get('div.fw6.mb4.f20.f32-m.f32-l.fw6.mb4').contains(offers.values.btw2_10Mb)) {
				//if (cy.contains('div', offer.value).parent('.Grid Grid--withGutter').parent('div').parent('div').parent('div').parent('div')) {
					cy.log(offer.values.btw2_10Mb[j]+' - OK')
				} else if (cy.get('div.fw6.mb4.f20.f32-m.f32-l.fw6.mb4').contains(offers.values.btw2_300Mb)) {
					cy.log(offer.values.btw2_300Mb+' - OK')
				} else {
				cy.log(offer.values+' - Not found')
			}
			} else {
				cy.log('Offer or city not found.')
			}
		})
       })
    }
	//cy.log(cities.length+'cidade avaliadas.')
})