// Action - description of what you want to do ,
// Dispatch - is the function tha carries out that action
const User = require("../models/user-model")
const bcrypt = require("bcryptjs");

const home = async (req, res) => {
    try {
        res
            .status(202)
            .send(
                "Welcome to the home page"
            )
    } catch (error) {
        console.log(error);
    }

};

const register = async (req, res) => {
    try {
        console.log(req.body)
        const { username, email, phone, password } = req.body;

        const userExit = await User.findOne({ email: email })

        if (userExit) {
            return res.status(400).json({ message: "email already registered" })
        }
        const saltRound = 10;
        const hash = await bcrypt.hash(password, saltRound);

        const userCreated = await User.create({ username, email, phone, password: hash });

        res.status(201).json({
            msg: userCreated,
            token: await userCreated.genrateToken(),
            userId: userCreated._id.toString(),
            // msg: "registered successfully"
        });
    } catch (error) {
        res.status(500).json("internal error")
    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const userExit = await User.findOne({ email })
        console.log(userExit);

        if (!userExit) {
            return res.status(404).json({ msg: "Invalid Credentials" })
        }

        const user = await bcrypt.compare(password, userExit.password);

        if (user) {
            res.status(200).json({
                msg: "Login Successful"
            });
        } else {
            res.status(400).json({ msg: "Invalid Email Or Password" })
        }

    } catch (error) {
        // res.status(500).json("problem aagyi bhai jaa kar code check kar")
        next(error);
    }
}

module.exports = { home, register, login };
