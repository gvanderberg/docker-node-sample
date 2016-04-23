import mongoose = require("mongoose");

interface IUserModel extends mongoose.Document {
    firstName: string;
    lastName: string;
    displayName: string;
    email: string;
    password: string;
    provider: string;
    salt: string;
}

export = IUserModel;