import express = require("express");
import IBaseController = require("./interfaces/base/BaseController");
import IArticleModel = require("./../models/interfaces/ArticleModel");
import ArticleBusiness = require("./../business/ArticleBusiness");

class ArticleController implements IBaseController<ArticleBusiness> {
    create(req: express.Request, res: express.Response): void {
        try {
            var article: IArticleModel = <IArticleModel>req.body;
            var business = new ArticleBusiness();

            business.create(article, (error, result) => {
                if (error) {
                    res.render("error", error);
                } else {
                    res.redirect("/articles");
                }
            });
        } catch (error) {
            console.log(error);
            res.send({ "error": "error in your request" });
        }
    }
    delete(req: express.Request, res: express.Response): void { }
    findById(req: express.Request, res: express.Response): void {
        try {
            var _id: string = req.params._id;
            var business = new ArticleBusiness();

            business.findById(_id, (error, result) => {
                if (error) {
                    res.send({ "error": "error" });
                } else {
                    res.render("articles/article", { title: result.title, article: result });
                }
            });
        } catch (e) {
            console.log(e);
            res.send({ "error": "error in your request" });
        }
    }
    retrieve(req: express.Request, res: express.Response): void {
        try {
            var business = new ArticleBusiness();

            business.retrieve((error, result) => {
                if (error) {
                    res.send({ "error": error });
                } else {
                    res.render("articles/list", { title: "Ninja", articles: result });
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