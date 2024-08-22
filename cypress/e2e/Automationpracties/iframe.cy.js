describe('Automation - Working With Iframe', function () {
// it will not work because it is their inside the iframe
    it('Cypress Test Case - Understanding Iframe and how to work with Iframe', function () {
  
      cy.visit('https://jqueryui.com/checkboxradio/');

      cy.get('label[for="radio-1"]').click()

     
    })
// it will work because finding element for iframe node then finding the particular element
    it.only('Cypress Test Case - Understanding Iframe and how to work with Iframe', function () {
  
        cy.visit('https://jqueryui.com/checkboxradio/');
  
        cy.get('iframe[class="demo-frame"]').then(($iframe) =>{
            let radio = $iframe.contents().find('label[for="radio-2"]')
            cy.wrap(radio).click()
        })
    cy.contains('Blog').click()
       
      })
})