import FOAASPage from '../Pages/FOAAS.page'
import FakeStorePage from '../Pages/FakeStore.page'
const foaas = new FOAASPage()
const fakeStore = new FakeStorePage()

describe('-- This is a API testing demo --', () => {
    
    describe('==> Testing FOAAS API\'s', () => {

        before(() => {
            //  --- Just for giggles!
            cy.visit('https://foaas.com/')
        })

        context('---> Happy scenarios', () => {
              
            it('should send a GET request, get a [postive] response and validate message 01', () => {
                const affected = 'Zack'
                const sender = 'Jimmy'
                cy.request(foaas.GET_200_MESSAGE_01(affected, sender))
                    .should((res) => {
                        expect(res.status).to.equal(200)
                        expect(res.body).to.be.an('Object')
                        expect(res.body).to.have.property('message')
                        expect(res.body).to.have.property('subtitle')
                        expect(res.body.message).to.contain(affected)
                        expect(res.body.subtitle).to.contain(sender)
                    })
            })
        
            it('should send a GET request, get a [postive] response and validate message 02', () => {
                const affected = 'Karen'
                const sender = 'Beth'
                cy.request(foaas.GET_200_MESSAGE_02(affected, sender))
                    .should((res) => {
                        expect(res.status).to.equal(200)
                        expect(res.body).to.be.an('Object')
                        expect(res.body).to.have.property('message')
                        expect(res.body).to.have.property('subtitle')
                        expect(res.body.message).to.contain(affected)
                        expect(res.body.subtitle).to.contain(sender)
                    })
            })
    
            it('should send a GET request, get a [postive] response and validate message 03', () => {
                const sender = 'Harry'
                cy.request(foaas.GET_200_MESSAGE_03(sender))
                    .should((res) => {
                        expect(res.status).to.equal(200)
                        expect(res.body).to.be.an('Object')
                        expect(res.body).to.have.property('message')
                        expect(res.body).to.have.property('subtitle')
                        expect(res.body.subtitle).to.contain(sender)
                    })
            })
    
            it('should send a GET request with defaults, get a [postive] response and validate message 04', () => {
                const defAffected = 'John'
                const defSender = 'James'
                cy.request(foaas.GET_200_MESSAGE_04())
                    .should((res) => {
                        expect(res.status).to.equal(200)
                        expect(res.body).to.be.an('Object')
                        expect(res.body).to.have.property('message')
                        expect(res.body).to.have.property('subtitle')
                        expect(res.body.message).to.contain(defAffected)
                        expect(res.body.subtitle).to.contain(defSender)
                    })
            })
        })  

        context('---> Sad scenarios', () => {

            it('should send a badly-constructed GET request, get a [negative] response and validate error message', () => {
                cy.request(foaas.GET_622())
                    .should((res) => {
                        expect(res.status).to.equal(622)
                        expect(res.body).to.be.an('Object')
                        expect(res.body).to.have.property('message')
                        expect(res.body).to.have.property('subtitle')
                        expect(res.body.message).to.contain('All The Fucks')
                        expect(res.body.subtitle).to.contain('your request')
                    })
            })

        })

    })

    describe('==> Testing FakeStore API\'s', () => {

        before(() => {
            //  --- Just for giggles!
            cy.visit('https://fakestoreapi.com/')
        })

        context('---> Happy scenarios', () => {
              
            it('should send a GET request, get a [postive] response and validate list of products', () => {
                cy.request(fakeStore.GET_200_Products())
                    .should((res) => {
                        expect(res.status).to.equal(200)
                        expect(res.body).to.be.an('Array')
                        expect(res.body).to.have.length(20)
                    })
            })
        
            it('should send a GET request, get a [postive] response and validate one product', () => {
                const id = 5
                cy.request(fakeStore.GET_200_Products(id))
                    .should((res) => {
                        expect(res.status).to.equal(200)
                        expect(res.body).to.be.an('Object')
                        expect(res.body).to.have.property('id')
                        expect(res.body.id).to.be.equal(id)
                        expect(res.body).to.have.property('title')
                        expect(res.body).to.have.property('price')
                        expect(res.body).to.have.property('description')
                        expect(res.body).to.have.property('category')
                        expect(res.body).to.have.property('rating')
                        expect(res.body.rating).to.be.an('Object')
                    })
            })

            it('should send a GET request, get a [postive] response and validate list of categories', () => {
                cy.request(fakeStore.GET_200_Categories())
                    .should((res) => {
                        expect(res.status).to.equal(200)
                        expect(res.body).to.be.an('Array')
                        expect(res.body).to.have.length(4)
                    })
            })

            it('should send a GET request, get a [postive] response and validate list of products within a unique category', () => {
                const category = 'jewelery'
                cy.request(fakeStore.GET_200_Categories(category))
                    .should((res) => {
                        expect(res.status).to.equal(200)
                        expect(res.body).to.be.an('Array')
                        expect(res.body.length).to.be.greaterThan(1)
                        expect(res.body[0]).to.have.property('id')
                        expect(res.body[0]).to.have.property('title')
                        expect(res.body[0]).to.have.property('price')
                        expect(res.body[0]).to.have.property('description')
                        expect(res.body[0]).to.have.property('category')
                        expect(res.body[0]).to.have.property('rating')
                        expect(res.body[0].rating).to.be.an('Object')
                    })
            })

            it('should send a POST request, get a [postive] response and validate product "created" (not really though!)', () => {
                const body = {
                    title: 'Jedi Knight Lightsaber',
                    price: 999.9,
                    description: 'Not Luke\'s but a good one',
                    category: 'electronics'
                }
                cy.request(fakeStore.POST_200_Product(body))
                    .should((res) => {
                        expect(res.status).to.equal(200)
                        expect(res.body).to.be.an('Object')
                        expect(res.body).to.have.property('id')
                        expect(res.body.id).to.be.equal(21) // The mock always contains 20 products, any new "would be" 21
                    })
            })

            it('should send a DELETE request, get a [postive] response and validate the "deleted" product (not really though!)', () => {
                const id = 11
                cy.request(fakeStore.DELETE_200_Product(id))
                    .should((res) => {
                        expect(res.status).to.equal(200)
                        expect(res.body).to.be.an('Object')
                        expect(res.body).to.have.property('id')
                        expect(res.body.id).to.be.equal(id)
                        expect(res.body).to.have.property('title')
                        expect(res.body).to.have.property('price')
                        expect(res.body).to.have.property('description')
                        expect(res.body).to.have.property('category')
                        expect(res.body).to.have.property('rating')
                        expect(res.body.rating).to.be.an('Object')
                    })
            })

        })  

        context('---> Sad scenarios', () => {

            it('should send a GET request with a bad URI, get a [negative] response and validate error message', () => {
                cy.request(fakeStore.GET_404_BadUri())
                    .should((res) => {
                        expect(res.status).to.equal(404)
                    })
            })

        })

    })
    
})