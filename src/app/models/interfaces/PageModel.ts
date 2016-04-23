import mongoose = require("mongoose");

interface IPageModel extends mongoose.Document {
    title: string;
    body: string;
    createdAt: Date;
}

export = IPageModel;