const { sendErrorDev, sendErrorProd, sendError } = require("../utils/helpers");

module.exports = (err,req,res,next) =>{


    if (err && err.error && err.error.isJoi) {
        err.message = err.error.details[0].message.replace(/\"/g,'') || 'error';
        
    } 
    return sendError(err,req,res)


}