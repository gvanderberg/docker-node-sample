import BaseBusiness = require("./base/BaseBusiness");
import IUserModel = require("./../../models/interfaces/UserModel");

interface UserBusiness extends BaseBusiness<IUserModel> {

}

export = UserBusiness;