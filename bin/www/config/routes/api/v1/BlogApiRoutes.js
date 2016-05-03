"use strict";
const express = require("express");
const BlogController = require("./../../../../app/controllers/BlogController");
let router = express.Router();
class BlogApiRoutes {
    constructor() {
        this._blogController = new BlogController();
    }
    get routes() {
        let controller = this._blogController;
        router.get("/", controller.retrieve);
        router.post("/", controller.create);
        router.get("/:_id", controller.findById);
        router.put("/:_id", controller.update);
        router.delete("/:_id", controller.delete);
        return router;
    }
}
Object.seal(BlogApiRoutes);
module.exports = BlogApiRoutes;
//# sourceMappingURL=BlogApiRoutes.js.map