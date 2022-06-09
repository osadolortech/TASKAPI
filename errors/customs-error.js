

class CustomeApiError extends Error{
    constructor(message, statusCode){
        super(message)
        this.statusCode = statusCode
    }
}

const createCustomeErro = (msg,statusCode)=>{
    return new CustomeApiError(msg,statusCode)

}

module.exports = { createCustomeErro, CustomeApiError}