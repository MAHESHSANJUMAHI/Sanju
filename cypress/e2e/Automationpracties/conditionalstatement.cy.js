describe('if and else condition statement', () => {

    beforeEach(() => {
        cy.visit('https://wikipedia.org')
        cy.title().should('eq', 'Wikipedia')
    })
    it('check the element and delete the element', () => {
        cy.title().should('eq', 'Wikipedia')
        cy.get('body').then(($body) => {
            if ($body.find('span[data-jsl10n="wikivoyage.name"]').length > 0) {
                cy.get('span[data-jsl10n="wikivoyage.name"]').click()
                cy.origin('https://www.wikivoyage.org/', () => {
                    cy.title().should('eq', 'Wikivoyage')
                })


            } else {
                cy.get('span[data-jsl10n="wikivoyage.name"]').click()
                cy.origin('https://www.wikivoyage.org/', () => {
                    cy.title().should('eq', 'Wikivoyage')
                })

            }
        })
    })
})