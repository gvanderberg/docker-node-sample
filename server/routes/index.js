/// <reference path="../../typings/express/express.d.ts" />
"use strict";
const express = require("express");
let router = express.Router();
router.get("/", function (req, res, next) {
    console.log("Got a GET request for the Home page.");
    res.status(200).send("Hello World!");
});
module.exports = router;
//# sourceMappingURL=index.js.map