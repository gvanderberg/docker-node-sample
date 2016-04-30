"use strict";
const express = require("express");
const UserController = require("./../../../../app/controllers/UserController");
let router = express.Router();
class UserApiRoutes {
    constructor() {
        this._userController = new UserController();
    }
    get routes() {
        let controller = this._userController;
        router.get("/", controller.retrieve);
        router.post("/", controller.create);
        router.get("/:_id", controller.findById);
        router.put("/:_id", controller.update);
        router.delete("/:_id", controller.delete);
        return router;
    }
}
Object.seal(UserApiRoutes);
module.exports = UserApiRoutes;
