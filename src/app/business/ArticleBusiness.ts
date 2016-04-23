import IArticleBusiness = require("./interfaces/ArticleBusiness");
import IArticleModel = require("./../models/interfaces/ArticleModel");
import ArticleRepository = require("./../repositories/ArticleRepository");
import ArticleModel = require("./../models/ArticleModel");

class ArticleBusiness implements ArticleBusiness {
    private _articleRepository: ArticleRepository;

    constructor() {
        this._articleRepository = new ArticleRepository();
    }

    create(item: IArticleModel, callback: (error: any, result: any) => void) {
        this._articleRepository.create(item, callback);
    }

    delete(_id: string, callback: (error: any, result: any) => void) {
        this._articleRepository.delete(_id, callback);
    }

    findById(_id: string, callback: (error: any, result: IArticleModel) => void) {
        this._articleRepository.findById(_id, callback);
    }

    retrieve(callback: (error: any, result: any) => void) {
        this._articleRepository.retrieve(callback);
    }

    update(_id: string, item: IArticleModel, callback: (error: any, result: any) => void) {
        this._articleRepository.findById(_id, (err, res) => {
            if (err) {
                callback(err, res);
            }
            else {
                this._articleRepository.update(res._id, item, callback);
            }
        });
    }
}

Object.seal(ArticleBusiness);

export = ArticleBusiness;