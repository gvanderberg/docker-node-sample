import express = require("express");
import UserController = require("./../../controllers/UserController");

let router = express.Router();

class UserRoutes {
    private _userController: UserController;

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

        router.post("/users/create", controller.create);

        router.delete("/users/delete/:_id", controller.delete);

        return router;
    }
}
Object.seal(UserRoutes);

export = UserRoutes;