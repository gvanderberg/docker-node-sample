import DataAccess = require("./../DataAccess");
import IBlogModel = require("./../../models/interfaces/BlogModel");

let mongoose = DataAccess.mongooseInstance;
let mongooseConnection = DataAccess.mongooseConnection;

class BlogSchema {
    static get schema() {
        let schema = mongoose.Schema({
            author: { type: {} },
            slug: { type: String, required: true },
            title: { type: String, required: true },
            body: { type: String, required: true },
            comments: { type: [] },
            tags: { type: [] },
            createdAt: { type: Date, required: true }
        });

        return schema;
    }
}

let schema = mongooseConnection.model<IBlogModel>("Blogs", BlogSchema.schema);

export = schema;