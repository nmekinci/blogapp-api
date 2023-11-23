"use strict";

const mongoose = require("mongoose");

const LikeSchema = new mongoose.Schema(
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
    }
  },
  {
    collection: "likes",
    timestamps: true,
  }
);

module.exports = mongoose.model("Like", LikeSchema);