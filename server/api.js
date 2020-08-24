const express = require('express')
const http    = require("http");
const https   = require("https");
const cors    = require("cors");
const morgan  = require("morgan");
require('dotenv').config();
const routes = require('./libs/routes.js');
const bodyParser = require("body-parser");
const fileUpload = require('express-fileupload');
const { constants } = require('crypto');

const api = express();
const fs = require('fs');

api.use(morgan('tiny'));
api.use(cors());
api.use(express.json());
api.use(bodyParser.json());
api.use(bodyParser.urlencoded({ extended: false } ));
api.use(fileUpload());

// public floder
// api.use(express.static('./build'));

// api.use("/build", (req, res, next) => {
//     req.url = path.basename(req.originalUrl);
//     express.static(__dirname + '/static')(req, res, next);
// });
// api.use("/build", express.static(path.join(__dirname, "build")))

api.use("/api/v1", routes);

api.get("/welcome", (req, res) => {
    res.send("Welcome to my 🏠");
});

api.use((error, req, res, next) => {
    res.status(error.status || 500).send({
        error: {
            status: error.status || 500,
            message: error.message || "Internal Server Error",
        }
    });
});

if (process.env.SSL_ENABLE != "true") {
    http.createServer(api).listen(process.env.DEFAULT_PORT, () => {
        console.log('Server is running on %s mode, listening at port %s', process.env.NODE_ENV , process.env.DEFAULT_PORT);
    });
} else {
    const PORT = (process.env.SSL_ENABLE == "true") ? process.env.SSL_PORT : process.env.DEFAULT_PORT;
    const serverOptions = {
        httpsServerOptions: {
            secureOptions: constants.SSL_OP_NO_TLSv1 | constants.SSL_OP_NO_TLSv1_1,
            ca: [fs.readFileSync('./ssl/digiCertCA.crt')],
            key: fs.readFileSync('./ssl/server.key'),
            cert: fs.readFileSync('./ssl/server.crt'),
            ciphers : ["ECDHE-RSA-AES256-GCM-SHA384","ECDHE-RSA-AES128-GCM-SHA256","ECDH-RSA-AES128-SHA256","DHE-RSA-AES128-SHA256","HIGH","!AES128-GCM-SHA256","!AES128-SHA","!ECDHE-RSA-AES256-SHA384","!ECDHE-RSA-AES256-SHA","!AES256-GCM-SHA384", "!AES256-SHA256", "!AES256-SHA", "!ECDHE-RSA-AES128-SHA", "!TLS_RSA_WITH_AES_128_GCM_SHA256", "!AES128-SHA256", "!TLS_RSA_WITH_AES_128_CBC_SHA", "!aNULL", "!eNULL", "!EXPORT", "!DES", "!RC4", "!MD5", "!PSK", "!SRP", "!CAMELLIA" ].join(':'),
            honorCipherOrder: true
        }
    };
    const https_server = https.createServer(serverOptions, api);
    https_server.listen(PORT, () => {
        console.log('Server is running on %s mode, listening at port %s', process.env.NODE_ENV , process.env.DEFAULT_PORT);
    });
}



module.exports.api = api;