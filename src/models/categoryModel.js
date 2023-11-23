"use strict";

const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    title:{
        type:String,
        required: true,
        trim:true,
        unique: true
    },
    approvedByAdmin:{
      type: Boolean,
      default: false,
    },
  },
  {
    collection: "categories",
    timestamps: true,
  }
);

module.exports = mongoose.model("Category", CategorySchema);
