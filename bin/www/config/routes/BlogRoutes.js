"use strict";
const express = require("express");
const BlogController = require("./../../app/controllers/BlogController");
let router = express.Router();
class BlogRoutes {
    constructor() {
        this._blogController = new BlogController();
    }
    get routes() {
        var controller = this._blogController;
        router.delete("/articles/:_id", controller.delete);
        router.get("/articles", controller.retrieve);
        router.get("/articles/:_id", controller.findById);
        router.post("/articles", controller.create);
        router.put("/articles/:_id", controller.update);
        router.get("/articles/post", (req, res) => {
            res.render("articles/post");
        });
        return router;
    }
}
Object.seal(BlogRoutes);
module.exports = BlogRoutes;
