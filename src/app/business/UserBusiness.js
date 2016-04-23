"use strict";
const UserRepository = require("./../repositories/UserRepository");
class UserBusiness {
    constructor() {
        this._userRepository = new UserRepository();
    }
    create(item, callback) {
        this._userRepository.create(item, callback);
    }
    delete(_id, callback) {
        this._userRepository.delete(_id, callback);
    }
    findById(_id, callback) {
        this._userRepository.findById(_id, callback);
    }
    retrieve(callback) {
        this._userRepository.retrieve(callback);
    }
    update(_id, item, callback) {
        this._userRepository.findById(_id, (err, res) => {
            if (err)
                callback(err, res);
            else
                this._userRepository.update(res._id, item, callback);
        });
    }
}
Object.seal(UserBusiness);
module.exports = UserBusiness;
