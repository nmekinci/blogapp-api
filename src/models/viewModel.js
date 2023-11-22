"use strict";

const mongoose = require("mongoose");

const ViewSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    blogId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Blog",
      required: true,
    },
    itWasAGuest: {
      type: Boolean,
      default: false,
    },
  },
  {
    collection: "views",
    timestamps: true,
  }
);

module.exports = mongoose.model("View", ViewSchema);
