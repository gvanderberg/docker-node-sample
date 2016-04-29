import Mongoose = require("mongoose");

class DataAccess {
    static mongooseInstance: any;
    static mongooseConnection: Mongoose.Connection;

    constructor() {
        DataAccess.connect();
    }

    static connect(): Mongoose.Connection {
        if (this.mongooseConnection) {
            return this.mongooseConnection;
        }

        this.mongooseConnection = Mongoose.connection;
        this.mongooseConnection.once("open", () => {
            console.log("Connected to mongodb.");
        });
        this.mongooseInstance = Mongoose.connect("mongodb://192.168.99.100:27017/dockerDb");
        //this.mongooseInstance = Mongoose.connect("mongodb://mongo:27017/dockerDb");
        
        return this.mongooseInstance;
    }
}

DataAccess.connect();

export = DataAccess;