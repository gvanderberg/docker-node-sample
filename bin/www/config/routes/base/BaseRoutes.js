"use strict";
const express = require("express");
const path = require("path");
const HomeRoutes = require("./../HomeRoutes");
const UserRoutes = require("./../UserRoutes");
let app = express();
class BaseRoutes {
    get routes() {
        app.set("views", path.join(__dirname, "../../../views"));
        console.log(app.get("views"));
        app.use("/", new HomeRoutes().routes);
        app.use("/", new UserRoutes().routes);
        return app;
    }
}
module.exports = BaseRoutes;
