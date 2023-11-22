"use strict"

const mongoose = require('mongoose')
const passwordEncrypt = require('../helpers/passwordEncrypt')

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        trim: true,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        trim: true,
        required: true,
        set: (password) => passwordEncrypt(password)
    },
},{collection: 'users', timestamps: true})