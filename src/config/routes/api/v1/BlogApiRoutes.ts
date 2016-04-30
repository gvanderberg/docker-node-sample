import express = require("express");
import BlogController = require("./../../../../app/controllers/BlogController");

let router = express.Router();

class BlogApiRoutes {
    private _blogController: BlogController;

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

export = BlogApiRoutes;