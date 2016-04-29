import BaseBusiness = require("./base/BaseBusiness");
import IBlogModel = require("./../../models/interfaces/BlogModel");

interface BlogBusiness extends BaseBusiness<IBlogModel> {

}

export = BlogBusiness;