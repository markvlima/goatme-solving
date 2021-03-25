// Este script verifica a existência do menu Celular para as cidades requisitadas.
// @author: Marcos Lima

describe('Conversor', function () {
	let lines = [{
		cidade: 'Uberlândia',
		estado: 'MG'
	}] 

    for(var i = 0; i < lines.length; i++) {
		const line = lines[i];
		checking(line)	
	}
	
	beforeEach(() => {
		cy.viewport(1440, 1300)
        cy.visit('https://www.algartelecom.com.br/empresas')
	})

	function checking(line) {
		let message = line.cidade+' - '+line.estado
		let temp

		it(message, function () {
			cy.wait(3000)
			
			cy.toJson('./cypress/fixtures/localidades-menu-celular.csv')
			cy.readFile('./cypress/fixtures/temp/temp.json').then((json) => {
				temp = json
				console.log('temp json: ', temp)
			})
			
			cy.toCSV('./cypress/fixtures/temp/temp.json')
			cy.readFile('./cypress/fixtures/temp/temp.json').then((csv) => {
				console.log('var csv', csv)
				temp = csv
				console.log('temp.csv: ', temp)
			})	
			//cy.clearTemp()
		})
	}
})