"use strict"

const router = require('express').Router()


const like = require('../controllers/likeController')
const permissions = require('../middlewares/permissions')

router.route('/')
    .get(like.list)
    .post(like.create)

router.route('/:id')
    .get(like.read)
    .put(like.update)
    .patch(like.update)
    .delete(like.delete)


module.exports = router