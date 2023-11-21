"use strict"
// Node.js - Express.js Blog-API 

const express = require('express')
const app = express()

require('dotenv').config() // for using .env variables
const PORT = process.env?.PORT || 8000

require('express-async-errors') // for async errors to errorHandler

// connection with db
const { dbConnection } = require('./src/configs/dbConnection')
dbConnection()

app.use(express.json()) //for ability to get json


//Home Path for API service
app.all('/api', (req,res) => {
    res.send({
        error: false,
        message: "It's Blog API service, Wellcome..",
        isLogin: req.isLogin,
        user: req.user
    })
})

//for running server
app.listen(PORT, () => console.log('localhost:' + PORT))
