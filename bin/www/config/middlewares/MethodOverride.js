"use strict";
const express = require("express");
const methodOverride = require("method-override");
class MethodOverride {
    static configuration() {
        var app = express();
        app.use(methodOverride("X-HTTP-Method"));
        app.use(methodOverride("X-HTTP-Method-Override"));
        app.use(methodOverride("X-Method-Override"));
        app.use(methodOverride("_method"));
        return app;
    }
}
Object.seal(MethodOverride);
module.exports = MethodOverride;
//# sourceMappingURL=MethodOverride.js.map