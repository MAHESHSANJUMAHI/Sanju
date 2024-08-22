describe('working with links', () =>{
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    })
    it ('wekipidia links', () =>{
        cy.visit('https://www.wikipedia.org/')
        cy.get('a').should('have.length', 361)
        cy.get('a').contains('Commons').click();
        cy.origin('https://commons.wikimedia.org/wiki/Main_Page', ()=> {
            cy.get()

        })

    })
})