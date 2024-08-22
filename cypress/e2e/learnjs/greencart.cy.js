var url1="https://rahulshettyacademy.com/seleniumPractise/#/"

describe ("Lunching the url", () => {
    it ("verfing the product price", () => {
        cy.visit(url1)
        cy.get('#root > div > div.products-wrapper > div > div:nth-child(1) > div.product-action > button').click()
        cy.get('#root > div > div.products-wrapper > div > div:nth-child(2) > div.product-action > button').click()
        cy.get('img[alt="Cart"]').click()
        cy.contains('PROCEED TO CHECKOUT').click()
        // cy.get('#root > div > div > div > div > button').click()
        // cy.get('select[style="width: 200px;"]').select([1])
        // cy.get('option[value="Afghanistan"]').click()
        // cy.get('input[class="chkAgree"]').click()
        // cy.contains('Proceed').click()
        
        
        
        cy.get('#root > div > div > div > div > span.discountAmt').invoke('text').then((text) => {
            expect(text).to.equal('180')
          })
    })

})
