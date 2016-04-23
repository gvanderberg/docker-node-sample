import mongoose = require("mongoose");

interface IArticleModel extends mongoose.Document {
    author: {};
    slug: string;
    title: string;
    body: string;
    comments: [any];
    tags: [any];
    createdAt: Date;
}

export = IArticleModel;