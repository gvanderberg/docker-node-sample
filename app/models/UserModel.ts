import IUserModel = require("./interfaces/UserModel");

class UserModel {
    private _userModel: IUserModel;

    constructor(userModel: IUserModel) {
        this._userModel = userModel;
    }

    get firstName(): string {
        return this._userModel.firstName;
    }

    get lastName(): string {
        return this._userModel.lastName;
    }

    get displayName(): string {
        return this._userModel.displayName;
    }

    get email(): string {
        return this._userModel.email;
    }

    get password(): string {
        return this._userModel.password;
    }

    get provider(): string {
        return this._userModel.provider;
    }

    get salt(): string {
        return this._userModel.salt;
    }
}

Object.seal(UserModel);

export = UserModel;