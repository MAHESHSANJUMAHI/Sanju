describe("verfify dropdwon functionality", () => {
    it.only("dropdwon through text", () => {
        Cypress.on("uncaught:exception", () => {

           return false;
         });
       cy.visit("https://testautomationpractice.blogspot.com/")
        cy.wait(7000)
        cy.get('#frame-one796456169').then(($iframe) =>{

           let radio1 = $iframe.contents().find("select[name='RESULT_RadioButton-3']")
 
           cy.wrap(radio1).click().select("Automation Engineer").should("have.value", "Radio-1")
        })
        
   })

    it ("dropdwon through value", () => {
        Cypress.on("uncaught:exception", () => {

            return false;
          });
        cy.visit("https://testautomationpractice.blogspot.com/")
        
    })
    
})
