"use strict";

const Comment = require("../models/commentModel");
// const {
//   getModelList,
//   getModelListDetails,
// } = require("../middlewares/findSearchSortPage");

module.exports = {
  list: async (req, res) => {
    /*
            #swagger.tags = ["Comments"]
            #swagger.summary = "List Comments"
            #swagger.description = `
                You can send query with endpoint for search[], sort[], page and limit.
                <ul> Examples:
                    <li>URL/?<b>search[field1]=value1&search[field2]=value2</b></li>
                    <li>URL/?<b>sort[field1]=1&sort[field2]=-1</b></li>
                    <li>URL/?<b>page=2&limit=1</b></li>
                </ul>
            `
        */
    const data = await req.getModelList(Comment);

    res.status(200).send({
      error: false,
      count: data.length,
      result: data,
      details: await req.getModelListDetails(Comment),
    });
  },
  read: async (req, res) => {
    /*
        #swagger.tags = ["Comments"]
        #swagger.summary = "Get Single Comment"
    */
    const data = await Comment.findOne({ _id: req.params.id });

    res.status(200).send({
      error: false,
      data,
    });
  },
  create: async (req, res) => {
    /*
            #swagger.tags = ["Comments"]
            #swagger.summary = "Create Comment"
            #swagger.parameters['body'] = {
                in: 'body',
                required: true,
                schema: {
                    "userId": "test",
                    "blogId": "test",
                    "approvedByAdmin": "enum: [0,1,2,3]" // 0 waiting, 1 seen, 2 ok, 3 refused,
                    },
            }
    */
    const data = await Comment.create(req.body);

    res.status(201).send({
      error: false,
      body: req.body,
      result: data,
    });
  },
  update: async (req, res) => {
    /*
            #swagger.tags = ["Comments"]
            #swagger.summary = "Create Comment"
            #swagger.parameters['body'] = {
                in: 'body',
                required: true,
                schema: {
                    "userId": "test",
                    "blogId": "test",
                    "approvedByAdmin": "enum: [0,1,2,3]" // 0 waiting, 1 seen, 2 ok, 3 refused,
                    },
            }
    */
    const data = await Comment.updateOne({ _id: req.params.id }, req.body, {
      runValidators: true,
    });

    res.status(200).send({
      error: false,
      data,
      new: await Comment.findOne({ _id: req.params.id }),
    });
  },
  delete: async (req, res) => {
    /*
            #swagger.tags = ["Comments"]
            #swagger.summary = "Delete Comment"
    */
    const data = await Comment.deleteOne({ _id: req.params.id });

    res.status(data.deletedCount ? 204 : 404).send({
      error: !data.deletedCount,
      data,
    });
  },
};
