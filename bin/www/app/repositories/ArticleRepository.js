"use strict";
const ArticleSchema = require("./../dataAccess/schemas/ArticleSchema");
const BaseRepository = require("./interfaces/base/BaseRepository");
class ArticleRepository extends BaseRepository {
    constructor() {
        super(ArticleSchema);
    }
}
Object.seal(ArticleRepository);
module.exports = ArticleRepository;
