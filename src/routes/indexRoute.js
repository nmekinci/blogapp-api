"use strict"

const router = require('express').Router()

// routes/:




// user:
router.use('/users', require('./userRoute'))
// token:
router.use('/tokens', require('./tokenRoute'))



module.exports = router