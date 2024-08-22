describe('Automation - Working with Shadowroot elements 2', function () {

    it('Cypress Test Case - Shadow', function () {
  
      Cypress.on("uncaught:exception", function () {
    
        return false;
      });
  
      cy.visit('http://watir.com/examples/shadow_dom.html');
      cy.get('#shadow_host').shadow().find('input[type="checkbox"]').check().should('be.checked')
      cy.get('#shadow_host').shadow().find('input[type="text"]').type('bdhjgryfha')
    })

    it.only("new site for Shadow example", ()=>{


      cy.visit('https://www.htmlelements.com/demos/menu/shadow-dom/index.htm')
  
      //cy.get('').click()
  
      cy.get('.smart-ui-component').shadow().find('smart-menu-items-group[label="File"]').realClick()
      // cy.get('.smart-ui-component').shadow().find('smart-menu-items-group[label="Edit"]').realClick()
     
  
  })
  it.only("new site for Shadow example", ()=>{


    cy.visit('https://www.htmlelements.com/demos/menu/shadow-dom/index.htm')

    //cy.get('').click()

    // cy.get('.smart-ui-component').shadow().find('smart-menu-items-group[label="File"]').realClick()
    cy.get('.smart-ui-component').shadow().find('smart-menu-items-group[label="Edit"]').realClick()
   

})
})