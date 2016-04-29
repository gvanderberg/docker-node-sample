import express = require("express");
import path = require("path");
import BlogRoutes = require("./../BlogRoutes");
import HomeRoutes = require("./../HomeRoutes");
import UserRoutes = require("./../UserRoutes");

let app = express();

class BaseRoutes {
    get routes() {
        app.set("views", path.join(__dirname, "./../../../views"));

        app.use("/", new BlogRoutes().routes);
        app.use("/", new HomeRoutes().routes);
        app.use("/", new UserRoutes().routes);

        return app;
    }
}

export = BaseRoutes;