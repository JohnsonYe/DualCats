const express = require('express')
const http    = require("http");
const cors    = require("cors");
const morgan  = require("morgan");
require('dotenv').config();
const bodyParser = require("body-parser");
const path = require('path');
const api = express();

api.use(morgan('tiny'));
api.use(cors());
api.use(express.static('./build'));

api.use((error, req, res, next) => {
    res.status(error.status || 500).send({
        error: {
            status: error.status || 500,
            message: error.message || "Internal Server Error",
        }
    });
});


http.createServer(api).listen(process.env.CLIENT_PORT, () => {
    console.log('listening at port %s', process.env.CLIENT_PORT);
});

module.exports.api = api;