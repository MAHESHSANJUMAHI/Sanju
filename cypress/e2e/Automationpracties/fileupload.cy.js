describe('File upload', () => {
    it('file upload verification', () => {
        cy.visit('https://cgi-lib.berkeley.edu/ex/fup.html')
        cy.get('input[name="upfile"]').attachFile('B22 Automation classes notes  (1).txt')
        cy.get('input[type="submit"]').click()
        cy.contains("The file's contents are:").should("be.visible")
    })

    describe('Automation - File Upload Example', function () {

        it('Cypress Test Case - Understanding upload file- Attachfile', function () {
      
          cy.visit('https://cgi-lib.berkeley.edu/ex/fup.html');
    
         cy.get('input[name="upfile"]').selectFile('E:/cyautomationb22/cypress/fixtures/B22 Automation classes notes  (1).txt');
          
          cy.wait(3000)
          cy.xpath('//input[@type="submit"]').click();
        
          cy.contains("The file's contents are:").should("be.visible")
        })
})

})