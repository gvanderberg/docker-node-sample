import IPageModel = require("./interfaces/PageModel");

class PageModel {
    private _pageModel: IPageModel;

    constructor(pageModel: IPageModel) {
        this._pageModel = pageModel;
    }

    get title(): string {
        return this._pageModel.title;
    }

    get body(): string {
        return this._pageModel.body;
    }

    get createdAt(): Date {
        return this._pageModel.createdAt;
    }
}

Object.seal(PageModel);

export = PageModel;