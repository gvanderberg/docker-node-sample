import IBaseBusiness = require("../../../business/interfaces/base/BaseBusiness");
import IReadController = require("./../common/ReadController");
import IWriteController = require("./../common/WriteController");

interface BaseController<T extends IBaseBusiness<Object>> extends IReadController, IWriteController {

}

export = BaseController;