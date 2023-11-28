"use strict"

module.exports = {
    isLogin: (req,res,next) => {
        return next() //for deactive this permission part
        if (req.user && req.user?.isActive){
            next()
        } else {
            res.errorStatusCode = 403
            throw new Error('No permission: Please login')
        }
    },
    isAdmin: (req,res,next) => {
        return next() //for deactive this permission part
        if (req?.user && req.user?.isActive && req.user?.isAdmin){
            next()
        } else {
            res.errorStatusCode = 403
            throw new Error('No permission: You are not an Admin')
        }
    },
    isGuest: (req,res,next) => {
        return next() //for deactive this permission part
        if (req.body.isGuest){
            next()
        } else {
            res.errorStatusCode = 403
            throw new Error('No permission: Please register / login or choose as a guest')
        }
    },
}