import DataAccess = require("./../DataAccess");
import IArticleModel = require("./../../models/interfaces/ArticleModel");
import IUserModel = require("./../../models/interfaces/UserModel");

let mongoose = DataAccess.mongooseInstance;
let mongooseConnection = DataAccess.mongooseConnection;

class ArticleSchema {
    static get schema() {
        let schema = mongoose.Schema({
            author: { type: {} },
            title: { type: String, required: true },
            body: { type: String, required: true },
            comments: { type: [] },
            tags: { type: [] },
            createdAt: { type: Date, required: true }
        });

        return schema;
    }
}

let schema = mongooseConnection.model<IArticleModel>("Articles", ArticleSchema.schema);

export = schema;