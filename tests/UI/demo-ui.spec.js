/**
 *  = = = => BEWARE!! <= = = =
 *  Using "Javascript functions" instead 
 *  of a "Page Object class"
 *  = = = => BEWARE!! <= = = =
 */  
import { 
    visit,
    getScreamArea,
    getScreamConfirmation,
    getScreamAgainLink,
    typeScream,
    scream,
    screamAgain,
} from '../Utils/Scream.util'

describe('This is a UI testing demo', () => {
    
    before(() => {
        visit()
    })
  
    it('should allow to type something in the textarea', () => {
        const randomText = 'This is random'
        getScreamArea().should('be.visible')
        typeScream(randomText)
        getScreamArea().should('have.value', randomText)
    })

    it('should scream into the void', () => {
        scream()
        getScreamConfirmation().should('be.visible')
    })

    it('should allow to scream again', () => {
        getScreamAgainLink().should('be.visible')
        screamAgain()
        getScreamArea().should('have.value', '')
    })

})