const express = require('express');
const router = express.Router();
const { home, register, login } = require("../Controllers/auth_controller")
const signupSchema = require('../validators/auth-validators');
const validate = require('../midlware/validate--middle')


router.route("/").get(home);
router.route("/register").post(validate(signupSchema), register);
router.route("/login").post(login);

// router.route("/").get((req, res) => {
//     res
//         .status(200)
//         .send("Status is successful and you have permission to access this page on your device")
// });

module.exports = router;