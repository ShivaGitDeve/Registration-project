const express = require('express');
const servicesForm = require("../Controllers/Services-controller");
const router = express.Router();




router.route("/services").get(servicesForm);

module.exports = router;