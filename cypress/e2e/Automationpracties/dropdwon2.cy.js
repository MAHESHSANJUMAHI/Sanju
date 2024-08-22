describe('verify dropdwon redif', () => {
    it('dropdwon 1 text', () => {
        Cypress.on('uncaught:exception', (err, runnable) => {

            return false
          })
        cy.visit('https://register.rediff.com/register/register.php?FormName=user_details')
        cy.get('select[name*="DOB_Day"]').select('01').should('have.value', '01')
        cy.get('select[name^="DOB_Month"]').select('JAN').should('have.value', '01')
        cy.get('select[name^="DOB_Year"]').select('2024').should('have.value', '2024')
        cy.get('select[name^="DOB_Year"]>option').its('length').then((len) => {
            cy.log(len)
        })
        cy.get('select[name^="DOB_Year"]>option').each((text) => {
            var dropdwonvalue = text.text()
            cy.log(dropdwonvalue)
        })
    })

    it('dropdwon 1 with value', () => {
        cy.visit('https://register.rediff.com/register/register.php?FormName=user_details')
        cy.get('select[name*="DOB_Day"]').select(5).should('have.value', '05')
        cy.get('select[name^="DOB_Month"]').select(2).should('have.value', '02')
        cy.get('select[name^="DOB_Year"]').select(2).should('have.value', '2023')
    })

    it.only ('using, each and finding the text and length', () => {
        cy.visit('https://register.rediff.com/register/register.php?FormName=user_details')
        cy.get('select[name*="DOB_Day"]>option').each((text) => {
            var dropdwontext = text.text()
            cy.log(dropdwontext)
        })
        cy.get('select[name^="DOB_Month"]>option').its('length').then((len) => {
            var lenOfMonth = len
            cy.log(lenOfMonth)
        })
        cy.get('select[name^="DOB_Year"]').select('2024').should('have.value', '2024')
        

    }) 

    
})