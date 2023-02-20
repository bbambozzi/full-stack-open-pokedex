describe('Pokedex', function() {
  it('front page can be opened', function() {
    cy.visit('http://localhost:5050')
    cy.contains('ivysaur')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })
  it('single card can be accessed correctly', () => {
    cy.visit('http://localhost:5050')
    cy.contains('pikachu').click()
    cy.contains('lightning rod')
    cy.contains('Next')
  })
})
