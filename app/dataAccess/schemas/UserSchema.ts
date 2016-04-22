import DataAccess = require("./../DataAccess");
import IUserModel = require("./../../models/interfaces/UserModel");

let mongoose = DataAccess.mongooseInstance;
let mongooseConnection = DataAccess.mongooseConnection;

class UserSchema {
    static get schema() {
        let schema = mongoose.Schema({
            firstName: { type: String },
            lastName: { type: String },
            displayName: { type: String },
            email: { type: String, required: true },
            password: { type: String, required: true },
            provider: { type: String, required: true },
            salt: { type: String, required: true }
        });

        return schema;
    }
}

let schema = mongooseConnection.model<IUserModel>("Users", UserSchema.schema);

export = schema;