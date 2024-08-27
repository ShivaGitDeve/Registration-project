const mongoose = require('mongoose');

const URL = "mongodb://127.0.0.1:27017/mern-admin";

// mongoose.connect(URL);

const connect = async () => {
    try {
        await mongoose.connect(URL)
        console.log("connection established successfully")

    } catch (error) {
        console.log("database connection error")
        process.exit(0);
    }
}

module.exports = connect;
