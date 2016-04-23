import IPageModel = require("./../models/interfaces/PageModel");
import PageModel = require("./../models/PageModel");
import PageSchema = require("./../dataAccess/schemas/PageSchema");
import BaseRepository = require("./interfaces/base/BaseRepository");

class PageRepository extends BaseRepository<IPageModel>{
    constructor() {
        super(PageSchema);
    }
}

Object.seal(PageRepository);

export = PageRepository;