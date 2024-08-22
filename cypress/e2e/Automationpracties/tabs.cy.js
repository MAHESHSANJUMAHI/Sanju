describe('Tabs', () => {
it('Tabs', () => {

    Cypress.on('uncaught:exception', (err, runnable) => {

      return false
    })

    cy.visit('https://www.cypress.io/')

    cy.get('a[href="https://on.cypress.io/installing-cypress"]').first().invoke("removeAttr", "target").click({force:true})

    cy.url().should("eq", "https://docs.cypress.io/guides/getting-started/installing-cypress")

    cy.url().should("include", "getting-started/installing-cypress")

    cy.go(-1)

    cy.wait(5000)
    cy.go(1 )

    cy.wait(5000)

    cy.reload()
    
      
  })

})



// example
// describe('Tabs --2', () => {
//     it ('How to handle multipule tabs in cypress', () => {
//         Cypress.on('uncaught:exception', (err, runnable) => {

//             return false
//           })
//         cy.visit('https://testautomationpractice.blogspot.com/')
//         cy.get('#Wikipedia1_wikipedia-search-input').type('Mahesh{enter}')
//         cy.contains('Mahesh').invoke('removeAttr', 'target').realClick({force:true})
//         cy.url().should('eq', 'https://en.wikipedia.org/wiki/Mahesh')
        
//         cy.url().should('include', '/Mahesh')
//         cy.contains('https://en.wikipedia.org/wiki/Mahesh').should('be.visible')
//     //     cy.origin('https://en.wikipedia.org/wiki/Mahesh', () => {
//     //         cy.url().should('include', '/Mahesh')
//     //         // Add more commands targeting (link unavailable) here
//     // })
// })
// })


describe('tabs --3', () => {
    it ('verify tabs', () => {
        cy.visit('https://www.cypress.io/')
        cy.get('')
    })
})