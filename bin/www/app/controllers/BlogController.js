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
                    res.send({ "success": "success" });
                }
            });
        }
        catch (e) {
            console.log(e);
            res.send({ "error": "error in your request" });
        }
    }
    delete(req, res) {
        try {
            var id = req.params._id;
            var business = new BlogBusiness();
            business.delete(id, (error, result) => {
                if (error) {
                    res.send({ "error": error });
                }
                else {
                    res.send({ "success": "success" });
                }
            });
        }
        catch (e) {
            console.log(e);
            res.send({ "error": "error in your request" });
        }
    }
    findById(req, res) {
        try {
            var _id = req.params._id;
            var business = new BlogBusiness();
            business.findById(_id, (error, result) => {
                if (error) {
                    res.send({ "error": "error" });
                }
                else {
                    res.send(result);
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
                    //res.send(result);
                    res.render("articles/list", { title: "Ninja", data: result });
                }
            });
        }
        catch (e) {
            console.log(e);
            res.send({ "error": "error in your request" });
        }
    }
    update(req, res) {
        try {
            var _id = req.params._id;
            var user = req.body;
            var business = new BlogBusiness();
            business.update(_id, user, (error, result) => {
                if (error) {
                    res.send({ "error": error });
                }
                else {
                    res.send({ "success": "success" });
                }
            });
        }
        catch (e) {
            console.log(e);
            res.send({ "error": "error in your request" });
        }
    }
}
module.exports = BlogController;
