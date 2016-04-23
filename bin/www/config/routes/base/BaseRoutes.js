"use strict";
const express = require("express");
const HomeRoutes = require("./../HomeRoutes");
const UserRoutes = require("./../UserRoutes");
let app = express();
class BaseRoutes {
    get routes() {
        app.use("/", new HomeRoutes().routes);
        app.use("/users", new UserRoutes().routes);
        return app;
    }
}
module.exports = BaseRoutes;
