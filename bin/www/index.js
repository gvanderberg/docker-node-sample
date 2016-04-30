/// <reference path="./../typings/main.d.ts" />
"use strict";
const express = require("express");
const path = require("path");
const Middlewares = require("./config/middlewares/base/BaseMiddlewares");
const PORT = 8080;
let app = express();
// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");
app.use(Middlewares.configuration);
app.use(express.static(path.join(__dirname, "public")));
// catch 404 and forward to error handler
app.use((req, res, next) => {
    var err = new Error("Not Found");
    err["status"] = 404;
    next(err);
});
// development error handler will print stacktrace
if (app.get("env") === "development") {
    app.use((err, req, res, next) => {
        res.status(err["status"] || 500);
        res.render("error", { message: err.message, error: err });
    });
}
// production error handler no stacktraces leaked to user
app.use((err, req, res, next) => {
    res.status(err["status"] || 500);
    res.render("error", { message: err.message, error: {} });
});
let server = app.listen(PORT, function () {
    let host = server.address().address;
    let port = server.address().port;
    console.log("listening on http://%s:%s", host, port);
});
module.exports = app;
