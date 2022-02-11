//  *******  BEWARE! *******
//  This is a standard "Page Object Model" approach... 
//  Although is not plugged into any spec for now.
//  *******  BEWARE! *******
class ScreamPage {
    
    constructor() { }
  
    /**
     * Visit the "Scream into the void" webpage.
     */
    visit() {
        cy.visit('https://screamintothevoid.com/')
    }
  
    /**
     * Returns the screat textarea object.
     * @returns {Object} - The textarea
     */
    getScreamArea() {
        return cy.get('textarea.type')
    }
  
    /**
     * Returns the scream button object.
     * @returns {Object} - The scream button
     */
    getScreamButton() {
        return cy.get('div.img-btn')
    }

    /**
     * Returns the confirmation message object.
     * @returns {Object} - The confirmation message div
     */
    getScreamConfirmationMessage() {
        return cy.get('div.glad')
    }
    
    /**
     * Returns the "scream again" link object.
     * @returns {Object} - The scream again link
     */
    getScreamAgainLink() {
        return cy.get('span.here')
    }

    /**
     * Sets a "scream" within the textarea and
     * clicks on the "scream" button.
     * @param {String} textToScream - The text to set within the textarea.
     */
    scream(textToScream) {
        this.getScreamArea().type(textToScream)
        this.getScreamButton().click()
    }

    
    /**
     * Clicks the "scream again" link and 
     * resets the webpage to its initial state.
     */
    screamAgain() {
        this.getScreamAgainLink().click()
    }
    
  }
  
  export default ScreamPage