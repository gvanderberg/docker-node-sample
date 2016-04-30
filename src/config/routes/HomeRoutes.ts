import express = require("express");

let router = express.Router();

class HomeRoutes {
    get routes() {
        router.get("/", (req, res, next) => {
            console.log("Got a GET request for the Home page.");
            res.render("index", { title: "Home" });
        });

        router.get("/about", (req, res, next) => {
            console.log("Got a GET request for the About page.");
            res.render("about", { title: "About" });
        });

        router.get("/contact", (req, res, next) => {
            console.log("Got a GET request for the Contact page.");
            res.render("contact", { title: "Contact" });
        });

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

        return router;
    }
}

Object.seal(HomeRoutes);

export = HomeRoutes;