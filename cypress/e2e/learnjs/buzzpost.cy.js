import data from "../../fixtures/logindata.json"
import buzzdata from "../../fixtures/buzzdata.json"
describe('Verify user can post some thing in the Buzz', () => {

    const creds = ["Admin", "admin123"]

    it('Text message post', () => {
    
        cy.visit("/web/index.php/auth/login")

        cy.log("User launched application" + data.username)

        //cy.wait(10000)
        cy.get('input[name="username"]').type(creds[0])

       // cy.wait(7000)

        cy.log("User typed username as "+ Cypress.env("username"))

        cy.get('input[placeholder="Password"]').type(creds[1])

        cy.log("User typed password")

        cy.get('button[type="submit"]').click()
      
        cy.contains('Dashboard').should("be.visible")

        cy.contains('Buzz').click()

        cy.contains('Buzz Newsfeed').should("be.visible")

        cy.get(`textarea[placeholder="What's on your mind?"]`).type(buzzdata.post)

        cy.get('button[type="submit"]').click()

        cy.contains('Successfully Saved').should("be.visible")

    })


  })