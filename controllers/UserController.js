"use strict";
const UserBusiness = require("./../app/business/UserBusiness");
class UserController {
    create(req, res) { }
    delete(req, res) { }
    findById(req, res) { }
    retrieve(req, res) {
        try {
            var business = new UserBusiness();
            business.retrieve((error, result) => {
                if (error) {
                    res.send({ "error": "error" });
                }
                else {
                    res.render("users/list", { title: "User List", data: result });
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
module.exports = UserController;
//# sourceMappingURL=UserController.js.map