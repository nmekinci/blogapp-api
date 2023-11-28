"use strict";

const mongoose = require("mongoose");

const ReportSchema = new mongoose.Schema(
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
    report:{
      type:String
    },
    approvedByAdmin: {
      type:String,
      required:true,
      enum: ["waiting", "seen", "ok", "refused"]
    },
  },
  {
    collection: "reports",
    timestamps: true,
  }
);

module.exports = mongoose.model("Report", ReportSchema);
