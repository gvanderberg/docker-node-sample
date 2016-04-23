import express = require("express");
import HomeRoutes = require("./../HomeRoutes");
import UserRoutes = require("./../UserRoutes");

let app = express();

class BaseRoutes {
    get routes() {
        app.use("/", new HomeRoutes().routes);
        app.use("/users", new UserRoutes().routes);

        return app;
    }
}

export = BaseRoutes;