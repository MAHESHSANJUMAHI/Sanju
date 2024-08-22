// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import "cypress-real-events";  
        
import 'cypress-file-upload';   
require('@4tw/cypress-drag-drop')

require('cypress-downloadfile/lib/downloadFileCommand')             

Cypress.Commands.add('login', (username,password) => {
  cy.visit('/')
  cy.get('input[name="username"]').type(username)
  cy.get('input[name="password"]').type(password+"{enter}")
  cy.contains("Dashboard").should('be.visible')

})

Cypress.Commands.add('addEmployee', (value1, value2) => {

  cy.contains('PIM').click()

  cy.contains('Add Employee').click()

  cy.get('input[name="firstName"]').type(value1)

  cy.get('input[name="lastName"]').type(value2)

  cy.get('button[type="submit"]').click()

  cy.contains('Successfully Saved').should("be.visible")

})