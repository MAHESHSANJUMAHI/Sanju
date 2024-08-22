import login1 from "../../pages/loginpageHrm.po"
import logindata from "../../fixtures/logindata.json"




describe('verify login functionality', () => {

    beforeEach('lunch the application',() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.xpath(login1.logoHrm()).click()

    })
    it('verfify with valid creds', () => {
        
        login1.logincreads(logindata.username,logindata.password)

    })

    it('verfify with invalid username and valid password', () => {
        
        login1.logincreads(logindata.wronmgusername,logindata.password)
        cy.contains(login1.errormessage).should('be.visible')

    })

    it('verfify with valid username and invalid password', () => {
        
        login1.logincreads(logindata.username,logindata.wrongpassword)
        cy.contains(login1.errormessage).should('be.visible')

    })

    it('verfify with invalid username and invalid password', () => {
        
        login1.logincreads(logindata.wronmgusername,logindata.wrongpassword)
        cy.contains(login1.errormessage).should('be.visible')

    })

    it('without passing the username and password', () => {
        
        
        cy.xpath(login1.loginBtn()).click()
        cy.contains(login1.errormessageuserandpasswordfields).should('be.visible')

    })
    it.only ('verfify linkdien', () => {
        cy.xpath(login1.linkdinlIcon()).click()
    })

    // describe.only("verify icons", () => {
    //     beforeEach('lunch the application',() => {
    //         cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    //         cy.xpath(login1.logoHrm()).click()
    
    //     })
    //     it ('verfify linkdien', () => {
    //         cy.xpath(login1.linkdinlIcon()).click()
    //     })
    // })
})