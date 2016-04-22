/// <reference path="../../typings/express/express.d.ts" />
"use strict";
const express = require("express");
let router = express.Router();
router.get("/", function (req, res, next) {
    console.log("Got a GET request for the Home page.");
    res.render("index", { title: "Home" });
});
router.get("/about", function (req, res, next) {
    console.log("Got a GET request for the About page.");
    res.render("about", { title: "About" });
});
router.get("/contact", function (req, res, next) {
    console.log("Got a GET request for the Contact page.");
    res.render("contact", { title: "Contact" });
});
router.get("/signin", function (req, res, next) {
    console.log("Got a GET request for the SignIn page.");
    res.render("users/signin", { title: "Sign In" });
});
router.get("/signup", function (req, res, next) {
    console.log("Got a GET request for the SignUp page.");
    res.render("users/signup", { title: "Sign Up" });
});
module.exports = router;
//# sourceMappingURL=index.js.map