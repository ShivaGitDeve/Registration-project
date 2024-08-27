const express = require('express');
const router = express.Router();
// const getAllUsers = require('../Controllers/admin-controller');
// const getAllContacts = require('../Controllers/admin-controller');
const adminController = require("../Controllers/admin-controller");

router.route("/users").get(adminController.getAllUsers)
router.route("/contacts").get(adminController.getAllContacts)

module.exports = router;