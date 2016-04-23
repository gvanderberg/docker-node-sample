"use strict";
const ArticleBusiness = require("./../business/UserBusiness");
class ArticleController {
    create(req, res) { }
    delete(req, res) { }
    findById(req, res) { }
    retrieve(req, res) {
        try {
            var business = new ArticleBusiness();
            business.retrieve((error, result) => {
                if (error) {
                    res.send({ "error": "error" });
                }
                else {
                    res.render("articles/list", { title: "Articles", articles: result });
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
