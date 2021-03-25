// Jornada TIC
// Este script efetua a analise de combos da Black Friday para cidades de Concessão Combate
// @author: Marcos Lima

import {blkcities} from "../mocks/blackfriday/citiesConcExpassion.mocks"
import {blkoffers} from "../mocks/blackfriday/offersConcCombat.mocks"

describe('Combos - Expansão Combate', function () {
    const cities = blkcities
    const offers = blkoffers
    
	for(var i = 0; i < cities.length; i++) {
    	for(var j = 0; j < offers.length; j++) {
            const city = cities[i];
            const offer = offers[j];
            checking(city, offer)
		}
    }

    beforeEach(() => {
	cy.viewport(1440, 1300)
        //cy.visit('https://deploy-preview-1329--lucid-jepsen-ae3f5a.netlify.com/para-voce/')
		cy.visit('https://www.algartelecom.com.br/para-voce')
    })
	
    function checking(city, offer) {
		var message = city.fullname+' - '+offer.bl+'/'+offer.phone+'/'+offer.mobile
        it(message, function () {
	    cy.wait(3000)
	    cy.get('#___gatsby > div > section:nth-child(1) > div > div.Grid-cell.u-sizeFull.u-sm-size5of12.u-md-size6of12.u-lg-size5of12.flex > div.u-size5of12.u-sm-size2of5.u-md-size2of6.u-lg-size2of5 > button > div').click()
	    cy.get('#___gatsby > div > section:nth-child(1) > div > div.Grid-cell.u-sizeFull.u-sm-size5of12.u-md-size6of12.u-lg-size5of12.flex > div.u-size5of12.u-sm-size2of5.u-md-size2of6.u-lg-size2of5 > div > div.db > input.dn.db-ns.w-100.scorpion.mt16.f16.fw5.bg-white.pv10.pr10.ba.b--boulder.br2.CitySelectModal-module--input--3SCoV').type(city.name)
		cy.wait(5000)
	    cy.get('p').contains(city.fullname).click()
	    cy.wait(5000)
        cy.get('#comboSection > div > div > div > div > div > div.Grid.items-end > div:nth-child(1) > div.relative.flex.flex-column.justify-between.h-100.bg-white.flex-row.flex-column-m.flex-column-l.ba.br3.b--very-light-pink.items-center.mb24.pointer.ComboCard-module--cards__HoverEffect--O0z5K > div.w-100.mb24-m.flex.flex-column.items-start.mv10.mv0-m.mv0-l.u-size6of12.u-sm-size6of12.u-md-size9of12.u-lg-size9of12.pl12-ns.pl0-m.pl0-l.br.bn-m.bn-l.b--very-light-pink > div:nth-child(1) > div > div.flex.flex-column.ml10.ml32-m.ml32-l > span.f16.f18-ns.f24-m.f24-l.fw6')
          .contains(offer.bl)
        cy.get('#comboSection > div > div > div > div > div > div.Grid.items-end > div:nth-child(1) > div.relative.flex.flex-column.justify-between.h-100.bg-white.flex-row.flex-column-m.flex-column-l.ba.br3.b--very-light-pink.items-center.mb24.pointer.ComboCard-module--cards__HoverEffect--O0z5K > div.w-100.mb24-m.flex.flex-column.items-start.mv10.mv0-m.mv0-l.u-size6of12.u-sm-size6of12.u-md-size9of12.u-lg-size9of12.pl12-ns.pl0-m.pl0-l.br.bn-m.bn-l.b--very-light-pink > div:nth-child(2) > div > div.flex.flex-column.ml10.ml32-m.ml32-l > span.f16.f18-ns.f24-m.f24-l.fw6')
          .contains(offer.phone)
        cy.get('#comboSection > div > div > div > div > div > div.Grid.items-end > div:nth-child(1) > div.relative.flex.flex-column.justify-between.h-100.bg-white.flex-row.flex-column-m.flex-column-l.ba.br3.b--very-light-pink.items-center.mb24.pointer.ComboCard-module--cards__HoverEffect--O0z5K > div.w-100.mb24-m.flex.flex-column.items-start.mv10.mv0-m.mv0-l.u-size6of12.u-sm-size6of12.u-md-size9of12.u-lg-size9of12.pl12-ns.pl0-m.pl0-l.br.bn-m.bn-l.b--very-light-pink > div:nth-child(3) > div > div.flex.flex-column.ml10.ml32-m.ml32-l > span.f16.f18-ns.f24-m.f24-l.fw6')
          .contains(offer.mobile)
        cy.get('#comboSection > div > div > div > div > div > div.Grid.items-end > div:nth-child(1) > div.relative.flex.flex-column.justify-between.h-100.bg-white.flex-row.flex-column-m.flex-column-l.ba.br3.b--very-light-pink.items-center.mb24.pointer.ComboCard-module--cards__HoverEffect--O0z5K > div.relative.flex.u-size6of12.u-sm-size6of12.u-md-sizeFull.u-md-sizeFull.u-lg-sizeFull.items-center.ph12-m.pt12.pt24-m.pt24-l.ph0-l.flex-column.justify-center.ComboCard-module--lowerBoxHeight--Gd1sy > div > div > div.flex.justify-center > span')
          .contains(offer.real_price)
        cy.get('#comboSection > div > div > div > div > div > div.Grid.items-end > div:nth-child(1) > div.relative.flex.flex-column.justify-between.h-100.bg-white.flex-row.flex-column-m.flex-column-l.ba.br3.b--very-light-pink.items-center.mb24.pointer.ComboCard-module--cards__HoverEffect--O0z5K > div.relative.flex.u-size6of12.u-sm-size6of12.u-md-sizeFull.u-md-sizeFull.u-lg-sizeFull.items-center.ph12-m.pt12.pt24-m.pt24-l.ph0-l.flex-column.justify-center.ComboCard-module--lowerBoxHeight--Gd1sy > div > div > div.flex.justify-center > div.flex.flex-column.self-start > span.fun-green.fw7.f12.f20-m.f20-l.pt4.pt10-m.pt10-l')
          .contains(offer.cents_price)
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