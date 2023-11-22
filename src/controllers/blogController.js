"use strict";

const Blog = require("../models/blogModel");
const {
  getModelList,
  getModelListDetails,
} = require("../middlewares/findSearchSortPage");

module.exports = {
  list: async (req, res) => {
    /*
            #swagger.tags = ["Blogs"]
            #swagger.summary = "List Blogs"
            #swagger.description = `
                You can send query with endpoint for search[], sort[], page and limit.
                <ul> Examples:
                    <li>URL/?<b>search[field1]=value1&search[field2]=value2</b></li>
                    <li>URL/?<b>sort[field1]=1&sort[field2]=-1</b></li>
                    <li>URL/?<b>page=2&limit=1</b></li>
                </ul>
            `
        */
    const data = await getModelList(Blog);

    res.status(200).send({
      error: false,
      count: data.length,
      result: data,
      details: await getModelListDetails(Blog),
    });
  },
  read: async (req, res) => {
    /*
        #swagger.tags = ["Blogs"]
        #swagger.summary = "Get Single Blog"
    */
    const data = await Blog.findOne({ _id: req.params.id });

    res.status(200).send({
      error: false,
      data,
    });
  },
  create: async (req, res) => {
    /*
            #swagger.tags = ["Blogs"]
            #swagger.summary = "Create Blog"
            #swagger.parameters['body'] = {
                in: 'body',
                required: true,
                schema: {
                    "category": "test",
                    "creator": "test",
                    "title": "test",
                    "image": "http://test.com",
                    "content": "test",
                    "published":false,
                    "approvedByAdmin":false,
                    "likesCounter": 0,
                    "viewsCounter": 0,
                    "commentsCounter":0,
                    "reportsCounter":0
                },
            }
    */
    const data = await Blog.create(req.body);

    res.status(201).send({
      error: false,
      body: req.body,
      result: data,
    });
  },
  update: async (req, res) => {
    /*
            #swagger.tags = ["Blogs"]
            #swagger.summary = "Create Blog"
            #swagger.parameters['body'] = {
                in: 'body',
                required: true,
                schema: {
                    "category": "test",
                    "creator": "test",
                    "title": "test",
                    "image": "http://test.com",
                    "content": "test",
                    "published":false,
                    "approvedByAdmin":false,
                    "likesCounter": 0,
                    "viewsCounter": 0,
                    "commentsCounter":0,
                    "reportsCounter":0
                },
            }
    */
    const data = await Blog.updateOne({ _id: req.params.id }, req.body, {
      runValidators: true,
    });

    res.status(200).send({
      error: false,
      data,
      new: await Blog.findOne({ _id: req.params.id }),
    });
  },
  delete: async (req, res) => {
    /*
            #swagger.tags = ["Blogs"]
            #swagger.summary = "Delete Blog"
    */
    const data = await Blog.deleteOne({ _id: req.params.id });

    res.status(data.deletedCount ? 204 : 404).send({
      error: !data.deletedCount,
      data,
    });
  },
};