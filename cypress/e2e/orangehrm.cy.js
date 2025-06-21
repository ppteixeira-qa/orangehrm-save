import userData from '../fixtures/userData.json'

describe('Orange HRM Tests', () => {

  const selectorsList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: "[type='submit']",
    dashboardGrid: ".orangehrm-dashboard-grid",
    wrongCredentialAlert: "[role='alert']"
  }

  it.only('Valid Login', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userSuccess.username)
    cy.get(selectorsList.passwordField).type(userData.userSuccess.password)
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorsList.dashboardGrid)
    
  //   cy.get(':nth-child(8) > .oxd-main-menu-item > .oxd-text').click()
  //   cy.get(':nth-child(6) > .oxd-main-menu-item > .oxd-text').click()
  //   cy.get('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input').clear().type('FirstNameTest')
  //   cy.get(':nth-child(2) > :nth-child(2) > .oxd-input').clear().type('MiddleNameTest')
  //   cy.get(':nth-child(3) > :nth-child(2) > .oxd-input').clear().type('LastNameTest')
  //   cy.get(':nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('E001Test')
  //   cy.get(':nth-child(3) > :nth-child(1) > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('12Test')
  //   cy.get(':nth-child(2) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('19062025')
  //   cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-icon').click()
  //   cy.get('.oxd-calendar-selector-year-selected > .oxd-icon').click()
  //   cy.contains('2024').scrollIntoView().click()
  //   cy.get('.oxd-calendar-selector-month-selected > .oxd-icon').click()
  //   cy.contains('August').scrollIntoView().click()
  //   cy.get(':nth-child(28) > .oxd-calendar-date').click()
  //   cy.get('.--close').click()
  //   cy.get(':nth-child(5) > :nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click()
  //   cy.contains('Portuguese').scrollIntoView().click()
  //   cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click()
  //   cy.get(':nth-child(4) > span').click()
  //   cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input').click()
  //   cy.get('.oxd-calendar-selector-year-selected > .oxd-text').click()
  //   cy.contains('2000').scrollIntoView().click()
  //   cy.get('.oxd-calendar-selector-month-selected > .oxd-text').click()
  //   cy.contains('April').scrollIntoView().click()
  //   cy.get(':nth-child(9) > .oxd-calendar-date').click()
  //   cy.get('.--close').click()
  //   cy.get(':nth-child(2) > :nth-child(2) > .oxd-radio-wrapper > label > .oxd-radio-input').click()
  //   cy.get(':nth-child(1) > .oxd-form > .oxd-form-actions > .oxd-button').click()
  //   cy.get('.oxd-text--toast-message').contains('Successfully Updated')
  })
    it('Login Fail', () => {
       cy.visit('/auth/login')
       cy.get(selectorsList.usernameField).type(userData.userFail.username)
       cy.get(selectorsList.passwordField).type(userData.userFail.password)
       cy.get(selectorsList.loginButton).click()
       cy.get(selectorsList.wrongCredentialAlert).contains('Invalid credentials')
  })
})