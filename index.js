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

//Middlewares
//Authentication
app.use(require('./src/middlewares/authentication'))

//Logger
app.use(require('./src/middlewares/logger'))

// res.getModelList():
app.use(require('./src/middlewares/findSearchSortPage'))


//Home Path for API service
app.all('/', (req,res) => {
    res.send({
        error: false,
        message: "It's Blog API service, Wellcome..",
        documents: '👉/documents'
        // isLogin: req.isLogin,
        // user: req.user
    })
})

//Routes for API services
app.use(require('./src/routes/indexRoute'))

//ErrorHandler
app.use(require('./src/middlewares/errorHandler'))

//for running server
app.listen(PORT, () => console.log('localhost:' + PORT))

// Syncronization (must be in commentLine):
// require('./src/helpers/sync')() // !!! It clears database.
