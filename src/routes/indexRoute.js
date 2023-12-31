"use strict"

const router = require('express').Router()

// routes/:

//auth
router.use('/auth', require('./authRoute'))
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
// report:
router.use('/reports', require('./reportRoute'))
// comment:
router.use('/comments', require('./commentRoute'))
// category:
router.use('/categories', require('./categoryRoute'))


// document:
router.use('/documents', require('./documentRoute'))



module.exports = router