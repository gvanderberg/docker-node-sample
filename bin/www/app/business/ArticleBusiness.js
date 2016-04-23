"use strict";
const ArticleRepository = require("./../repositories/ArticleRepository");
class ArticleBusiness {
    constructor() {
        this._articleRepository = new ArticleRepository();
    }
    create(item, callback) {
        this._articleRepository.create(item, callback);
    }
    delete(_id, callback) {
        this._articleRepository.delete(_id, callback);
    }
    findById(_id, callback) {
        this._articleRepository.findById(_id, callback);
    }
    retrieve(callback) {
        this._articleRepository.retrieve(callback);
    }
    update(_id, item, callback) {
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
module.exports = ArticleBusiness;
