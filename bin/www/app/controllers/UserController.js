"use strict";
const UserBusiness = require("./../business/UserBusiness");
class UserController {
    create(req, res) {
        try {
            var user = req.body;
            var business = new UserBusiness();
            business.create(user, (error, result) => {
                if (error) {
                    res.send(error);
                }
                else {
                    res.json({ "success": "success" });
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
            var business = new UserBusiness();
            business.delete(id, (error, result) => {
                if (error) {
                    res.send(error);
                }
                else {
                    res.json({ "success": "success" });
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
            var id = req.params._id;
            var business = new UserBusiness();
            business.findById(id, (error, result) => {
                if (error) {
                    res.send(error);
                }
                else {
                    res.json(result);
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
            var business = new UserBusiness();
            business.retrieve((error, result) => {
                if (error) {
                    res.send(error);
                }
                else {
                    res.json(result);
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
            var business = new UserBusiness();
            business.update(_id, user, (error, result) => {
                if (error) {
                    res.send(error);
                }
                else {
                    res.json({ "success": "success" });
                }
            });
        }
        catch (e) {
            console.log(e);
            res.send({ "error": "error in your request" });
        }
    }
}
module.exports = UserController;
//# sourceMappingURL=UserController.js.map