const express = require('express');
const errorMiddleware = require('./midlware/error-midlle');

const port = 3000;
const cors = require('cors');
const app = express();
const router = require('./Router/auth-router');
const Contact = require('../Server/Router/contact-router');
const serviceRoute = require('./Router/Service-router');
const adminRoute = require('./Router/admin-router');
const connect = require("./utils/db")

const corsOptions = {
    origin: 'http://localhost:5173',
    method: 'GET, POST, PUT, DELETE, PATCH, HEAD',
    credentials: true,
}

app.use(cors(corsOptions));
app.use(express.json());

app.use("/api/auth", router);
app.use("/api/form", Contact);
app.use("/api/data", serviceRoute);
app.use("/api/admin", adminRoute);

app.use(errorMiddleware)

// app.get("/", (req, res) => {
//     res.status(202).send("Hello server")
//     console.log("welcome to the server");
// });

connect().then(() => {
    app.listen(port, () => {
        console.log(`listening on port:  ${port}`);
    })
})