/// <reference path="./typings/main.d.ts" />

import express = require("express");
import path = require("path");
import Middlewares = require("./config/middlewares/base/BaseMiddlewares");

const PORT = 8080;

let app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");
app.use(express.static(path.join(__dirname, "public")));
app.use(Middlewares.configuration);

if (app.get("env") === "development") {
    app.use(function (req, res, next) {
        res.render('error', {
            message: "",
            error: {}
        });
    });
}

let server = app.listen(PORT, function () {
    let host = server.address().address;
    let port = server.address().port;

    console.log("listening on http://%s:%s", host, port);
});