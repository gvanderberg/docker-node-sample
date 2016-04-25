"use strict";
const Mongoose = require("mongoose");
class DataAccess {
    constructor() {
        DataAccess.connect();
    }
    static connect() {
        if (this.mongooseConnection) {
            return this.mongooseConnection;
        }
        this.mongooseConnection = Mongoose.connection;
        this.mongooseConnection.once("open", () => {
            console.log("Connected to mongodb.");
        });
        this.mongooseInstance = Mongoose.connect("mongodb://mongo:27017/dockerDb");
        return this.mongooseInstance;
    }
}
DataAccess.connect();
module.exports = DataAccess;
