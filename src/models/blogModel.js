"use strict"

const mongoose = require('mongoose')


const BlogSchema = new mongoose.Schema({
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Categories',
        required: true
    },
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    title: {
        type: String,
        required: true,
        trim:true
    },
    image: {
        type: String,
        trim:true
    },
    content: {
        type: String,
        trim:true
    },
    published:{
        type: Boolean,
        default: false
    },
    approvedByAdmin:{
        type: Boolean,
        default: false
    },
    likesCounter:{
        type: Number,
        default:0
    },
    viewsCounter:{
        type: Number,
        default:0
    },
    commentsCounter:{
        type: Number,
        default:0
    },
    reportsCounter:{
        type: Number,
        default:0
    },
},{
    collection: 'blogs', timestamps: true
})

module.exports = mongoose.model('Blog', BlogSchema)