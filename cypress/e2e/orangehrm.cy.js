import userData from '../fixtures/userData.json'

describe('Orange HRM Tests', () => {

  const selectorsList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: "[type='submit']",
    dashboardGrid: ".orangehrm-dashboard-grid",
    wrongCredentialAlert: "[role='alert']",
    myInfoButton: "[href='/web/index.php/pim/viewMyDetails']",
    firstNameField: "[name='firstName']",
    middleNameField: "[name='middleName']",
    lastNameField: "[name='lastName']",
    genericField: ".oxd-input--active",
    genericYearField: ".oxd-calendar-selector-year-selected", 
    genericMonthField: ".oxd-calendar-selector-month-selected", 
    genericComboBox: ".oxd-select-text--arrow",
    dateBirthField: "[placeholder='yyyy-dd-mm']",
    genderField: ".--gender-grouped-field",
    submitButton: ".--close",

  }

  it.only('Valid Login', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userSuccess.username)
    cy.get(selectorsList.passwordField).type(userData.userSuccess.password)
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorsList.dashboardGrid)
    cy.get(selectorsList.myInfoButton).click()
    cy.get(selectorsList.firstNameField).clear().type('Nameteste')
    cy.get(selectorsList.middleNameField).clear().type('Middleteste')
    cy.get(selectorsList.lastNameField).clear().type('Lastteste')
    cy.get(selectorsList.genericField).eq(3).clear().type('11111')
    cy.get(selectorsList.genericField).eq(4).clear().type('1')
    cy.get(selectorsList.genericField).eq(5).clear().type('23456')
    cy.get(selectorsList.genericField).eq(6).click()
    cy.get(selectorsList.genericYearField).click()
    cy.contains('2024').scrollIntoView().click()
    cy.get(selectorsList.genericMonthField).click()
    cy.contains('August').scrollIntoView().click()
    cy.get(':nth-child(28) > .oxd-calendar-date').click()
    cy.get(selectorsList.submitButton).eq(0).click()
    cy.get(selectorsList.genericComboBox).eq(0).click()
    cy.contains('Japanese').scrollIntoView().click()
    cy.get(selectorsList.genericComboBox).eq(1).click()
    cy.contains('Single').scrollIntoView().click()
    cy.get(selectorsList.dateBirthField).eq(1).clear().type('1999-09-30')
    cy.get(selectorsList.submitButton).eq(0).click()
    cy.get(selectorsList.genderField).contains('Female').click()
    cy.get('.orangehrm-left-space').eq(0).click()
    cy.contains('Successfully Updated')
  })
    it('Login Fail', () => {
       cy.visit('/auth/login')
       cy.get(selectorsList.usernameField).type(userData.userFail.username)
       cy.get(selectorsList.passwordField).type(userData.userFail.password)
       cy.get(selectorsList.loginButton).click()
       cy.get(selectorsList.wrongCredentialAlert).contains('Invalid credentials')
  })
})