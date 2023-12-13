"use strict";

const Report = require("../models/reportModel");

module.exports = {
  list: async (req, res) => {
    /*
            #swagger.tags = ["Reports"]
            #swagger.summary = "List Reports"
            #swagger.description = `
                You can send query with endpoint for search[], sort[], page and limit.
                <ul> Examples:
                    <li>URL/?<b>search[field1]=value1&search[field2]=value2</b></li>
                    <li>URL/?<b>sort[field1]=1&sort[field2]=-1</b></li>
                    <li>URL/?<b>page=2&limit=1</b></li>
                </ul>
            `
        */
    const data = await res.getModelList(Report);

    res.status(200).send({
      error: false,
      count: data.length,
      result: data,
      details: await res.getModelListDetails(Report),
    });
  },
  read: async (req, res) => {
    /*
        #swagger.tags = ["Reports"]
        #swagger.summary = "Get Single Report"
    */
    const data = await Report.findOne({ _id: req.params.id });

    res.status(200).send({
      error: false,
      data,
    });
  },
  create: async (req, res) => {
    /*
            #swagger.tags = ["Reports"]
            #swagger.summary = "Create Report"
            #swagger.parameters['body'] = {
                in: 'body',
                required: true,
                schema: {
                    "userId": "test",
                    "blogId": "test",
                    "approvedByAdmin": enum: ["waiting", "seen", "ok", "refused"],
                    },
            }
    */
    const data = await Report.create(req.body);

    res.status(201).send({
      error: false,
      body: req.body,
      result: data,
    });
  },
  update: async (req, res) => {
    /*
            #swagger.tags = ["Reports"]
            #swagger.summary = "Create Report"
            #swagger.parameters['body'] = {
                in: 'body',
                required: true,
                schema: {
                    "userId": "test",
                    "blogId": "test",
                    "approvedByAdmin": enum: ["waiting", "seen", "ok", "refused"],
                    },
            }
    */
    const data = await Report.updateOne({ _id: req.params.id }, req.body, {
      runValidators: true,
    });

    res.status(200).send({
      error: false,
      data,
      new: await Report.findOne({ _id: req.params.id }),
    });
  },
  delete: async (req, res) => {
    /*
            #swagger.tags = ["Reports"]
            #swagger.summary = "Delete Report"
    */
    const data = await Report.deleteOne({ _id: req.params.id });

    res.status(data.deletedCount ? 204 : 404).send({
      error: !data.deletedCount,
      data,
    });
  },
};
