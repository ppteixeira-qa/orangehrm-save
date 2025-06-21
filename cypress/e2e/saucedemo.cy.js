describe('template spec', () => {
  it('Login Válido', () => {
    cy.visit('https://www.saucedemo.com/v1/index.html')
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('#login-button').click()
    cy.get('.product_label').contains('Products')
  })

  it('Login Inválido', () => {
    cy.visit('https://www.saucedemo.com/v1/index.html')
    cy.get('[data-test="username"]').type('ppt_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('#login-button').click()
    cy.get('[data-test="error"]').contains('Epic sadface: Username and password do not match any user in this service')
  })
})