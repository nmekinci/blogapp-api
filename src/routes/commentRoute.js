"use strict"

const router = require('express').Router()


const comment = require('../controllers/commentController')
const permissions = require('../middlewares/permissions')

router.route('/')
    .get(comment.list)
    .post(comment.create)

router.route('/:id')
    .get(comment.read)
    .put(comment.update)
    .patch(comment.update)
    .delete(comment.delete)


module.exports = router