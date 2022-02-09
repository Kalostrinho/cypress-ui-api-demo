const base = {
    headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json',
    },
    failOnStatusCode: false, 
    followRedirect: false
}

class FOAASPage {
    
    constructor() { }

    /**
     * Returns a request object.
     * This should respond a [200] status code.
     * @param {string} who - Name of the person affected by the message.
     * @param {string} from - Name of the person sending the message.
     * @returns {Object} - The request
     */
    GET_200_MESSAGE_01(who = 'John', from = 'James') {
        return {
            ...base, 
            method: 'GET',
            url: `https://www.foaas.com/cocksplat/${who}/${from}`
        }
    }

    /**
     * Returns a request object.
     * This should respond a [200] status code.
     * @param {string} who - Name of the person affected by the message.
     * @param {string} from - Name of the person sending the message.
     * @returns {Object} - The request
     */
     GET_200_MESSAGE_02(who = 'John', from = 'James') {
        return {
            ...base, 
            method: 'GET',
            url: `https://www.foaas.com/deraadt/${who}/${from}`
        }
    }

    /**
     * Returns a request object.
     * This should respond a [200] status code.
     * @param {string} from - Name of the person sending the message.
     * @returns {Object} - The request
     */
     GET_200_MESSAGE_03(from = 'James') {
        return {
            ...base, 
            method: 'GET',
            url: `https://www.foaas.com/idea/${from}`
        }
    }

    /**
     * Returns a request object.
     * This should respond a [200] status code.
     * @param {string} who - Name of the person affected by the message.
     * @param {string} from - Name of the person sending the message.
     * @returns {Object} - The request
     */
     GET_200_MESSAGE_04(who = 'John', from = 'James') {
        return {
            ...base, 
            method: 'GET',
            url: `https://www.foaas.com/fts/${who}/${from}`
        }
    }

    /**
     * Returns a request object.
     * This should respond with the weirdest error code I've ever seen.
     * @returns {Object} - The request
     */
     GET_622() {
        return {
            ...base, 
            method: 'GET',
            url: 'https://www.foaas.com/operational'
        }
    }
}

export default FOAASPage