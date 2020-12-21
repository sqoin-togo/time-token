'use strict';


const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const router = require('./src/router/router');
const config = require('./src/config');
const app = express();
var cors = require('cors')
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(router);
app.use(cors());
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const server = app.listen(config.port,
    err => handleServerListening(err, server));



function handleServerListening(err, server) {
    if (err)
        return console.error('[!] Catched an error while listening:\n', err);
    console.log(`[*] Server started on port ${config.port}`);
}

// Extended: https://swagger.io/specification/#infoObject
const swaggerOptions = {
    swaggerDefinition: {
        info: {
            version: "1.0.0",
            title: "timeToken API",
            description: "timeToken API Information",
            contact: {
                name: "Tarek Jarrar"
            },
            servers: ["http://localhost:3002"]
        }
    },
    apis: ['.router/*.js']
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));




/*const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'ILYES@1991',
    database: 'time_token'
});
connection.connect((err) => {
    if (err) throw err;
    console.log('Connected!');
});*/