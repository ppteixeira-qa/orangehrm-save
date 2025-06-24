class MyInfoPage {

    selectorsList() {
        const selectors = {
              myInfoButton: "[href='/web/index.php/pim/viewMyDetails']",
              firstNameField: "[name='firstName']",
              middleNameField: "[name='middleName']",
              lastNameField: "[name='lastName']",
              genericField: ".oxd-input--active",
              birthdayField: "[placeholder='yyyy-dd-mm']",
              genericComboBox: ".oxd-select-text--arrow",
              genderField: ".--gender-grouped-field",
              submitButton: ".--close",
        }

        return selectors
    }

    accessMyInfo() {
        cy.get(this.selectorsList().myInfoButton).click()
    }

    fillProfile(firstName, middleName, lastName, employeeId, otherId, driversLicense) {
        cy.get(this.selectorsList().firstNameField).clear().type(firstName)
        cy.get(this.selectorsList().middleNameField).clear().type(middleName)
        cy.get(this.selectorsList().lastNameField).clear().type(lastName)
        cy.get(this.selectorsList().genericField).eq(3).clear().type(employeeId)
        cy.get(this.selectorsList().genericField).eq(4).clear().type(otherId)
        cy.get(this.selectorsList().genericField).eq(5).clear().type(driversLicense)
        cy.get(this.selectorsList().genericComboBox).eq(0).click()
        cy.contains('Japanese').scrollIntoView().click()
        cy.get(this.selectorsList().genericComboBox).eq(1).click()
        cy.contains('Single').scrollIntoView().click()
        cy.get(this.selectorsList().genderField).contains('Female').click()
    }

    fillDates(expiryDriverLicense,birthdayDate) {    
        cy.get(this.selectorsList().genericField).eq(7).clear().type(expiryDriverLicense)
        cy.get(this.selectorsList().submitButton).eq(0).click()
        cy.get(this.selectorsList().birthdayField).eq(1).clear().type(birthdayDate)
        cy.get(this.selectorsList().submitButton).click()       
    }

    saveForm() {
        cy.get('.orangehrm-left-space').eq(0).click()
        cy.contains('Successfully Updated')
    }

}

export default MyInfoPage