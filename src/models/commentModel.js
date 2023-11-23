"use strict";

const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema(
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
    approvedByAdmin: {
      type:String,
      required:true,
      enum: [0,1,2,3] // 0 waiting, 1 seen, 2 ok, 3 refused
    },
  },
  {
    collection: "comments",
    timestamps: true,
  }
);

module.exports = mongoose.model("Comment", CommentSchema);
