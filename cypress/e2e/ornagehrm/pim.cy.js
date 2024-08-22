
const url="https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList"
var url1="https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
let arr1=["Admin", "admin123"]

describe ("lunching the application", () => {
    it ("PIM", () => {
        cy.visit(url1)
        cy.get('input[name="username"]').type(arr1[0])
        cy.get('input[name="password"]').type(arr1[1])
        cy.get('button[type="submit"]').click()
        cy.contains('My Actions').should("be.visible")
        // cy.get('a[class="oxd-main-menu-item active"]').click()
        cy.get().click()
        cy.contains('Add Employee').click()
        cy.get('input[name="firstName"]').type()

        

    })
})