import express = require("express");
import IBaseController = require("./interfaces/base/BaseController");
import IBlogModel = require("./../models/interfaces/BlogModel");
import BlogBusiness = require("./../business/BlogBusiness");

class BlogController implements IBaseController<BlogBusiness> {
    create(req: express.Request, res: express.Response): void {
        try {
            var model: IBlogModel = <IBlogModel>req.body;
            var business = new BlogBusiness();

            business.create(model, (error, result) => {
                if (error) {
                    res.render("error", error);
                } else {
                    res.redirect("/articles");
                }
            });
        } catch (e) {
            console.log(e);
            res.send({ "error": "error in your request" });
        }
    }
    delete(req: express.Request, res: express.Response): void { }
    findById(req: express.Request, res: express.Response): void {
        try {
            var _id: string = req.params._id;
            var business = new BlogBusiness();

            business.findById(_id, (error, result) => {
                if (error) {
                    res.send({ "error": "error" });
                } else {
                    res.render("articles/view", { title: result.title, article: result });
                }
            });
        } catch (e) {
            console.log(e);
            res.send({ "error": "error in your request" });
        }
    }
    retrieve(req: express.Request, res: express.Response): void {
        try {
            var business = new BlogBusiness();

            business.retrieve((error, result) => {
                if (error) {
                    res.send({ "error": error });
                } else {
                    res.render("articles/list", { title: "Ninja", articles: result });
                }
            });
        }
        catch (e) {
            console.log(e);
            res.send({ "error": "error in your request" });
        }
    }
    update(req: express.Request, res: express.Response): void { }
}

export = BlogController;