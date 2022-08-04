module.exports = {
    sendErrorDev : (err,req,res) => {

       return res.status(err.statusCode || 500).json({
           success : 0,
           status: err.statusCode || 500,
           message: err.message,
           stack : err.stack
       });

    },
    sendErrorProd : (err,req,res) => {

        return res.status(err.statusCode || 500).json({
            success : 0,
            message: "something went wrong!"
        });
 
     },
     
    sendError: (err,req,res) => {
        if(["development","test"].includes(process.env.NODE_ENV)){
            return module.exports.sendErrorDev(err,req,res);
        }else if(process.env.NODE_ENV == 'production'){
            return module.exports.sendErrorProd(err,req,res)
        }
    }
}