import express = require("express");
import IBaseController = require("./interfaces/base/BaseController");
import IUserModel = require("./../app/models/interfaces/UserModel");
import UserBusiness = require("./../app/business/UserBusiness");

class UserController implements IBaseController<UserBusiness> {
    create(req: express.Request, res: express.Response): void { }
    delete(req: express.Request, res: express.Response): void { }
    findById(req: express.Request, res: express.Response): void { }
    retrieve(req: express.Request, res: express.Response): void {
        try {
            var business = new UserBusiness();

            business.retrieve((error, result) => {
                if (error) {
                    res.send({ "error": "error" });
                } else {
                    res.render("users/list", { title: "User List", data: result });
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

export = UserController;