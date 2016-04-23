import express = require("express");
import IBaseController = require("./interfaces/base/BaseController");
import IPageModel = require("./../app/models/interfaces/PageModel");
import PageBusiness = require("./../app/business/UserBusiness");

class HomeController implements IBaseController<PageBusiness> {
    create(req: express.Request, res: express.Response): void { }
    delete(req: express.Request, res: express.Response): void { }
    findById(req: express.Request, res: express.Response): void { }
    retrieve(req: express.Request, res: express.Response): void { }
    update(req: express.Request, res: express.Response): void { }
}

export = HomeController;