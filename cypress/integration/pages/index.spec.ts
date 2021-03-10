/// <reference types="cypress" />

context('Deploy', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('should click on the Deploy section in the homepage', () => {
    cy.get('h1').contains(/welcome to cna/i)
  })
})
