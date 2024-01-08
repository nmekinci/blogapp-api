"use strict";

const router = require("express").Router();

const admin = require("../../controllers/views/adminController");
const permissions = require("../../middlewares/permissions");

router.all("/", permissions.isAdmin);

router.route("/")
    .get(admin.comment)
// router.route("/:id")
//     .get(admin.comment)
//     .put(admin.comment)
//     .delete(admin.comment)
router.all("/:id/update",admin.comment)

router.all("/:id/delete",admin.comment)

module.exports = router