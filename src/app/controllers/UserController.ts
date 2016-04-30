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
                    res.send(error);
                } else {
                    res.json({ "success": "success" });
                }
            });
        } catch (e) {
            console.log(e);
            res.send({ "error": "error in your request" });
        }
    }
    delete(req: express.Request, res: express.Response): void {
        try {
            var id: string = req.params._id;
            var business = new UserBusiness();

            business.delete(id, (error, result) => {
                if (error) {
                    res.send(error);
                } else {
                    res.json({ "success": "success" });
                }
            });
        } catch (e) {
            console.log(e);
            res.send({ "error": "error in your request" });
        }
    }
    findById(req: express.Request, res: express.Response): void {
        try {
            var id: string = req.params._id;
            var business = new UserBusiness();

            business.findById(id, (error, result) => {
                if (error) {
                    res.send(error);
                } else {
                    res.json(result);
                    //res.send({ "success": "success" });
                }
            });
        } catch (e) {
            console.log(e);
            res.send({ "error": "error in your request" });
        }
    }
    retrieve(req: express.Request, res: express.Response): void {
        try {
            var business = new UserBusiness();

            business.retrieve((error, result) => {
                if (error) {
                    res.send(error);
                } else {
                    res.json(result);
                    //res.render("users/list", { title: "Users", data: result });
                }
            });
        }
        catch (e) {
            console.log(e);
            res.send({ "error": "error in your request" });
        }
    }
    update(req: express.Request, res: express.Response): void {
        try {
            var _id: string = req.params._id;
            var user: IUserModel = <IUserModel>req.body;
            var business = new UserBusiness();

            business.update(_id, user, (error, result) => {
                if (error) {
                    res.send(error);
                } else {
                    res.json({ "success": "success" });
                }
            });
        } catch (e) {
            console.log(e);
            res.send({ "error": "error in your request" });
        }
    }
}

export = UserController;