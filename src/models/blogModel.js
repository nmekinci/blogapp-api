"use strict"

const mongoose = require('mongoose')


const BlogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim:true,
    }
},{
    collection: 'blogs', timestamps: true
})

module.exports = mongoose.model('Blog', BlogSchema)