class MyInfoPage {

    selectorsList() {
        const selectors = {
              myInfoButton: "[href='/web/index.php/pim/viewMyDetails']",
              firstNameField: "[name='firstName']",
              middleNameField: "[name='middleName']",
              lastNameField: "[name='lastName']",
              genericField: ".oxd-input--active",
              genericYearField: ".oxd-calendar-selector-year-selected", 
              genericMonthField: ".oxd-calendar-selector-month-selected", 
              genericComboBox: ".oxd-select-text--arrow",
              dateBirthField: "[placeholder='yyyy-mm-dd']",
              genderField: ".--gender-grouped-field",
              submitButton: ".--close",
        }

        return selectors
    }

    accessMyInfo() {
        cy.get(this.selectorsList().myInfoButton).click()
    }

    fillProfile() {
        cy.get(this.selectorsList().firstNameField).clear().type('Nameteste')
        cy.get(this.selectorsList().middleNameField).clear().type('Middleteste')
        cy.get(this.selectorsList().lastNameField).clear().type('Lastteste')
        cy.get(this.selectorsList().genericField).eq(3).clear().type('11111')
        cy.get(this.selectorsList().genericField).eq(4).clear().type('1')
        cy.get(this.selectorsList().genericField).eq(5).clear().type('23456')
        cy.get(this.selectorsList().genericField).eq(6).click()
        cy.get(this.selectorsList().genericYearField).click()
        cy.contains('2024').scrollIntoView().click()
        cy.get(this.selectorsList().genericMonthField).click()
        cy.contains('August').scrollIntoView().click()
        cy.get(':nth-child(28) > .oxd-calendar-date').click()
        cy.get(this.selectorsList().submitButton).eq(0).click()
        cy.get(this.selectorsList().genericComboBox).eq(0).click()
        cy.contains('Japanese').scrollIntoView().click()
        cy.get(this.selectorsList().genericComboBox).eq(1).click()
        cy.contains('Single').scrollIntoView().click()
        cy.get(this.selectorsList().dateBirthField).eq(1).clear().type('1999-09-30')
        cy.get(this.selectorsList().submitButton).eq(0).click()
        cy.get(this.selectorsList().genderField).contains('Female').click()
        cy.get('.orangehrm-left-space').eq(0).click()
        cy.contains('Successfully Updated')

    }

}

export default MyInfoPage