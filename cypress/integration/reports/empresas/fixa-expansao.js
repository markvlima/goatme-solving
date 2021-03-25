 // Jornada TIC
// Este script efetua o relatório das ofertas de Telefonia Fixa para as cidades com Expansão
// @author: Marcos Lima

describe('Ofertas Fixa Empresas', function () {
	///*    
	const cities = [
	{
	    name: 'AMERICANA',
		fullname: 'Americana/SP',
		classification: 'Expansão'
	},
	{
	    name: 'APARECIDA DE GOIANIA',
		fullname: 'Aparecida de Goiânia/GO',
		classification: 'Expansão'
	},
	{
	    name: 'ARACAJU',
		fullname: 'Aracaju/SE',
		classification: 'Expansão'
	},
	{
	    name: 'ARARAQUARA',
		fullname: 'Araraquara/SP',
		classification: 'Expansão'
	},
	{
	    name: 'BALNEARIO CAMBORIU',
		fullname: 'Balneário Camboriú/SC',
		classification: 'Expansão'
	},
	{
	    name: 'BARRETOS',
		fullname: 'Barretos/SP',
		classification: 'Expansão'
	},
	{
	    name: 'BARUERI',
		fullname: 'Barueri/SP',
		classification: 'Expansão'
	},
	{
	    name: 'BELO HORIZONTE',
		fullname: 'Belo Horizonte/MG',
		classification: 'Expansão'
	},
	{
	    name: 'BENTO GONCALVES',
		fullname: 'Bento Gonçalves/RS',
		classification: 'Expansão'
	},
	{
	    name: 'BETIM',
		fullname: 'Betim/MG',
		classification: 'Expansão'
	},
	{
	    name: 'BLUMENAU',
		fullname: 'Blumenau/SC',
		classification: 'Expansão'
	},
	{
	    name: 'BRUSQUE',
		fullname: 'Brusque/SC',
		classification: 'Expansão'
	},
	{
	    name: 'CACHOEIRINHA',
		fullname: 'Cachoeirinha/RS',
		classification: 'Expansão'
	},
	{
	    name: 'CAMPINAS',
		fullname: 'Campinas/SP',
		classification: 'Expansão'
	},
	{
	    name: 'CAMPO BOM',
		fullname: 'Campo Bom/RS',
		classification: 'Expansão'
	},
	{
	    name: 'CANOAS',
		fullname: 'Canoas/RS',
		classification: 'Expansão'
	},
	{
	    name: 'CARIACICA',
		fullname: 'Cariacica/ES',
		classification: 'Expansão'
	},
	{
	    name: 'CAXIAS DO SUL',
		fullname: 'Caxias do Sul/RS',
		classification: 'Expansão'
	},
	{
	    name: 'CONTAGEM',
		fullname: 'Contagem/MG',
		classification: 'Expansão'
	},
	{
	    name: 'ESTEIO',
		fullname: 'Esteio/RS',
		classification: 'Expansão'
	},
	{
	    name: 'FARROUPILHA',
		fullname: 'Farroupilha/RS',
		classification: 'Expansão'
	},
	{
	    name: 'FEIRA DE SANTANA',
		fullname: 'Feira de Santana/BA',
		classification: 'Expansão'
	},
	{
	    name: 'FLORIANOPOLIS',
		fullname: 'Florianópolis/SC',
		classification: 'Expansão'
	},
	{
	    name: 'FORTALEZA',
		fullname: 'Fortaleza/CE',
		classification: 'Expansão'
	},
	{
	    name: 'GOIANIA',
		fullname: 'Goiânia/GO',
		classification: 'Expansão'
	},
	{
	    name: 'GRAVATAI',
		fullname: 'Gravataí/RS',
		classification: 'Expansão'
	},
	{
	    name: 'GUARULHOS',
		fullname: 'Guarulhos/SP',
		classification: 'Expansão'
	},
	{
	    name: 'ITAJAÍ',
		fullname: 'Itajaí/SC',
		classification: 'Expansão'
	},
	{
	    name: 'ITAPEMA',
		fullname: 'Itapema/SC',
		classification: 'Expansão'
	},
	{
	    name: 'JARAGUÁ DO SUL',
		fullname: 'Jaraguá do Sul/SC',
		classification: 'Expansão'
	},
	{
	    name: 'JOÃO PESSOA',
		fullname: 'João Pessoa/PB',
		classification: 'Expansão'
	},
	{
	    name: 'JOINVILLE',
		fullname: 'Joinville/SC',
		classification: 'Expansão'
	},
	{
	    name: 'JUIZ DE FORA',
		fullname: 'Juiz de Fora/MG',
		classification: 'Expansão'
	},
	{
	    name: 'JUNDIAÍ',
		fullname: 'Jundiaí/SP',
		classification: 'Expansão'
	},
	{
	    name: 'LAGES',
		fullname: 'Lages/SC',
		classification: 'Expansão'
	},
	{
	    name: 'MACEIO',
		fullname: 'Maceió/AL',
		classification: 'Expansão'
	},
	{
	    name: 'MOGI DAS CRUZES',
		fullname: 'Mogi das Cruzes/SP',
		classification: 'Expansão'
	},
	{
	    name: 'NATAL',
		fullname: 'Natal/RN',
		classification: 'Expansão'
	},
	{
	    name: 'NOVA LIMA',
		fullname: 'Nova Lima/MG',
		classification: 'Expansão'
	},
	{
	    name: 'NOVO HAMBURGO',
		fullname: 'Novo Hamburgo/RS',
		classification: 'Expansão'
	},
	{
	    name: 'OSASCO',
		fullname: 'Osasco/SP',
		classification: 'Expansão'
	},
	{
	    name: 'PALHOCA',
		fullname: 'Palhoça/SC',
		classification: 'Expansão'
	},
	{
	    name: 'PARNAMIRIM',
		fullname: 'Parnamirim/RN',
		classification: 'Expansão'
	},
	{
	    name: 'PORTO ALEGRE',
		fullname: 'Porto Alegre/RS',
		classification: 'Expansão'
	},
	{
	    name: 'RECIFE',
		fullname: 'Recife/PE',
		classification: 'Expansão'
	},
	{
	    name: 'RIBEIRAO DAS NEVES',
		fullname: 'Ribeirão das Neves/MG',
		classification: 'Expansão'
	},
	{
	    name: 'RIBEIRAO PRETO',
		fullname: 'Ribeirão Preto/SP',
		classification: 'Expansão'
	},
	{
	    name: 'SALVADOR',
		fullname: 'Salvador/BA',
		classification: 'Expansão'
	},
	{
	    name: 'SANTA BARBARA',
		fullname: 'Santa Bárbara/SP',
		classification: 'Expansão'
	},
	{
	    name: 'SANTA LUZIA',
		fullname: 'Santa Luzia/MG',
		classification: 'Expansão'
	},
	{
	    name: 'SAO BENTO DO SUL',
		fullname: 'São Bento do Sul/SC',
		classification: 'Expansão'
	},
	{
	    name: 'SAO CARLOS',
		fullname: 'São Carlos/SP',
		classification: 'Expansão'
	},
	{
	    name: 'SAO JOSE',
		fullname: 'São José/SC',
		classification: 'Expansão'
	},
	{
	    name: 'SAO JOSE DO RIO PRETO',
		fullname: 'São José do Rio Preto/SP',
		classification: 'Expansão'
	},
	{
	    name: 'SAO LEOPOLDO',
		fullname: 'São Leopoldo/RS',
		classification: 'Expansão'
	},
	{
	    name: 'SÃO PAULO',
		fullname: 'São Paulo/SP',
		classification: 'Expansão'
	},
	{
	    name: 'SERRA',
		fullname: 'Serra/ES',
		classification: 'Expansão'
	},
	{
	    name: 'SOROCABA',
		fullname: 'Sorocaba/SP',
		classification: 'Expansão'
	},
	{
	    name: 'VARZEA PAULISTA',
		fullname: 'Várzea Paulista/SP',
		classification: 'Expansão'
	},
	{
	    name: 'VILA VELHA',
		fullname: 'Vila Velha/ES',
		classification: 'Expansão'
	},
	{
	    name: 'VITÓRIA',
		fullname: 'Vitória/ES',
		classification: 'Expansão'
	}
    ]//*/

	// single city
	/*

	const cities = [
	{
	    name: 'AMERICANA',
		fullname: 'Americana/SP',
		classification: 'Expansão'
	}
	]//*/
	
    for(var i = 0; i < cities.length; i++) {
    //for(var i = 0; i < 1; i++) {
        const city = cities[i];
        checking(city)
    }

     beforeEach(() => {
	cy.viewport(1440, 1300)
        cy.visit('https://www.algartelecom.com.br/empresas/telefonia-fixa')
    })
	
    function checking(city) {
        it(city.fullname, function () {
	    cy.wait(3000)
	    cy.get('#___gatsby > div > section:nth-child(1) > div > div.Grid-cell.u-sizeFull.u-sm-size5of12.u-md-size6of12.u-lg-size5of12.flex > div.u-size5of12.u-sm-size2of5.u-md-size2of6.u-lg-size2of5 > button > div').click()
	    cy.get('#___gatsby > div > section:nth-child(1) > div > div.Grid-cell.u-sizeFull.u-sm-size5of12.u-md-size6of12.u-lg-size5of12.flex > div.u-size5of12.u-sm-size2of5.u-md-size2of6.u-lg-size2of5 > div > div.db > input.dn.db-ns.w-100.scorpion.mt16.f16.fw5.bg-white.pv10.pr10.ba.b--boulder.br2.CitySelectModal-module--input--3SCoV').type(city.name)
		cy.wait(5000)
	    cy.get('p').contains(city.fullname).click()
	    cy.wait(3000)

	    cy.log('══ CHECK OFFERS ══')
	    cy.get('div').then(() => {
	    	if (city.classification == 'Expansão') {
				if (cy.get('div').contains(offer.value)) {
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
})
