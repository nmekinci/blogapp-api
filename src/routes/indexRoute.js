"use strict"

const router = require('express').Router()

// routes/:




// user:
router.use('/users', require('./userRoute'))
// token:
router.use('/tokens', require('./tokenRoute'))
// blog:
router.use('/blogs', require('./blogRoute'))
// view:
router.use('/views', require('./viewRoute'))
// like:
router.use('/likes', require('./likeRoute'))



module.exports = router