"use strict";
class UserModel {
    constructor(userModel) {
        this._userModel = userModel;
    }
    get firstName() {
        return this._userModel.firstName;
    }
    get lastName() {
        return this._userModel.lastName;
    }
    get displayName() {
        return this._userModel.displayName;
    }
    get email() {
        return this._userModel.email;
    }
    get password() {
        return this._userModel.password;
    }
    get provider() {
        return this._userModel.provider;
    }
    get salt() {
        return this._userModel.salt;
    }
}
Object.seal(UserModel);
module.exports = UserModel;
