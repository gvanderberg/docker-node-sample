import express = require("express");
import IBaseController = require("./interfaces/base/BaseController");
import IUserModel = require("./../models/interfaces/UserModel");
import UserBusiness = require("./../business/UserBusiness");

class UserController implements IBaseController<UserBusiness> {
    create(req: express.Request, res: express.Response): void {
        try {
            var user: IUserModel = <IUserModel>req.body;
            var business = new UserBusiness();

            business.create(user, (error, result) => {
                if (error) {
                    res.render("error", error);
                }
                else {
                    res.render("users/list", { title: "Users", data: result });
                }
            });
        } catch (error) {
            console.log(error);
            res.send({ "error": "error in your request" });
        }
    }
    delete(req: express.Request, res: express.Response): void {
        var id: string = req.params._id;
        var business = new UserBusiness();

    }
    findById(req: express.Request, res: express.Response): void { }
    retrieve(req: express.Request, res: express.Response): void {
        try {
            var business = new UserBusiness();

            business.retrieve((error, result) => {
                if (error) {
                    res.send({ "error": "error" });
                } else {
                    res.render("users/list", { title: "Users", data: result });
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

export = UserController;