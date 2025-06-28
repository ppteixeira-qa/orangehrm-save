import userData from '../fixtures/userData.json'
import loginPage from '../support/pages/loginPage.js'
import dashPage from '../support/pages/dashPage.js'
import MyInfoPage from '../support/pages/myInfoPage.js'
import LoginFailPage from '../support/pages/loginFailPage.js'

const LoginPage = new loginPage()
const DashPage = new dashPage()
const myInfoPage = new MyInfoPage()
const loginFailPage = new LoginFailPage()


describe('Orange HRM Tests', () => {

  it('Valid Login', () => {
    LoginPage.accessLoginPage()
    LoginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)

    DashPage.checkDashboardPage()

    myInfoPage.accessMyInfo()
    myInfoPage.fillProfile('Women', 'In', 'Tech', '12345', '02', '2022-08-30')
    myInfoPage.fillDates('2010-10-15','1995-06-16')
    myInfoPage.saveForm()
   })

  it('Login Fail', () => {
    loginFailPage.accessLoginPage()
    loginFailPage.loginFailUser('AdMIN', "321admin")
  })

})