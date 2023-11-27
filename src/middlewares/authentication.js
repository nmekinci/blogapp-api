"use strict"

const Token = require('../models/tokenModel')

module.exports = async (req,res,next) => {
    const auth = req.headers?.authorization || null //Token .....key....
    const key = auth ? auth.split(' ') : null // ['Token', '.....key.....]

    if (key && key[0] == 'Token') {
        const data = await Token.findOne({token: key[1]}).populate('userId')
        req.user = data ? data.userId : undefined
    }
    next()
}