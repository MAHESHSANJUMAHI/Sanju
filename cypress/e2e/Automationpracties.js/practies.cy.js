describe('alert vrification', () => {
    it('simple alert', () => {
        cy.visit('https://testautomationpractice.blogspot.com/')
        cy.get('button[onclick="myFunctionAlert()"]').click()
        cy.on('window:alert', (alert) => {
            expect(alert).to.equal('I am an alert box!')
            // cy.wait(5000)
            return true
        })

    })
    it('confirm alert', () => {
        cy.visit('https://testautomationpractice.blogspot.com/')
        cy.get('button[onclick="myFunctionConfirm()"]').click()
        cy.on('window:confirm', (alert) => {
            expect(alert).to.equal('Press a button!')

            // cy.wait(5000)
            return false
        })
    })

    it.only('prompt alert ok', () => {
        cy.visit('https://testautomationpractice.blogspot.com/')

        cy.window().then((mahesh) => {
            cy.stub(mahesh, 'prompt').returns("MAHESH")
            cy.get('button[onclick="myFunctionPrompt()"]').click()
            


        })

    })

    it.only('prompt alert cancle', () => {
        cy.visit('https://testautomationpractice.blogspot.com/')

        cy.window().then((mahesh) => {

            cy.stub(mahesh, 'prompt').callsFake(() => null)
            cy.get('button[onclick="myFunctionPrompt()"]').click()
        })

    })
})