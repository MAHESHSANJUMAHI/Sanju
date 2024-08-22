describe('Automation - Working With Drag and Drop', function () {

    it('Cypress Test Case - Understanding Drag and Drop', function () {

        Cypress.on("uncaught:exception", () => {

            return false;
        }); 


        //first apporuch using drag and drop plugin
        cy.visit('https://kitchen.applitools.com/ingredients/drag-and-drop');

        cy.wait(5000)
        cy.get('li[data-id="fried-chicken"]').drag('#plate-items')
        cy.get('#menu-ice-cream').drag('#plate-items')


    })
    it.only('Cypress Test Case - Understanding Drag and Drop', function () {

        Cypress.on("uncaught:exception", () => {

            return false;
        });

        cy.visit('https://kitchen.applitools.com/ingredients/drag-and-drop');

        //second apporuch using javascript datatransfer
        const dataTransfer = new DataTransfer();

        cy.get('#menu-fried-chicken').trigger('dragstart', {

            dataTransfer
        })

        cy.get('#plate-items').trigger('drop', {

            dataTransfer
        })

        cy.get('#menu-hamburger').trigger('dragstart', {

            dataTransfer
        })

        cy.get('#plate-items').trigger('drop', {

            dataTransfer
        }) 
 
        cy.get('#menu-ice-cream').trigger('dragstart', {

            dataTransfer
        })  

        cy.get('#plate-items').trigger('drop', {

            dataTransfer
        })

 
    })



})
