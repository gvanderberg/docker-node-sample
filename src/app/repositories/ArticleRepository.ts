import IArticleModel = require("./../models/interfaces/ArticleModel");
import ArticleModel = require("./../models/ArticleModel");
import ArticleSchema = require("./../dataAccess/schemas/ArticleSchema");
import BaseRepository = require("./interfaces/base/BaseRepository");

class ArticleRepository extends BaseRepository<IArticleModel>{
    constructor() {
        super(ArticleSchema);
    }
}

Object.seal(ArticleRepository);

export = ArticleRepository;