describe('dwonload file', () => {
    it ('sachin img dwonload', () => {
        cy.downloadFile('https://nenow.in/wp-content/uploads/2020/11/Sachin_Tendulkar_AFP.jpg', 'cypress/downloads', 'sachin.jpg')
        cy.readFile('cypress/downloads/sachin.jpg').should('exist')
    })

    it ('IAS Syllabus dwonload', () => {
        cy.downloadFile('https://vajiramandravi-test.s3.us-east-1.amazonaws.com/media/2023/6/15/11/41/5/UPSC_CSE_Prelims_Syllabus.pdf', 'cypress/downloads', 'IAS.pdf')
        cy.readFile('cypress/downloads/IAS.pdf').should('exist')
    })

    it.only ('sachin img dwonload', () => {
        // let r = (Math.random() + 1).toString(36).substring(7);
        let f = (Math.random() + 2).toString(35).substring(6)
        cy.downloadFile('https://cdn.siasat.com/wp-content/uploads/2023/04/Sachin-Tendulkar-2.jpg', 'cypress/downloads', 'image'+f+'sachin.jpg')
        cy.readFile('cypress/downloads/image'+f+'sachin.jpg').should('exist')
    })
})