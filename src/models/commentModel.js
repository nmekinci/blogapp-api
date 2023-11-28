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
    comment:{
      type:String,
      required:true,
    },
    approvedByAdmin: {
      type:String,
      required:true,
      enum: ["waiting", "seen", "ok", "refused"]
    },
  },
  {
    collection: "comments",
    timestamps: true,
  }
);

module.exports = mongoose.model("Comment", CommentSchema);
