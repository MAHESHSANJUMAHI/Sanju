describe('Session', () => {
    beforeEach(() => {
        cy.session('login session', () => {
            cy.visit('/')
            cy.get('input[name="username"]').type('Admin')
            cy.get('input[name="password"]').type('admin123{enter}')
            cy.contains("Dashboard").should('be.visible')
        })
    })
    it ('', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers')
        cy.get('body').then((body) => {
            if(body.find('i[class="oxd-icon bi-trash"]').length>0){
                cy.get('i[class="oxd-icon bi-trash"]').click({force:true})

            }else{

            }
        })
    })
})