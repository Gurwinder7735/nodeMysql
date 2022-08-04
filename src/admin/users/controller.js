const db = require("../../../models");
const AppError = require("../../../utils/appError");
const catchAsync = require("../../../utils/catchAsync");
const jwt = require('jsonwebtoken')
module.exports = {
    getUser: catchAsync(async(req,res,next) => {
        //   let i = 0;
        //   console.log(h)
          next(new AppError('error', 500));
    }),
    login: catchAsync(async(req,res,next) => {
        
   

            const user = await db.user.findOne({
                where:{
                    email: req.body.email
                },
                raw: true
            });

            user.token =  jwt.sign({ id: user.id },process.env.JWT_SECRET_KEY);

           return res.json(user)
            
        

    }),
    protected: catchAsync(async(req,res,next) => {
        
   
               console.log('inside protected route')
            
        

    }),
}