//  This is a standard "Page Object Model" approach... 
//  Plugged in!
class InternetPage {
    
    constructor() {}
  
    /**
     * Visit the "The Internet" webpage.
     */
    visit() {
        cy.visit('https://the-internet.herokuapp.com/')
    }

    /**
     * Go back in browser history.
     */
    back() {
        cy.go(-1)
    }
  
    /**
     * Returns the form authentication link.
     * @returns {Object} - The link
     */
    getFormAuthenticationLink() {
        return cy.get('a[href="/login"]')
    }
  
    /**
     * Returns the username input.
     * @returns {Object} - The input
     */
    getUsernameInput() {
        return cy.get('#username')
    }

    /**
     * Returns the password input.
     * @returns {Object} - The input
     */
    getPasswordInput() {
        return cy.get('#password')
    }

    /**
     * Returns the username input.
     * @returns {Object} - The input
     */
    getLoginButton() {
        return cy.get('button[type="submit"]')
    }

    /**
     * Returns the username input.
     * @returns {Object} - The input
     */
    getConfirmationMessage() {
        return cy.get('#flash')
    }

    /**
     * Returns the logout link.
     * @returns {Object} - The link
     */
    getLogoutLink() {
        return cy.get('a[href="/logout"]')
    }

    /**
     * Sets a value to "username" input.
     * @param {String} user - The user to set.
     */
    setUsername(user) {
        this.getUsernameInput().type(user)
    }

    /**
     * Sets a value to "password" input.
     * @param {String} pwd - The password to set.
     */
    setPassword(pwd) {
        this.getPasswordInput().type(pwd)
    }

    /**
     * Attempts to login.
     * @param {String} user - The user to set.
     * @param {String} pwd - The password to set.
     */
    login(user = 'tomsmith', pwd = 'SuperSecretPassword!') {
        this.setUsername(user)
        this.setPassword(pwd)
        this.getLoginButton().click()
    }
    
  }
  
  export default InternetPage