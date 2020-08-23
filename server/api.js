const express = require('express')
const http    = require("http");
const cors    = require("cors");
const morgan  = require("morgan");
require('dotenv').config();
const routes = require('./libs/routes.js');
const bodyParser = require("body-parser");
const fileUpload = require('express-fileupload');
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
api.use(express.static('./build'));

api.use("/api/v1", routes);

api.use((error, req, res, next) => {
    res.status(error.status || 500).send({
        error: {
            status: error.status || 500,
            message: error.message || "Internal Server Error",
        }
    });
});


http.createServer(api).listen(process.env.API_SERVER_PORT, () => {
    console.log('listening at port %s', process.env.API_SERVER_PORT);
});

module.exports.api = api;