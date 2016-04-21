/// <reference path="../typings/express/express.d.ts" />
"use strict";
const express = require("express");
const PORT = 8080;
let app = express();
app.get("/", (req, res) => {
    res.send("Hello World!");
});
app.get("/api/registrations", (req, res) => {
    res.send(new Array());
});
app.listen(PORT);
//# sourceMappingURL=server.js.map