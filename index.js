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

/* Templates Implementation Area */
const ejs = require('ejs')
ejs.openDelimiter = '{'
ejs.closeDelimiter = '}'
// app.set('view options', {
//     openDelimiter: '{', closeDelimiter: '}'
// })

app.set('views', './public/admin')
app.set('view engine', 'ejs')

/* Templates Implementation Area */


// Accept form data & convert to object:
app.use(express.urlencoded({ extended: true }))

// StaticFiles:
app.use('/assets', express.static('./public/assets'))

//Middlewares
//Authentication
app.use(require('./src/middlewares/authentication'))

//Logger
app.use(require('./src/middlewares/logger'))

// res.getModelList():
app.use(require('./src/middlewares/findSearchSortPage'))

//Home Path for TEMPLATE and SESSION
app.all('/', (req,res) => {
    res.redirect('/admin')
})
app.use('/admin', require('./src/routes/views/adminViewRoute'))


//Home Path for API service and JWT
app.all('/api', (req,res) => {
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
