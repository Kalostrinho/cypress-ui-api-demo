context('This is a API testing demo', () => {
    
    const uri200 = 'https://reqbin.com/echo'
    const uri404 = 'https://reqbin.com/echo/something-not-found'

    
    beforeEach(() => {
        cy.visit('https://reqbin.com')
    })
  
    it('should GET a 200 OK!', () => {
        cy.request({
            url: uri200,
            method: 'GET',
            failOnStatusCode: false, 
            followRedirect: false
        }).should((response) => {
            expect(response.status).to.equal(200)
            expect(response).to.have.property('headers')
            expect(response).to.have.property('duration')
        })
    })

    it('should GET a 404 Not Found!', () => {
        cy.request({
            url: uri404,
            method: 'GET',
            failOnStatusCode: false, 
            followRedirect: false
        }).should((response) => {
            expect(response.status).to.equal(404)
            expect(response).to.have.property('headers')
            expect(response).to.have.property('duration')
        })
    })

})