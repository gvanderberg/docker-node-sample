import IUserBusiness = require("./interfaces/UserBusiness");
import IUserModel = require("./../models/interfaces/UserModel");
import UserRepository = require("./../repositories/UserRepository");

class UserBusiness implements IUserBusiness {
    private _userRepository: UserRepository;

    constructor() {
        this._userRepository = new UserRepository();
    }

    create(item: IUserModel, callback: (error: any, result: any) => void) {
        this._userRepository.create(item, callback);
    }

    delete(_id: string, callback: (error: any, result: any) => void) {
        this._userRepository.delete(_id, callback);
    }

    findById(_id: string, callback: (error: any, result: IUserModel) => void) {
        this._userRepository.findById(_id, callback);
    }

    retrieve(callback: (error: any, result: any) => void) {
        this._userRepository.retrieve(callback);
    }

    update(_id: string, item: IUserModel, callback: (error: any, result: any) => void) {
        this._userRepository.findById(_id, (err, res) => {
            if (err) {
                callback(err, res);
            }
            else {
                this._userRepository.update(res._id, item, callback);
            }
        });
    }
}

Object.seal(UserBusiness);

export = UserBusiness;