 // Jornada TIC
// Este script efetua o relatório das ofertas de Telefonia Fixa para as cidades com Expansão
// @author: Marcos Lima

describe('Ofertas Fixa Empresas', function () {
	///*    
	const cities = [
	{
	    name: 'ALAGOA',
		fullname: 'Alagoa/MG'
	},
	{
	    name: 'ARAMINA',
		fullname: 'Aramina/SP'
	},
	{
	    name: 'ARAPORA',
		fullname: 'Araporã/MG'
	},
	{
	    name: 'ARAUJOS',
		fullname: 'Araújos/MG'
	},
	{
	    name: 'AREADO',
		fullname: 'Areado/MG'
	},
	{
	    name: 'BATATAIS',
		fullname: 'Batatais/SP'
	},
	{
	    name: 'BOA ESPERANCA',
		fullname: 'Boa Esperança/MG'
	},
	{
	    name: 'BRODOWSKI',
		fullname: 'Brodowski/SP'
	},
	{
	    name: 'BRUMADINHO',
		fullname: 'Brumadinho/MG'
	},
	{
	    name: 'BURITI ALEGRE',
		fullname: 'Buriti Alegre/GO'
	},
	{
	    name: 'BURITIZAL',
		fullname: 'Buritizal/SP'
	},
	{
	    name: 'CACHOEIRA DOURADA',
		fullname: 'Cachoeira Dourada/GO'
	},
	{
	    name: 'CAMPINA VERDE',
		fullname: 'Campina Verde/MG'
	},
	{
	    name: 'CAMPO FLORIDO',
		fullname: 'Campo Florido/MG'
	},
	{
	    name: 'CANAPOLIS',
		fullname: 'Canápolis/MG'
	},
	{
	    name: 'CAPELINHA',
		fullname: 'Capelinha/MG'
	},
	{
	    name: 'CAPINOPOLIS',
		fullname: 'Capinópolis/MG'
	},
	{
	    name: 'CARMO DO PARANAIBA',
		fullname: 'Carmo do Paranaíba/MG'
	},
	{
	    name: 'CASSIA DOS COQUEIROS',
		fullname: 'Cassia dos Coqueiros/SP'
	},
	{
	    name: 'CENTRALINA',
		fullname: 'Centralina/MG'
	},
	{
	    name: 'COLOMBIA',
		fullname: 'Colômbia/SP'
	},
	{
	    name: 'COMENDADOR GOMES',
		fullname: 'Comendador Gomes/MG'
	},
	{
	    name: 'CORREGO DANTA',
		fullname: 'Corrego Danta/MG'
	},
	{
	    name: 'CRUZEIRO DA FORTALEZA',
		fullname: 'Cruzeiro da Fortaleza/MG'
	},
	{
	    name: 'DELTA',
		fullname: 'Delta/MG'
	},
	{
	    name: 'FRUTAL',
		fullname: 'Frutal/MG'
	},
	{
	    name: 'GURINHATA',
		fullname: 'Gurinhatã/MG'
	},
	{
	    name: 'IBIRACI',
		fullname: 'Ibiraci/MG'
	},
	{
	    name: 'ITAJAÍ',
		fullname: 'Itajaí/SC'
	},
	{
	    name: 'ITAPEMA',
		fullname: 'Itapema/SC'
	},
	{
	    name: 'IGARATINGA',
		fullname: 'Igaratinga/MG'
	},
	{
	    name: 'IGUATAMA',
		fullname: 'Iguatama/MG'
	},
	{
	    name: 'INACIOLANDIA',
		fullname: 'Inacionlândia/GO'
	},
	{
	    name: 'INDIANOPOLIS',
		fullname: 'Indianópolis/MG'
	},
	{
	    name: 'IPIACU',
		fullname: 'Ipiaçu/MG'
	},
	{
	    name: 'ITUIUTABA',
		fullname: 'Ituiutaba/MG'
	},
	{
	    name: 'ITUMBIRA',
		fullname: 'Itumbira/GO'
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
	    name: 'LAGAMAR',
		fullname: 'Lagaamr/MG'
	},
	{
	    name: 'LAGOA GRANDE',
		fullname: 'Lagoa Grande/MG'
	},
	{
	    name: 'LIMEIRA DO OESTE',
		fullname: 'Limeira do Oeste/MG'
	},
	{
	    name: 'LUZ',
		fullname: 'Luz/MG'
	},
	{
	    name: 'MIGUELOPOLIS',
		fullname: 'Miguelópolis/SP'
	},
	{
	    name: 'MOEMA',
		fullname: 'Moema/MG'
	},
	{
	    name: 'MONTE ALEGRE DE MINAS',
		fullname: 'Monte Alegre de Minas/MG'
	},
	{
	    name: 'MORRO AGUDO',
		fullname: 'Morro Agudo/SP'
	},
	{
	    name: 'NILOPOLIS',
		fullname: 'Nilópolis/RJ'
	},
	{
	    name: 'NOVA LIMA',
		fullname: 'Nova Lima/MG'
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
	    name: 'PARANAIGUARA',
		fullname: 'Paranaiguara/GO'
	},
	{
	    name: 'PEDRINOPOLIS',
		fullname: 'Pedrinópolis/SP'
	},
	{
	    name: 'PEAQUI',
		fullname: 'Pequi/MG'
	},
	{
	    name: 'PERDIGAO',
		fullname: 'Perdigão/MG'
	},
	{
	    name: 'PIRAJUBA',
		fullname: 'Pirajuba/MG'
	},
	{
	    name: 'PITANGUI',
		fullname: 'Pitangui/MG'
	},
	{
	    name: 'PLANURA',
		fullname: 'Planura/MG'
	},
	{
	    name: 'PRATA',
		fullname: 'Prata/MG'
	},
	{
	    name: 'PRESIDENTE OLEGARIO',
		fullname: 'Presidente Olegário/MG'
	},
	{
	    name: 'RIBEIRAO CORRENTE',
		fullname: 'Ribeirão Corrente/SP'
	},
	{
	    name: 'RIO PARANAIBA',
		fullname: 'Rio Paranaíba/MG'
	},
	{
	    name: 'SALES OLIVEIRA',
		fullname: 'Sales Oliveira/SP'
	},
	{
	    name: 'SANTA CRUZ DA ESPERANCA',
		fullname: 'Santa Cruz da Esperença/SP'
	},
	{
	    name: 'SANTA JULIANA',
		fullname: 'Santa Juliana/MG'
	},
	{
	    name: 'SANTO ANTONIO DA ALEGRIA',
		fullname: 'Santo Antônio da Alegria/SP'
	},
	{
	    name: 'SAO JOSE DA BARRA',
		fullname: 'São José da Barra/MG'
	},
	{
	    name: 'TUPACIGUARA',
		fullname: 'Tupaciguara/MG'
	},
	{
	    name: 'UNIAO DE MINAS',
		fullname: 'União de Minas/ES'
	}
    ]
	
	const offers = [
		{
			value: 'Fala muito mais'
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
	    	if (cy.get('div').contains(offer.value)) {
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
