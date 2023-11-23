"use strict"

const router = require('express').Router()


const report = require('../controllers/reportController')


router.route('/')
    .get(report.list)
    .post(report.create)

router.route('/:id')
    .get(report.read)
    .put(report.update)
    .patch(report.update)
    .delete(report.delete)


module.exports = router