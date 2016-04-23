import mongoose = require("mongoose");
import IUserModel = require("./UserModel");

interface IArticleModel extends mongoose.Document {
    author: IUserModel;
    title: string;
    body: string;
    comments: any;
    tags: any;
    createdAt: Date;
}

export = IArticleModel;