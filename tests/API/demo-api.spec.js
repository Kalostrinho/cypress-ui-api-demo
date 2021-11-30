import ApiPage from '../Pages/API.page'
const reqs = new ApiPage()

describe('This is a API testing demo', () => {
    
    beforeEach(() => {
        //  --- Just for giggles!
        cy.visit('http://ninjaflex.com/')
    })
  
    it('should send a GET request and get a [postive] response', () => {
        cy.request(reqs.GET_200())
            .should((res) => {
                expect(res.status).to.equal(200)
                expect(res.body.id).to.equal(1)
                expect(res).to.have.property('headers')
                expect(res).to.have.property('duration')
            })
    })

    it('should send a GET request and get a [negative] response', () => {
        cy.request(reqs.GET_404())
            .should((res) => {
                expect(res.status).to.equal(404)
                expect(res.body).to.be.an('Object')
                expect(res).to.have.property('headers')
                expect(res).to.have.property('duration')
            })
    })

    it('should send a DELETE request and get a [positive] response', () => {
        cy.request(reqs.DELETE_200())
            .should((res) => {
                expect(res.status).to.equal(200)
                expect(res.body).to.be.an('Object')
                expect(res).to.have.property('headers')
                expect(res).to.have.property('duration')
            })
        
    })

})