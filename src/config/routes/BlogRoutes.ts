import express = require("express");
import BlogController = require("./../../app/controllers/BlogController");

let router = express.Router();

class BlogRoutes {
    private _blogController: BlogController;

    constructor() {
        this._blogController = new BlogController();
    }

    get routes() {
        var controller = this._blogController;

        router.get("/articles", controller.retrieve);
        //router.delete("/articles/:_id", controller.delete);
        //router.put("/articles/:_id", controller.update);

        router.get("/articles/view/:_id", controller.findById);

        router.get("/articles/post", (req, res) => {
            res.render("articles/post");
        });

        router.post("/articles/post", controller.create);

        return router;
    }
}

Object.seal(BlogRoutes);

export = BlogRoutes;