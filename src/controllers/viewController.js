"use strict";

const View = require("../models/viewModel");
const {
  getModelList,
  getModelListDetails,
} = require("../middlewares/findSearchSortPage");

module.exports = {
  list: async (req, res) => {
    /*
            #swagger.tags = ["Views"]
            #swagger.summary = "List Views"
            #swagger.description = `
                You can send query with endpoint for search[], sort[], page and limit.
                <ul> Examples:
                    <li>URL/?<b>search[field1]=value1&search[field2]=value2</b></li>
                    <li>URL/?<b>sort[field1]=1&sort[field2]=-1</b></li>
                    <li>URL/?<b>page=2&limit=1</b></li>
                </ul>
            `
        */
    const data = await getModelList(View);

    res.status(200).send({
      error: false,
      count: data.length,
      result: data,
      details: await getModelListDetails(View),
    });
  },
  read: async (req, res) => {
    /*
        #swagger.tags = ["Views"]
        #swagger.summary = "Get Single View"
    */
    const data = await View.findOne({ _id: req.params.id });

    res.status(200).send({
      error: false,
      data,
    });
  },
  create: async (req, res) => {
    /*
            #swagger.tags = ["Views"]
            #swagger.summary = "Create View"
            #swagger.parameters['body'] = {
                in: 'body',
                required: true,
                schema: {
                    "userId": "test",
                    "blogId": "test",
                    "isWasAGuest": false,
                    },
            }
    */
    const data = await View.create(req.body);

    res.status(201).send({
      error: false,
      body: req.body,
      result: data,
    });
  },
  update: async (req, res) => {
    /*
            #swagger.tags = ["Views"]
            #swagger.summary = "Create View"
            #swagger.parameters['body'] = {
                in: 'body',
                required: true,
                schema: {
                    "userId": "test",
                    "blogId": "test",
                    "isWasAGuest": false,
                    },
            }
    */
    const data = await View.updateOne({ _id: req.params.id }, req.body, {
      runValidators: true,
    });

    res.status(200).send({
      error: false,
      data,
      new: await View.findOne({ _id: req.params.id }),
    });
  },
  delete: async (req, res) => {
    /*
            #swagger.tags = ["Views"]
            #swagger.summary = "Delete View"
    */
    const data = await View.deleteOne({ _id: req.params.id });

    res.status(data.deletedCount ? 204 : 404).send({
      error: !data.deletedCount,
      data,
    });
  },
};
