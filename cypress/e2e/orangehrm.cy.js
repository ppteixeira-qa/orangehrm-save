import userData from '../fixtures/userData.json'
import loginPage from '../support/pages/loginPage.js'
import dashPage from '../support/pages/dashPage.js'
import MyInfoPage from '../support/pages/myInfoPage.js'

const LoginPage = new loginPage()
const DashPage = new dashPage()
const myInfoPage = new MyInfoPage()


describe('Orange HRM Tests', () => {

  it.only('Valid Login', () => {
    LoginPage.accessLoginPage()
    LoginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)

    DashPage.checkDashboardPage()

    myInfoPage.accessMyInfo()
    myInfoPage.fillProfile()
      
//Aula My Info 14:35 - colocar os nomes nos parenteses do pages myinfopage
 
   })
  //   it('Login Fail', () => {
  //      cy.visit('/auth/login')
  //      cy.get(selectorsList.usernameField).type(userData.userFail.username)
  //      cy.get(selectorsList.passwordField).type(userData.userFail.password)
  //      cy.get(selectorsList.loginButton).click()
  //      cy.get(selectorsList.wrongCredentialAlert).contains('Invalid credentials')

})