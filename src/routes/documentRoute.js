"use strict"

const router = require('express').Router()

router.all('/', (req,res) => {
    res.send({
        swagger: "/documents/swagger",
        redoc: "/documents/redoc",
        json: "/documents/json",
    })
})