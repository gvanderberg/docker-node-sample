import express = require("express");
import ArticleController = require("./../../app/controllers/ArticleController");

let router = express.Router();

class ArticleRoutes {
    private _articleController: ArticleController;

    constructor() {
        this._articleController = new ArticleController();
    }

    get routes() {
        var controller = this._articleController;

        router.get("/articles", controller.retrieve);
        router.get("/articles/edit/:_id", controller.findById);
        router.delete("/articles/:_id", controller.delete);
        router.post("/articles", controller.create);
        router.put("/articles/:_id", controller.update);

        return router;
    }
}

Object.seal(ArticleRoutes);

export = ArticleRoutes;