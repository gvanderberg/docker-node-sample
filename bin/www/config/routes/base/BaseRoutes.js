"use strict";
const express = require("express");
const path = require("path");
const ArticleRoutes = require("./../ArticleRoutes");
const HomeRoutes = require("./../HomeRoutes");
const UserRoutes = require("./../UserRoutes");
let app = express();
class BaseRoutes {
    get routes() {
        app.set("views", path.join(__dirname, "./../../../views"));
        app.use("/", new ArticleRoutes().routes);
        app.use("/", new HomeRoutes().routes);
        app.use("/", new UserRoutes().routes);
        return app;
    }
}
module.exports = BaseRoutes;
