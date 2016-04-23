/// <reference path="./../typings/main.d.ts" />
"use strict";
const express = require("express");
const path = require("path");
const Middlewares = require("./config/middlewares/base/BaseMiddlewares");
const PORT = 8080;
let app = express();
app.use(Middlewares.configuration);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");
app.use(express.static(path.join(__dirname, "public")));
if (app.get("env") === "development") {
    app.use(function (req, res, next) {
        res.render("error", {
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
