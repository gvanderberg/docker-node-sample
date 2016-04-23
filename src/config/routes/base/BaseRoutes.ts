import express = require("express");
import path = require("path");
import HomeRoutes = require("./../HomeRoutes");
import UserRoutes = require("./../UserRoutes");

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

export = BaseRoutes;