import DataAccess = require("./../DataAccess");
import IUserModel = require("./../../models/interfaces/UserModel");

let mongoose = DataAccess.mongooseInstance;
let mongooseConnection = DataAccess.mongooseConnection;

class UserSchema {
    static get schema() {
        let schema = mongoose.Schema({
            firstName: { type: String, required: true },
            lastName: { type: String, required: true },
            displayName: { type: String },
            email: { type: String, required: true },
            password: { type: String },
            provider: { type: String },
            salt: { type: String }
        });

        return schema;
    }
}

let schema = mongooseConnection.model<IUserModel>("Users", UserSchema.schema);

export = schema;