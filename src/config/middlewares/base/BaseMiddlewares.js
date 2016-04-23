"use strict";
const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const BaseRoutes = require("./../../routes/base/BaseRoutes");
const MethodOverride = require("./../MethodOverride");
class BaseMiddlewares {
    static get configuration() {
        var app = express();
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({ extended: false }));
        app.use(cookieParser());
        app.use(MethodOverride.configuration());
        app.use(new BaseRoutes().routes);
        return app;
    }
}
Object.seal(BaseMiddlewares);
module.exports = BaseMiddlewares;
