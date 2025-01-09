import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given('User Launch the Application', () => {
    cy.visit('/')
})

When('User enter username as {string} password as {string}', (username, password) => {
    cy.get('input[name="username"]').type(username)
    cy.get('input[name="password"]').type(password)
})

And('User clicks on login Button', () => {
    cy.get('button[type="submit"]').click()
})

Then('User should be navigated to Dashbaord page', () => {
    cy.url().should("eq", "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
    //or
    cy.url().should("include", "web/index.php/dashboard/index")
})

Then(' User should get login error message ', () => {
    cy.contains('Invalid credentials').should('be.visible')
})


