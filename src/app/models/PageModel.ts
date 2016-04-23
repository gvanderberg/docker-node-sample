import IPageModel = require("./interfaces/PageModel");

class ArticleModel {
    private _articleModel: IPageModel;

    constructor(articleModel: IPageModel) {
        this._articleModel = articleModel;
    }

    get title(): string {
        return this._articleModel.title;
    }

    get body(): string {
        return this._articleModel.body;
    }

    get createdAt(): Date {
        return this._articleModel.createdAt;
    }
}

Object.seal(ArticleModel);

export = ArticleModel;