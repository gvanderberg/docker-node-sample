/// <reference path="../typings/express/express.d.ts" />
/// <reference path="../typings/body-parser/body-parser.d.ts" />
/// <reference path="../typings/cookie-parser/cookie-parser.d.ts" />

import express = require("express");
import bodyParser = require("body-parser");
import cookieParser = require("cookie-parser");
import path = require("path");
import routes = require("./routes/index");

const PORT = 80;

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", routes);

let server = app.listen(PORT, function () {
    let host = server.address().address;
    let port = server.address().port;

    console.log("listening on http://%s:%s", host, port);
});