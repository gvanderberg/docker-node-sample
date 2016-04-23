"use strict";
class ArticleModel {
    constructor(articleModel) {
        this._articleModel = articleModel;
    }
    get title() {
        return this._articleModel.title;
    }
    get body() {
        return this._articleModel.body;
    }
    get createdAt() {
        return this._articleModel.createdAt;
    }
}
Object.seal(ArticleModel);
module.exports = ArticleModel;
