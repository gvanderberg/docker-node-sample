"use strict";
const express = require("express");
const UserRepository = require("./../../app/repositories/UserRepository");
let router = express.Router();
class UserRoutes {
    constructor() {
        this._userRepository = new UserRepository();
    }
    get routes() {
        let repository = this._userRepository;
        router.get("/", (req, res) => {
            console.log("Got a GET request for the Users page.");
            repository.retrieve((error, result) => {
                res.render("users/list", { "title": "All My Ninjas", "users": result });
            });
        });
        router.get("/create", (req, res) => {
            console.log("Got a GET request for the User Create page.");
            res.render("users/create", { "title": "Ninja" });
        });
        return router;
    }
}
Object.seal(UserRoutes);
module.exports = UserRoutes;
