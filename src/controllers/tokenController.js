"use strict";

const Token = require("../models/tokenModel");
const {
  getModelList,
  getModelListDetails,
} = require("../middlewares/findSearchSortPage");

module.exports = {
  list: async (req, res) => {
    /*
        #swagger.ignore = true
    */
    const data = await getModelList(Token);

    res.status(200).send({
      error: false,
      count: data.length,
      result: data,
      details: await getModelListDetails(Token),
    });
  },
  read: async (req, res) => {
    /*
        #swagger.ignore = true
    */
    const data = await Token.findOne({ _id: req.params.id });

    res.status(200).send({
      error: false,
      data,
    });
  },
  create: async (req, res) => {
    /*
        #swagger.ignore = true
    */
    const data = await Token.create(req.body);

    res.status(201).send({
      error: false,
      body: req.body,
      result: data,
    });
  },
  update: async (req, res) => {
    /*
        #swagger.ignore = true
    */
    const data = await Token.updateOne({ _id: req.params.id }, req.body, {
      runValidators: true,
    });

    res.status(200).send({
      error: false,
      data,
      new: await Token.findOne({ _id: req.params.id }),
    });
  },
  delete: async (req, res) => {
    /*
        #swagger.ignore = true
    */
    const data = await Token.deleteOne({ _id: req.params.id });

    res.status(data.deletedCount ? 204 : 404).send({
      error: !data.deletedCount,
      data,
    });
  },
};