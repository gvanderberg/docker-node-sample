"use strict";
const DataAccess = require("./../DataAccess");
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
let schema = mongooseConnection.model("Articles", ArticleSchema.schema);
module.exports = schema;
//# sourceMappingURL=ArticleSchema.js.map