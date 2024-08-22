describe('verify the check box', () =>{
    it ('checkbox', () =>{
        // cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
        // cy.get('input[name="username"]').type('Admin')
        // cy.get('input[name="password"]').type('admin123')
        // cy.get('button[type="submit"]').click()
        // cy.contains('Dashboard').should('be.visible')
        // cy.contains('PIM').click()
        cy.login('Admin','admin123')
        cy.get('i[class="oxd-icon bi-check oxd-checkbox-input-icon"]').click({force:true}).should('exist')
    })
})