import express = require("express");

interface WriteController {
    create: express.RequestHandler;
    delete: express.RequestHandler;
    update: express.RequestHandler;
}

export = WriteController;