"use strict";
const UserSchema = require("./../dataAccess/schemas/UserSchema");
const BaseRepository = require("./interfaces/base/BaseRepository");
class UserRepository extends BaseRepository {
    constructor() {
        super(UserSchema);
    }
}
Object.seal(UserRepository);
module.exports = UserRepository;
