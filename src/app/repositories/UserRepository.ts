import IUserModel = require("./../models/interfaces/UserModel");
import UserSchema = require("./../dataAccess/schemas/UserSchema");
import BaseRepository = require("./interfaces/base/BaseRepository");

class UserRepository extends BaseRepository<IUserModel>{
    constructor() {
        super(UserSchema);
    }
}

Object.seal(UserRepository);

export = UserRepository;