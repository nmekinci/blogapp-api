"use strict";

const Category = require("../models/categoryModel");
const {
  getModelList,
  getModelListDetails,
} = require("../middlewares/findSearchSortPage");

module.exports = {
  list: async (req, res) => {
    /*
            #swagger.tags = ["Categories"]
            #swagger.summary = "List Categories"
            #swagger.description = `
                You can send query with endpoint for search[], sort[], page and limit.
                <ul> Examples:
                    <li>URL/?<b>search[field1]=value1&search[field2]=value2</b></li>
                    <li>URL/?<b>sort[field1]=1&sort[field2]=-1</b></li>
                    <li>URL/?<b>page=2&limit=1</b></li>
                </ul>
            `
        */
    const data = await getModelList(Category);

    res.status(200).send({
      error: false,
      count: data.length,
      result: data,
      details: await getModelListDetails(Category),
    });
  },
  read: async (req, res) => {
    /*
        #swagger.tags = ["Categories"]
        #swagger.summary = "Get Single Category"
    */
    const data = await Category.findOne({ _id: req.params.id });

    res.status(200).send({
      error: false,
      data,
    });
  },
  create: async (req, res) => {
    /*
            #swagger.tags = ["Categories"]
            #swagger.summary = "Create Category"
            #swagger.parameters['body'] = {
                in: 'body',
                required: true,
                schema: {
                    "userId": "test",
                    "title": "test",
                    "approvedByAdmin": "enum: [0,1,2,3]" // 0 waiting, 1 seen, 2 ok, 3 refused,
                    },
            }
    */
    const data = await Category.create(req.body);

    res.status(201).send({
      error: false,
      body: req.body,
      result: data,
    });
  },
  update: async (req, res) => {
    /*
            #swagger.tags = ["Categories"]
            #swagger.summary = "Create Category"
            #swagger.parameters['body'] = {
                in: 'body',
                required: true,
                schema: {
                    "userId": "test",
                    "title": "test",
                    "approvedByAdmin": "enum: [0,1,2,3]" // 0 waiting, 1 seen, 2 ok, 3 refused,
                    },
            }
    */
    const data = await Category.updateOne({ _id: req.params.id }, req.body, {
      runValidators: true,
    });

    res.status(200).send({
      error: false,
      data,
      new: await Category.findOne({ _id: req.params.id }),
    });
  },
  delete: async (req, res) => {
    /*
            #swagger.tags = ["Categories"]
            #swagger.summary = "Delete Category"
    */
    const data = await Category.deleteOne({ _id: req.params.id });

    res.status(data.deletedCount ? 204 : 404).send({
      error: !data.deletedCount,
      data,
    });
  },
};
