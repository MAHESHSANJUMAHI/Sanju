describe('write file ', () => {
    it('example with write text file', () => {
        cy.writeFile('cypress/fixtures/module1/text.tet', 'Mahesh Kumar\n')
        cy.writeFile('cypress/fixtures/module1/text.tet', 'sanju', { flag: 'a+' })
    })

    it('example with write json file', () => {
        cy.writeFile('cypress/fixtures/module1/user.json', { 'firstName': 'Mahesh', 'lastName': 'Kumar' },)
        cy.writeFile('cypress/fixtures/module1/user.json', [{ 'firstName': 'sanju', 'lastName': 'anu' }, { 'age': 25, 'gender': 'Male' }])

    })

    it('read and write file', () => {
        cy.visit('/')
        cy.get('p[class="oxd-text oxd-text--p"]').first().then((txt) => {
            var username = txt.text()

            cy.writeFile('cypress/fixtures/module1/username&password.txt', username+'\n')
        })
        cy.get('p[class="oxd-text oxd-text--p"]').last().then((txt) => {
            var password = txt.text()

            cy.writeFile('cypress/fixtures/module1/username&password.txt', password, {flag:'a'})
        })

    })

    
})

describe('read file', () => {
    it('read the text and json files', () => {
        cy.readFile('cypress/fixtures/module1/user1.json').its('firstName').should('eq', 'sanju')
        cy.readFile('cypress/fixtures/module1/user1.json').its('lastName').should('include', 'u')
        cy.readFile('cypress/fixtures/module1/user1.json').should('exist')
        cy.readFile('cypress/fixtures/module1/text.tet').should('contain', 'Mahesh Kumar')
        cy.readFile('cypress/fixtures/module1/text.tet').should('contain', 'sanju')
    })
})

