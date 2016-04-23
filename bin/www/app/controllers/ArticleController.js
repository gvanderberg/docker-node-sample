"use strict";
const ArticleBusiness = require("./../business/ArticleBusiness");
class ArticleController {
    create(req, res) {
        try {
            var article = req.body;
            var business = new ArticleBusiness();
            business.create(article, (error, result) => {
                if (error) {
                    res.render("error", error);
                }
                else {
                    res.redirect("/articles");
                }
            });
        }
        catch (error) {
            console.log(error);
            res.send({ "error": "error in your request" });
        }
    }
    delete(req, res) { }
    findById(req, res) {
        try {
            var _id = req.params._id;
            var business = new ArticleBusiness();
            business.findById(_id, (error, result) => {
                if (error) {
                    res.send({ "error": "error" });
                }
                else {
                    res.render("articles/article", { title: result.title, article: result });
                }
            });
        }
        catch (e) {
            console.log(e);
            res.send({ "error": "error in your request" });
        }
    }
    retrieve(req, res) {
        try {
            var business = new ArticleBusiness();
            business.retrieve((error, result) => {
                if (error) {
                    res.send({ "error": error });
                }
                else {
                    res.render("articles/list", { title: "Ninja", articles: result });
                }
            });
        }
        catch (error) {
            console.log(error);
            res.send({ "error": "error in your request" });
        }
    }
    update(req, res) { }
}
module.exports = ArticleController;
