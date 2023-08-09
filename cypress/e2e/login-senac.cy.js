describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.sp.senac.br/')

    cy.get('.mburger').click()
    cy.get('#txtLoginNaoLogadoMob').click()
    cy.get('#login-email').type('jesus@gmail.com')
    cy.get('#login-password').type('jesus#e#foda')    
    cy.get('#btnLoginHeader').click() 
  
  })
})
