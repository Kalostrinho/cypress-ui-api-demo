import InternetPage from '../Pages/TheInternet.page'
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
const internetPage = new InternetPage()

describe('-- This is a UI testing demo --', () => {
    
    describe('==> "Scream into the void" website', () => {
        
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

    describe('==> "The Internet Page" website', () => {
        
        beforeEach(() => {
            internetPage.visit()
        })

        it('should open the "Internet Page" website', () => {
            internetPage.getFormAuthenticationLink().should('be.visible')
        })

        it('should open "Form Authentication" section', () => {
            internetPage.getFormAuthenticationLink().click()
            internetPage.getUsernameInput().should('be.visible')
        })

        it('should validate an incorrect user after authenticating', () => {
            internetPage.getFormAuthenticationLink().click()
            internetPage.login('admin', 'admin')
            internetPage.getConfirmationMessage().should('include.text', 'invalid')
        })

        it('should validate an correct user and logout', () => {
            internetPage.getFormAuthenticationLink().click()
            internetPage.login()
            internetPage.getConfirmationMessage().should('include.text', 'logged into a secure area')
            internetPage.getLogoutLink().click()
        })

    })
    

})