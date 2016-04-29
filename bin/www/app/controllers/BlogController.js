"use strict";
const BlogBusiness = require("./../business/BlogBusiness");
class BlogController {
    create(req, res) {
        try {
            var model = req.body;
            var business = new BlogBusiness();
            business.create(model, (error, result) => {
                if (error) {
                    res.render("error", error);
                }
                else {
                    res.redirect("/articles");
                }
            });
        }
        catch (e) {
            console.log(e);
            res.send({ "error": "error in your request" });
        }
    }
    delete(req, res) { }
    findById(req, res) {
        try {
            var _id = req.params._id;
            var business = new BlogBusiness();
            business.findById(_id, (error, result) => {
                if (error) {
                    res.send({ "error": "error" });
                }
                else {
                    res.render("articles/view", { title: result.title, article: result });
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
            var business = new BlogBusiness();
            business.retrieve((error, result) => {
                if (error) {
                    res.send({ "error": error });
                }
                else {
                    res.render("articles/list", { title: "Ninja", articles: result });
                }
            });
        }
        catch (e) {
            console.log(e);
            res.send({ "error": "error in your request" });
        }
    }
    update(req, res) { }
}
module.exports = BlogController;
