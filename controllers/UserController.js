"use strict";
const UserBusiness = require("./../app/business/UserBusiness");
class UserController {
    create(req, res) {
        try {
            var user = req.body;
            var business = new UserBusiness();
            business.create(user, (error, result) => {
                if (error) {
                    res.render("error", error);
                }
                else {
                    res.render("users/list", { title: "Users", data: result });
                }
            });
        }
        catch (error) {
            console.log(error);
            res.send({ "error": "error in your request" });
        }
    }
    delete(req, res) {
        var id = req.params._id;
        var business = new UserBusiness();
    }
    findById(req, res) { }
    retrieve(req, res) {
        try {
            var business = new UserBusiness();
            business.retrieve((error, result) => {
                if (error) {
                    res.send({ "error": "error" });
                }
                else {
                    res.render("users/list", { title: "Users", data: result });
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
module.exports = UserController;
//# sourceMappingURL=UserController.js.map