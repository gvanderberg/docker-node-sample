"use strict";
const PageSchema = require("./../dataAccess/schemas/PageSchema");
const BaseRepository = require("./interfaces/base/BaseRepository");
class PageRepository extends BaseRepository {
    constructor() {
        super(PageSchema);
    }
}
Object.seal(PageRepository);
module.exports = PageRepository;
//# sourceMappingURL=PageRepository.js.map