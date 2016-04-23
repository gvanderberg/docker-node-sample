import BaseBusiness = require("./base/BaseBusiness");
import IArticleModel = require("./../../models/interfaces/ArticleModel");

interface ArticleBusiness extends BaseBusiness<IArticleModel> {

}

export = ArticleBusiness;