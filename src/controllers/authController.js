"use strict"

const User = require('../models/userModel')
const Token = require('../models/tokenModel')
const passwordEncrypt = require('../helpers/passwordEncrypt')

module.exports = {
    login: async (req,res) => {
        /*
            #swagger.tags = ["Authentication"]
            #swagger.summary = "Login"
            #swagger.description = 'Login with username (or email) and password.'
            #swagger.parameters["body"] = {
                in: "body",
                required: true,
                schema: {
                    "username": "test",
                    "password": "1234",
                }
            }
        */
            const {userName, email, password} = req.body

            if ((userName || email) && password) {
                const user = await User.findOne({$or: [{userName}, {email}] })

                if (user && user.password == passwordEncrypt(password)) {
                    if(user.isActive){
                        let data = await Token.findOne({userId: user._id})
                        //! Alternative method for creating new token
                        // if (!data){
                        //     data = await Token.create({
                        //         userId: user._id,
                        //         token: passwordEncrypt(user._id + Date.now())
                        //     })
                        //}
                        const { randomUUID } = require('node:crypto')
                        if (!data) data = await Token.create({
                            userId: user._id,
                            token: randomUUID()
                        })
                        res.send({
                            error: false,
                            key: data.token,
                            user
                        })
                        
                    } else {
                        res.errorStatusCode = 401
                        throw new Error('This account is NOT Active')
                    }
                }else {
                    res.errorStatusCode = 401
                    throw new Error('Wrong userName / email or password')
                }
            }else {
                res.errorStatusCode = 401
                throw new Error('Enter your userName/email or password')
            }
    },
    logout: async (req,res) => {
        /*
            #swagger.tags = ["Authentication"]
            #swagger.summary = "Logout"
            #swagger.description = 'Delete token key.'
        */
            const auth = req.headers?.authorization || null //Token .....key....
            const key = auth ? auth.split(' ') : null // ['Token', '.....key.....]
            let result = {}
            if (key && key[0] == 'Token') {
                result = await Token.deleteOne({token: key[1]})
            }
            res.send({
                error:false,
                message:'Logged Out Successfully',
                result
            })
    }
}