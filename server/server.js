/// <reference path="../typings/main.d.ts" />
"use strict";
const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const path = require("path");
const routes = require("./routes/index");
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
        res.render('error', {});
    });
}
let server = app.listen(PORT, function () {
    let host = server.address().address;
    let port = server.address().port;
    console.log("listening on http://%s:%s", host, port);
});
//# sourceMappingURL=server.js.map