/// <reference path="../typings/express/express.d.ts" />
"use strict";
const express = require("express");
const PORT = 80;
let app = express();
app.get("/", (req, res) => {
    console.log("Got a GET request for the Home page.");
    res.status(200).send("Hello World!");
});
let server = app.listen(PORT, function () {
    let host = server.address().address;
    let port = server.address().port;
    console.log("listening on http://%s:%s", host, port);
});
//# sourceMappingURL=server.js.map