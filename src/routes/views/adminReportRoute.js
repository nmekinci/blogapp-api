"use strict";

const router = require("express").Router();

const admin = require("../../controllers/views/adminController");
const permissions = require("../../middlewares/permissions");

router.all("/", permissions.isAdmin);

router.route("/")
    .get(admin.report)
router.route("/:id")
    .get(admin.report)
    .put(admin.report)
    .delete(admin.report)

module.exports = router