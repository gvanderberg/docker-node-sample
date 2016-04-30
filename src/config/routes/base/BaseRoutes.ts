import express = require("express");
import path = require("path");
import BlogApiRoutes = require("./../api/v1/BlogApiRoutes");
import UserApiRoutes = require("./../api/v1/UserApiRoutes");
import BlogRoutes = require("./../BlogRoutes");
import HomeRoutes = require("./../HomeRoutes");
import UserRoutes = require("./../UserRoutes");

let app = express();

class BaseRoutes {
    get routes() {
        app.set("views", path.join(__dirname, "./../../../views"));

        // api routes
        app.use("/api/v1/blogs", new BlogApiRoutes().routes);
        app.use("/api/v1/users", new UserApiRoutes().routes);
        
        // view routes
        app.use("/", new HomeRoutes().routes);
        app.use("/blogs", new BlogRoutes().routes);
        app.use("/users", new UserRoutes().routes);

        return app;
    }
}

export = BaseRoutes;