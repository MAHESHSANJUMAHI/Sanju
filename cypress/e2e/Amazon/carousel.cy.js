describe('Stop Amazon Carousel on Specific Image', () => {
    it('Should stop the carousel when specific image appears', () => {
        cy.visit('https://www.amazon.in/')

        cy.get("#anonCarousel1>ol>li").each((attr) => {

            attr.its("alt").then(text => {


                if (text == "Great Indian Festival") {

                    cy.log("required image displayed")
                }
                else {

                    cy.get('a[class="a-carousel-goto-nextpage"]').first().click

                }
               cy.log("hdd")
             })

            


        })



        // cy.get("#anonCarousel1>ol>li").each((attr) => {

        //     attr.its('alt').then((text) => {


        //         if (text == "Great Indian Festival") {

        //             cy.log("required image displayed")
        //         }
        //         else {

        //             cy.get('a[class="a-carousel-goto-nextpage"]').first().click

        //         }

        //     })


        // })




    });
});
