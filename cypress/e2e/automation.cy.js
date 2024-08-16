// describe ('verify automation for chechbox',() =>{
//     it('checkbox', () =>{
//         cy.visit('https://testautomationpractice.blogspot.com/')
//         cy.get('#sunday').check().should('be.checked')
//         cy.get('#sunday').uncheck().should('not.be.checked')
//         cy.get('#male').check().should('be.checked')
//         cy.get('#female').check().should('be.checked')
//     })
// })

describe('Checkboxes', () => {
    beforeEach(() => {
      cy.visit('https://form-devs.s3.eu-central-1.amazonaws.com/formulario.html')
    })
  
    it('checks all checkboxes with one command', () => {
  
    //   cy.wait(5000)
  
    //   cy.get('input[type="checkbox"]').check()
    //   cy.wait(5000)
  
    //   cy.get('input[type="checkbox"]').uncheck()
  
    //   cy.wait(5000)
  
    //   cy.get('input[type="checkbox"]').check(["CSS", "PHP"])
  
    //   cy.get("input[type='checkbox']").should("have.length", 7)
  
    //   //adding comment 
    //   cy.get('input[type="checkbox"]').check()
  
    //   cy.wait(5000)
  
    //   cy.get('input[type="checkbox"]').uncheck()
  
    //   //cy.get('#tecnologia6').check()
  
    //   cy.get('input[type="checkbox"]').check(["HTML", "Javascript"])
  
    //   //  cy.wait(5000)
  
    //   //  cy.get('#check input[type="checkbox"]').uncheck(["HTML","Javascript"])
  
    //   cy.get('input[value="fullstack"]').check().should('be.checked')
  
    //   cy.xpath("//input[@type='checkbox']").should("have.length", 7)
  
    //   //adding comment 
    //   cy.get('input[type="checkbox"]').check()
  
    //   cy.wait(5000)
  
    //   cy.get('input[type="checkbox"]').uncheck()
  
    //   //cy.get('#tecnologia6').check()
  
    //   cy.get('input[type="checkbox"]').check(["HTML", "Javascript"])
  
    //   //  cy.wait(5000)
  
    //   //  cy.get('#check input[type="checkbox"]').uncheck(["HTML","Javascript"])
  
    //   cy.get('input[value="fullstack"]').check().should('be.checked')
    cy.get("input[type='checkbox']").check(['HTML','CSS']).should('be.checked').should('be.visible').should('be.exist')
    cy.get("input[type='checkbox']").uncheck(['PHP', 'C#', 'CSS'])
    
  
    })
  })