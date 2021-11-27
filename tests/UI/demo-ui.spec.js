describe('This is a UI testing demo', () => {
    
    const textScreamArea = 'textarea.type'
    const btnScream = 'div.img-btn'
    const confirmationMessageAfterScream = 'div.glad'
    const linkScreamAgain = 'span.here'

    before(() => {
        cy.visit('https://screamintothevoid.com/')
    })
  
    it('should allow to type something in the textarea', () => {
        const randomText = 'This is random'
        cy.get(textScreamArea).type(randomText)
        cy.get(textScreamArea).should('have.value', randomText)
    })

    it('should scream into the void', () => {
        cy.get(btnScream).click()
        cy.get(confirmationMessageAfterScream).should('be.visible')
    })

    it('should allow to scream again', () => {
        cy.get(linkScreamAgain).should('be.visible')
        cy.get(linkScreamAgain).click()
        cy.get(textScreamArea).should('have.value', '')

    })

})