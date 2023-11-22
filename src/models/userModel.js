"use strict"

const mongoose = require('mongoose')
const passwordEncrypt = require('../helpers/passwordEncrypt')

const UserSchema = new mongoose.Schema({
    userName: {
        type: String,
        trim: true,
        required: true,
        unique: true,
        index:true
    },
    email: {
        type: String,
        trim: true,
        required: [true, 'email area is required'],
        unique: [true, 'this email is already using'],
        validate: [
            (email) => email.includes('@') && email.includes('.'),
            'please check your email!'
        ]
    },
    password: {
        type: String,
        trim: true,
        required: true,
        set: (password) => passwordEncrypt(password)
    },
    firstName: {
        type: String,
        trim: true,
    },
    lastName: {
        type: String,
        trim: true,
    },
    image: {
        type: String,
        trim: true,
    },
    intro: {
        type: String,
        trim: true,
    },
    isActive: {
        type: Boolean,
        default: true,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    isGuest: {
        type: Boolean,
        default: false,
    },
    blogsCounter: {
        type: Number,
    },
    likesCounter: {
        type: Number,
    },
    viewsCounter: {
        type: Number,
    },
    commentsCounter: {
        type: Number,
    },
},{collection: 'users', timestamps: true})


//! 26 stock api folder model/user.js take a look there
// UserSchema.pre(['save', 'updateOne'], function (next) {

//     // get data from "this" when create;
//     // if process is updateOne, data will receive in "this._update"
//     const data = this?._update || this

//     // email@domain.com
//     const isEmailValidated = data.email
//         ? /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(data.email) // test from "data".
//         : true

//     if (isEmailValidated) {

//         if (data?.password) {

//             // pass == (min 1: lowerCase, upperCase, Numeric, @$!%*?& + min 8 chars)
//             const isPasswordValidated = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/.test(data.password)

//             if (isPasswordValidated) {

//                 this.password = data.password = passwordEncrypt(data.password)
//                 this._update = data // updateOne will wait data from "this._update".

//             } else {

//                 next(new Error('Password not validated.'))
//             }
//         }

//         next() // Allow to save.

//     } else {

//         next(new Error('Email not validated.'))
//     }
// })
// /* ------------------------------------------------------- */
// // FOR REACT PROJECT:
// UserSchema.pre('init', function (data) {

//     data.id = data._id
//     data.createds = data.createdAt.toLocaleDateString('tr-tr')
// })
/* ------------------------------------------------------- */
module.exports = mongoose.model('User', UserSchema)