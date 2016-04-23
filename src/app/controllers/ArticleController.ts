import express = require("express");
import IBaseController = require("./interfaces/base/BaseController");
import IArticleModel = require("./../models/interfaces/ArticleModel");
import ArticleBusiness = require("./../business/UserBusiness");

class ArticleController implements IBaseController<ArticleBusiness> {
    create(req: express.Request, res: express.Response): void { }
    delete(req: express.Request, res: express.Response): void { }
    findById(req: express.Request, res: express.Response): void { }
    retrieve(req: express.Request, res: express.Response): void { 
        try {
            var business = new ArticleBusiness();

            business.retrieve((error, result) => {
                if (error) {
                    res.send({ "error": "error" });
                } else {
                    res.render("articles/list", { title: "Articles", data: result });
                }
            });
        }
        catch (error) {
            console.log(error);
            res.send({ "error": "error in your request" });
        }
    }
    update(req: express.Request, res: express.Response): void { }
}

export = ArticleController;