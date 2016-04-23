"use strict";
const express = require("express");
const UserController = require("./../../app/controllers/UserController");
let router = express.Router();
class UserRoutes {
    constructor() {
        this._userController = new UserController();
    }
    get routes() {
        var controller = this._userController;
        router.get("/signin", (req, res, next) => {
            console.log("Got a GET request for the SignIn page.");
            res.render("users/signin", { title: "Sign In" });
        });
        router.get("/signup", (req, res, next) => {
            console.log("Got a GET request for the SignUp page.");
            res.render("users/signup", { title: "Sign Up" });
        });
        router.get("/signout", (req, res, next) => {
            console.log("Got a GET request for the Sign Out page.");
            res.redirect("/");
        });
        router.get("/users", controller.retrieve);
        router.get("/users/edit/:_id", controller.findById);
        router.delete("/users/:_id", controller.delete);
        router.post("/users", controller.create);
        router.put("/users/:_id", controller.update);
        return router;
    }
}
Object.seal(UserRoutes);
module.exports = UserRoutes;
