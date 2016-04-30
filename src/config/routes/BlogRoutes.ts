import express = require("express");
import BlogRepository = require("./../../app/repositories/BlogRepository");

let router = express.Router();

class BlogRoutes {
    private _blogRepository: BlogRepository;

    constructor() {
        this._blogRepository = new BlogRepository();
    }

    get routes() {
        let repository = this._blogRepository;

        router.get("/", (req, res) => {
            console.log("Got a GET request for the Blogs page.");
            repository.retrieve((error, result) => {
                res.render("blogs/list", { "title": "Ninja Blog", "result": result });
            });
        });

        router.get("/create", (req, res) => {
            console.log("Got a GET request for the Create page.");
            res.render("blogs/create", { "title": "Ninja Blog" });
        });

        //router.delete("/:_id", controller.delete);
        //router.get("/", controller.retrieve);
        //router.get("/:_id", controller.findById);
        //router.post("/", controller.create);
        //router.put("/:_id", controller.update);

        return router;
    }
}

Object.seal(BlogRoutes);

export = BlogRoutes;