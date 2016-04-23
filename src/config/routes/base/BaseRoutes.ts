import express = require("express");
import path = require("path");
import ArticleRoutes = require("./../ArticleRoutes");
import HomeRoutes = require("./../HomeRoutes");
import UserRoutes = require("./../UserRoutes");

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

export = BaseRoutes;