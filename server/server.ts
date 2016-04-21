/// <reference path="../typings/main.d.ts" />

import express = require("express");
import bodyParser = require("body-parser");
import cookieParser = require("cookie-parser");
import jade = require("jade");
import path = require("path");
import routes = require("./routes/index");

const PORT = 8080;

let app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", routes);

if (app.get("env") === "development") {
    app.use(function (req, res, next) {
        res.render('error', {
            //message: err.message,
            //error: err
        });
    });
}

let server = app.listen(PORT, function () {
    let host = server.address().address;
    let port = server.address().port;

    console.log("listening on http://%s:%s", host, port);
});