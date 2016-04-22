"use strict";
class ArticleModel {
    constructor(articleModel) {
        this._articleModel = articleModel;
    }
    get author() {
        return this._articleModel.author;
    }
    get title() {
        return this._articleModel.title;
    }
    get body() {
        return this._articleModel.body;
    }
    get comments() {
        return this._articleModel.comments;
    }
    get tags() {
        return this._articleModel.tags;
    }
    get createdAt() {
        return this._articleModel.createdAt;
    }
}
Object.seal(ArticleModel);
module.exports = ArticleModel;
//# sourceMappingURL=ArticleModel.js.map