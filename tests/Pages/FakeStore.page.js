const base = {
    headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json',
    },
    failOnStatusCode: false, 
    followRedirect: false
}

class FakeStorePage {
    
    constructor() { }

    /**
     * Returns a request object.
     * This should respond a [200] status code.
     * @param {number} productId - If given, it targets a specific product with the given ID, list of all products otherwise.
     * @returns {Object} - The request
     */
    GET_200_Products(productId = 0) {
        const resource = productId === 0
            ? ''
            : `/${productId}`
        return {
            ...base, 
            method: 'GET',
            url: `https://fakestoreapi.com/products${resource}`
        }
    }

    /**
     * Returns a request object.
     * This should respond a [200] status code.
     * @param {string} category - If given, targets the list of all products within that category, list of all categories otherwise.
     * @returns {Object} - The request
     */
     GET_200_Categories(category = '') {
        const resource = category === ''
            ? '/categories'
            : `/category/${category}`

        return {
            ...base, 
            method: 'GET',
            url: `https://fakestoreapi.com/products${resource}`
        }
    }

    /**
     * Returns a request object.
     * This should respond a [200] status code.
     * @param {Object} body - Payload for the new product (it's only a mock).
     * @returns {Object} - The request
     */
     POST_200_Product(body = {}) {
        return {
            ...base, 
            method: 'POST',
            url: 'https://fakestoreapi.com/products'
        }
    }

    /**
     * Returns a request object.
     * This should respond a [200] status code.
     * @param {number} productId - The id of the product to delete (it's only a mock).
     * @returns {Object} - The request
     */
     DELETE_200_Product(productId) {
        return {
            ...base, 
            method: 'DELETE',
            url: `https://fakestoreapi.com/products/${productId}`
        }
    }

    /**
     * Returns a request object.
     * This should respond with a [404] status code.
     * @returns {Object} - The request
     */
     GET_404_BadUri() {
        return {
            ...base, 
            method: 'GET',
            url: 'https://fakestoreapi.com/product/'
        }
    }
}

export default FakeStorePage