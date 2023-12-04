"use strict"

const Blog = require('../../models/blogModel')
const Report = require('../../models/reportModel')
const Comment = require('../../models/commentModel')
const Category = require('../../models/categoryModel')

//only "waiting" records
const filter = {approvedByAdmin : "waiting"}

const list =  async (req,res, modelName, populate) => {
    const data = await res.getModelList(modelName, filter, populate)

    res.render(`${modelName}list`, {
        details: await res.getModelListDetails(modelName, filter),
        data,
        // pageUrl: req.originalUrl.replace(/[?|&]page=([^&]+)/gi, '')
    })
}


module.exports = {
    // blogList : async (req,res) => {
    //     const data = await res.getModelList(Blog, filter, [creator])

    //     res.render('blogList', {
    //         details: await res.getModelListDetails(Blog, filter),
    //         data,
    //         // pageUrl: req.originalUrl.replace(/[?|&]page=([^&]+)/gi, '')
    //     })
    // },
    blogList : list(req.res,Blog,[creator]),
    commentList : async (req,res) => {
        const data = await res.getModelList(Comment, filter, [userId, blogId])

        res.render('commentList', {
            details: await res.getModelListDetails(Comment, filter),
            data,
            // pageUrl: req.originalUrl.replace(/[?|&]page=([^&]+)/gi, '')
        })
    },
    reportList : async (req,res) => {
        const data = await res.getModelList(Report, filter, [userId, blogId])

        res.render('reportList', {
            details: await res.getModelListDetails(Report, filter),
            data,
            // pageUrl: req.originalUrl.replace(/[?|&]page=([^&]+)/gi, '')
        })
    },
    categoryList : async (req,res) => {
        const data = await res.getModelList(Category, filter, [userId])

        res.render('categoryList', {
            details: await res.getModelListDetails(Category, filter),
            data,
            // pageUrl: req.originalUrl.replace(/[?|&]page=([^&]+)/gi, '')
        })
    },
}
