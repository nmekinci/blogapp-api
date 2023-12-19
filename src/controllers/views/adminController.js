"use strict";

const Blog = require("../../models/blogModel");
const Report = require("../../models/reportModel");
const Comment = require("../../models/commentModel");
const Category = require("../../models/categoryModel");

// approvedByAdmin: {
//     type:String,
//     required:true,
//     enum: ["waiting", "seen", "ok", "refused"]
//   }

//only "waiting" records
const filter = { approvedByAdmin: "waiting" };

const list = async (req, res, modelName, path, populate) => {
  const data = await res.getModelList(modelName, filter, populate);

  // res.render(`${modelName}List`, {
  res.render(path, {
    details: await res.getModelListDetails(modelName, filter),
    data,
    // pageUrl: req.originalUrl.replace(/[?|&]page=([^&]+)/gi, '')
  });
};
const read = async (req, res, modelName, populate) => {
  const data = await modelName
    .findOne({ _id: req.params.id, ...filter })
    .populate(populate);
  res.render(`${modelName}Read`, {
    data,
  });
};
const update = async (req, res, modelName,path) => {
  if (req && req.body) {
    req.body.approvedByAdmin = "ok";
  }
  // req?.body?.approvedByAdmin = 'ok'
  const data = await modelName.updateOne({ _id: req.params.id},req.body.approvedByAdmin,{ runValidators: true });
  // res.render(`${modelName}Update`, {
  res.render(path, {
    data,
  });
};
const del = async (req, res, modelName) => {
  if (req && req.body) {
    req.body.approvedByAdmin = "refused";
  }
  // req?.body?.approvedByAdmin = 'refused'
  const data = await modelName.deleteOne({ _id: req.params.id, ...filter });
  res.redirect("/admin");
};

module.exports = {
  // blogList : async (req,res) => {
  //     const data = await res.getModelList(Blog, filter, [creator])

  //     res.render('blogList', {
  //         details: await res.getModelListDetails(Blog, filter),
  //         data,
  //         // pageUrl: req.originalUrl.replace(/[?|&]page=([^&]+)/gi, '')
  //     })
  // },
  all: async (req, res) => {
    {
      const dataBlog = await res.getModelList(Blog, filter, ["creator"]);
      const dataCategory = await res.getModelList(Category, filter, ["userId"]);
      const dataComment = await res.getModelList(Comment, filter,["userId", "blogId"]);
      const dataReport = await res.getModelList(Report, filter, ["userId", "blogId"]);
      const detailsBlog = await res.getModelListDetails(Blog, filter);
      const detailsComment = await res.getModelListDetails(Comment, filter);
      const detailsReport = await res.getModelListDetails(Report, filter);
      const detailsCategory = await res.getModelListDetails(Category, filter);

      res.render("adminMain", {
        details: {
          detailsBlog,
          detailsCategory,
          detailsComment,
          detailsReport,
        },
        data: { 
          dataBlog, 
          dataCategory, 
          dataComment, 
          dataReport 
        },
        // pageUrl: req.originalUrl.replace(/[?|&]page=([^&]+)/gi, '')
      });
    }
  },
  blog: async (req, res) => {
    if (req?.params?.id) {
      switch (req?.method) {
        case "GET":
          await read(req, res, Blog, ["creator"]);
          break;
        case "PUT":
          await update(req, res, Blog,"adminBlog");
          break;
        case "DELETE":
          await del(req, res, Blog);
          break;
      }
    } else {
      list(req, res, Blog,"adminBlog", ["category","creator"]);
    }
  },
  // category : async (req,res) => {
  //     const data = await res.getModelList(Category, filter, [userId])

  //     res.render('categoryList', {
  //         details: await res.getModelListDetails(Category, filter),
  //         data,
  //         // pageUrl: req.originalUrl.replace(/[?|&]page=([^&]+)/gi, '')
  //     })
  // },
  category: async (req, res) => {
    if (req?.params?.id) {
      switch (req?.method) {
        case "GET":
          await read(req, res, Category, ["userId"]);
          break;
        case "PUT":
          await update(req, res, Category);
          break;
        case "DELETE":
          await del(req, res, Category);
          break;
      }
    } else {
      list(req, res, Category,"adminCategory", ["userId"]);
    }
  },

  // comment : async (req,res) => {
  //     const data = await res.getModelList(Comment, filter, [userId, blogId])

  //     res.render('commentList', {
  //         details: await res.getModelListDetails(Comment, filter),
  //         data,
  //         // pageUrl: req.originalUrl.replace(/[?|&]page=([^&]+)/gi, '')
  //     })
  // },
  comment: async (req, res) => {
    if (req?.params?.id) {
      switch (req?.method) {
        case "GET":
          await read(req, res, Comment, ["userId", "blogId"]);
          break;
        case "PUT":
          await update(req, res, Comment);
          break;
        case "DELETE":
          await del(req, res, Comment);
          break;
      }
    } else {
      list(req, res, Comment,"adminComment", ["userId", "blogId"]);
    }
  },
  // report : async (req,res) => {
  //     const data = await res.getModelList(Report, filter, [userId, blogId])

  //     res.render('reportList', {
  //         details: await res.getModelListDetails(Report, filter),
  //         data,
  //         // pageUrl: req.originalUrl.replace(/[?|&]page=([^&]+)/gi, '')
  //     })
  // },
  report: async (req, res) => {
    if (req?.params?.id) {
      switch (req?.method) {
        case "GET":
          await read(req, res, Report, ["userId", "blogId"]);
          break;
        case "PUT":
          await update(req, res, Report);
          break;
        case "DELETE":
          await del(req, res, Report);
          break;
      }
    } else {
      // list(req, res, Report,"adminReport", ["userId", "blogId"]);
      list(req, res, Report,"adminReport", ["userId", { path: "blogId", populate: { path: 'category' } }]);
    }
  },
};
