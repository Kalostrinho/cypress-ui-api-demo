//  *******  BEWARE! *******
//  Unsure on whether this "Utils" approach is an ANTI-PATTERN!
//  The truth is that it works a bit faster than the normal 
//  "Page Object Model" approach.
//  It seemed a better approach for the demo since simple JavaScript 
//  functions work just as well as a "class"... 
//  IF NOT BETTER! Without adding that "extra layer" between the DOM and the specs
//  making tests slower because they force the tests to ALWAYS 
//  go through the application user interface
//  *******  BEWARE! *******

/**
 * Visit the "Scream into the void" webpage.
 */
export const visit = () => {
    cy.visit('https://screamintothevoid.com/')
}

/**
 * Returns the screat textarea object.
 * @returns {Object} - The textarea
 */
export const getScreamArea = () => {
    return cy.get('textarea.type')
}

/**
 * Sets the screaming textarea with a text.
 * @param {String} scream - The text to set within the scream textarea
 */
export const typeScream = (scream) => {
    cy.get('textarea.type').type(scream)
}

/**
 * Returns the scream button object.
 * @returns {Object} - The scream button
 */
export const getScreamButton = () => {
    return cy.get('div.img-btn')
}

/**
 * Clicks on the scream button.
 */
export const scream = () => {
    cy.get('div.img-btn').click()
}

/**
 * Returns the confirmation message object.
 * @returns {Object} - The confirmation message div
 */
export const getScreamConfirmation = () => {
    return cy.get('div.glad')
}

/**
 * Returns the "scream again" link object.
 * @returns {Object} - The scream again link
 */
export const getScreamAgainLink = () => {
    return cy.get('span.here')
}

/**
 * Clicks the "scream again" link and 
 * resets the webpage to its initial state.
 */
export const screamAgain = () => {
    cy.get('span.here').click()
}