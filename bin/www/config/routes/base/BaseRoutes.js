"use strict";
const express = require("express");
const path = require("path");
const BlogApiRoutes = require("./../api/v1/BlogApiRoutes");
const UserApiRoutes = require("./../api/v1/UserApiRoutes");
const BlogRoutes = require("./../BlogRoutes");
const HomeRoutes = require("./../HomeRoutes");
const UserRoutes = require("./../UserRoutes");
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
module.exports = BaseRoutes;
//# sourceMappingURL=BaseRoutes.js.map