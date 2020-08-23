const express = require('express')
const http    = require("http");
const https   = require("https");
const cors    = require("cors");
const morgan  = require("morgan");
require('dotenv').config();
const routes = require('./libs/routes.js');
const bodyParser = require("body-parser");
const fileUpload = require('express-fileupload');
const path = require('path');
const api = express();

api.use(morgan('tiny'));
api.use(cors());
api.use(express.json());
api.use(bodyParser.json());
api.use(bodyParser.urlencoded({ 
    extended: false
}));
api.use(fileUpload());
// public floder
// api.use(express.static('./build'));

// api.use("/build", (req, res, next) => {
//     req.url = path.basename(req.originalUrl);
//     express.static(__dirname + '/static')(req, res, next);
// });
// api.use("/build", express.static(path.join(__dirname, "build")))

api.use("/api/v1", routes);

api.use((error, req, res, next) => {
    res.status(error.status || 500).send({
        error: {
            status: error.status || 500,
            message: error.message || "Internal Server Error",
        }
    });
});


if (process.env.USE_SSL) {
    http.createServer(api).listen(process.env.API_SERVER_PORT, () => {
        console.log('listening at port %s', process.env.API_SERVER_PORT);
    });
} else {
    const fs = require('fs');
    https.createServer({
        key: fs.readFileSync('../pem/server-key.pem'),
        cert: fs.readFileSync('../pem/server-cert.pem')
    }, api)
    .listen(process.env.API_SERVER_PORT);
}


module.exports.api = api;