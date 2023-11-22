"use strict"

const router = require('express').Router()


const view = require('../controllers/viewController')


router.route('/')
    .get(view.list)
    .post(view.create)

router.route('/:id')
    .get(view.read)
    .put(view.update)
    .patch(view.update)
    .delete(view.delete)


module.exports = router