"use strict";
const DataAccess = require("./../DataAccess");
let mongoose = DataAccess.mongooseInstance;
let mongooseConnection = DataAccess.mongooseConnection;
class PageSchema {
    static get schema() {
        let schema = mongoose.Schema({
            title: { type: String, required: true },
            body: { type: String, required: true },
            createdAt: { type: Date, required: true }
        });
        return schema;
    }
}
let schema = mongooseConnection.model("Pages", PageSchema.schema);
module.exports = schema;
