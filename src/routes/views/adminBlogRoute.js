"use strict";

const router = require("express").Router();

const admin = require("../../controllers/views/adminController");
const permissions = require("../../middlewares/permissions");

router.all("/", permissions.isAdmin);

router.route("/")
    .get(admin.blog)
// router.route("/:id")
//     .get(admin.blog)
//     .put(admin.blog)
//     .delete(admin.blog)

router.all("/:id/update",admin.blog)
    // .put(admin.blog)

router.all("/:id/delete",admin.blog)
    // .delete(admin.blog)

module.exports = router
