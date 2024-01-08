"use strict";

const router = require("express").Router();

const admin = require("../../controllers/views/adminController");
const permissions = require("../../middlewares/permissions");

router.all("/", permissions.isAdmin);

router.route("/")
    .get(admin.category)
// router.route("/:id")
//     .get(admin.category)
//     .put(admin.category)
//     .delete(admin.category)

router.all("/:id/update",admin.category)

router.all("/:id/delete",admin.category)

module.exports = router
