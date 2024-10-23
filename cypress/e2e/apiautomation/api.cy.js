import data from '../../fixtures/postbody.json'
describe('api automation test example', () => {
    it.only('api realtime example', () =>{

        // cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
        // cy.get('input[name="username"]').type('Admin')
        // cy.get('input[name="password"]').type('admin123')
        // cy.get('button[type="submit"]').click()
        // cy.contains('Dashboard').should('be.visible')
        // cy.contains('PIM').click()
        // cy.request('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees').then((response)=>{
        //     expect(response.status).to.equal(200)
        //     cy.writeFile('cypress/fixtures/getempdata.json', response)
        // })

        cy.request({
            url:'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees',
            method:'GET',
            headers:{

                "Cookie": "orangehrm=a7bf096e103102829903ad15f3a855d9"
            }


        }).then((response)=>{
            cy.writeFile('cypress/fixtures/getempdata2.json', response)
            expect(response.status).to.equal(200)
            // expect(response.body.data[1]).to.have.property("lastName", "444444")
            // expect(response.body.data[0]).to.have.property("lastName", "010Z")
            
            // expect(response.body.data[1].empNumber).to.equal(128)
            // expect(response.body.data[1].lastName).to.equal("444444")
        })

    })

    it('Cypress Test Case -Orange HRM Get Employees', function () {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
        cy.get('input[name="username"]').type('Admin')
        cy.get('input[name="password"]').type('admin123')
        cy.get('button[type="submit"]').click()
        cy.contains('Dashboard').should('be.visible')
        cy.contains('PIM').click()

        cy.request({

            url: "/web/index.php/api/v2/pim/employees?limit=50&offset=0&model=detailed&includeEmployees=onlyCurrent&sortField=employee.firstName&sortOrder=ASC",
            method: "GET",
            headers:{

                "Cookie":"orangehrm=6d15a6e3552583e6c4aed60f25819695"
            }

        }).then((response)=>{

          expect(response.status).to.equal(200)
          cy.writeFile("cypress/fixtures/getresponseorangeHRM.json", response)

        })

    })

    it('Cypress Test Case -Orange HRM Get Employees', function () {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
        cy.get('input[name="username"]').type('Admin')
        cy.get('input[name="password"]').type('admin123')
        cy.get('button[type="submit"]').click()
        cy.contains('Dashboard').should('be.visible')
        cy.contains('PIM').click()

        cy.request({

            url: "/web/index.php/api/v2/pim/employees?limit=50&offset=0&model=detailed&includeEmployees=onlyCurrent&sortField=employee.firstName&sortOrder=ASC",
            method: "POST",
            headers:{

                "Cookie": "orangehrm=6d15a6e3552583e6c4aed60f25819695"
            },
            body: data

        }).then((response)=>{

          expect(response.status).to.equal(200)
          cy.writeFile("cypress/fixtures/postresponseorangeHRM.json", response)

        })

    })
})