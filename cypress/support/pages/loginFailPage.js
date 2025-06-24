class LoginFailPage {

    selectorsList() {
        const selectors = {
             usernameField: "[name='username']",
             passwordField: "[name='password']",
             loginButton: "[type='submit']",
             wrongCredentialAlert: "[role='alert']",
        }

        return selectors
    }

    accessLoginPage() {
        cy.visit('/auth/login')
    }

    loginFailUser(failUsername, failPassword) {
        cy.get(this.selectorsList().usernameField).type(failUsername)
        cy.get(this.selectorsList().passwordField).type(failPassword)
        cy.get(this.selectorsList().loginButton).click()
        cy.get(this.selectorsList().wrongCredentialAlert).contains('Invalid credentials')
    }
}

export default LoginFailPage