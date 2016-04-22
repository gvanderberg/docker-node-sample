/// <reference path="../../typings/express/express.d.ts" />
"use strict";
const express = require("express");
let router = express.Router();
router.get("/signin", function (req, res, next) {
    console.log("Got a GET request for the SignIn page.");
    res.render("users/signin", { title: "SignIn" });
});
router.get("/signup", function (req, res, next) {
    console.log("Got a GET request for the SignUp page.");
    res.render("users/signup", { title: "SignUp" });
});
module.exports = router;
//# sourceMappingURL=users.js.map