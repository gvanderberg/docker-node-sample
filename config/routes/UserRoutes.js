"use strict";
const express = require("express");
const UserController = require("./../../controllers/UserController");
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
        router.get("/users", controller.retrieve);
        return router;
    }
}
Object.seal(UserRoutes);
module.exports = UserRoutes;
//# sourceMappingURL=UserRoutes.js.map