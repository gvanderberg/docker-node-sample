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
                res.render("blogs/list", { "title": "Ninja Blog", "blogs": result });
            });
        });

        router.get("/create", (req, res) => {
            console.log("Got a GET request for the Blog Create page.");
            res.render("blogs/create", { "title": "Ninja Blog" });
        });

        router.get("/view/:_id", (req, res) => {
            let id = req.params._id;

            console.log("Got a GET request for the Blog View page.");
            repository.findById(id, (error, result) => {
                res.render("blogs/view", { "title": result.title, "blog": result });
            });
        });

        return router;
    }
}

Object.seal(BlogRoutes);

export = BlogRoutes;