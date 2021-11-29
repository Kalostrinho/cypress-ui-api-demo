const base = {
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
    failOnStatusCode: false, 
    followRedirect: false
}

class ApiPage {
    
    constructor() { 
        console.log('\n\nAPI "PAGE OBJECT" IS BEING USED...\n\n')
    }

    /**
     * Returns a request object.
     * This should respond a [200] status code.
     * @returns {Object} - The request
     */
    GET_200() {
        return {
            ...base, 
            method: 'GET',
            url: 'https://jsonplaceholder.typicode.com/posts/1'
        }
    }

    /**
     * Returns a request object.
     * This should respond a [404] status code.
     * @returns {Object} - The request
     */
     GET_404() {
        return {
            ...base, 
            method: 'GET',
            url: 'https://jsonplaceholder.typicode.com/posts/999'
        }
    }

    /**
     * Returns a request object.
     * This should respond a [404] status code.
     * @returns {Object} - The request
     */
     DELETE_200() {
        return {
            ...base, 
            method: 'DELETE',
            url: 'https://jsonplaceholder.typicode.com/posts/1'
        }
    }
}

export default ApiPage