describe('Trello Board Test', () => {
    beforeEach(() => {
      // Login to Trello
      cy.visit('https://trello.com/')
      cy.get('[name="user"]').type('maheshsanju1190@gmail.com')
      cy.get('[name="password"]').type('Sanju1190@')
      cy.get('[type="submit"]').click()
    })
  
    it('Create board, lists, and move card', () => {
      // Create a new board
      cy.get('[data-test-id="create-board-button"]').click()
      cy.get('[data-test-id="board-name-input"]').type('New Board')
      cy.get('[data-test-id="create-board-submit"]').click()
  
      // Create lists
      cy.get('[data-test-id="add-list-button"]').click()
      cy.get('[data-test-id="list-name-input"]').type('List A')
      cy.get('[data-test-id="add-list-submit"]').click()
      cy.get('[data-test-id="add-list-button"]').click()
      cy.get('[data-test-id="list-name-input"]').type('List B')
      cy.get('[data-test-id="add-list-submit"]').click()
  
      // Add a card to List A
      cy.get('[data-test-id="add-card-button"]').first().click()
      cy.get('[data-test-id="card-name-input"]').type('Card 1')
      cy.get('[data-test-id="add-card-submit"]').click()
  
      // Drag and drop the card to List B
      const dataTransfer = new DataTransfer()
      cy.get('[data-test-id="card-1"]').trigger('dragstart', {
        dataTransfer
      })
      cy.get('[data-test-id="list-b"]').trigger('drop', {
        dataTransfer
      })
  
      // Get the x and y coordinates of the moved card
      cy.get('[data-test-id="card-1"]').then(($card) => {
        const rect = $card[0].getBoundingClientRect()
        const x = rect.left
        const y = rect.top
        cy.log(`Card coordinates: x=${x}, y=${y}`)
      })
    })
  
    // afterEach(() => {
    //   // Logout
    //   cy.get('[data-test-id="logout"]').click()
    // })
  })