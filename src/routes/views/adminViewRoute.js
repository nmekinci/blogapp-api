"use strict";

const router = require("express").Router();

const admin = require("../../controllers/views/adminController");
const permissions = require("../../middlewares/permissions");

router.all("/", permissions.isAdmin);

router.route("/")
    .get(admin.blog, admin.category, admin.comment, admin.report);

router.route("/blogReq")
    .get(admin.blog)
router.route("/blogReq/:id")
    .get(admin.blog)
    .put(admin.blog)
    .delete(admin.blog)

router.route("/categoryReq")
    .get(admin.category)
router.route("/categoryReq/:id")
    .get(admin.category)
    .put(admin.category)
    .delete(admin.category)

router.route("/commentReq")
    .get(admin.comment)
router.route("/commentReq/:id")
    .get(admin.comment)
    .put(admin.comment)
    .delete(admin.comment)




router.route("/reportReq")
    .get(admin.report)


module.exports = router