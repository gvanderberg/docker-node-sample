"use strict";
class PageModel {
    constructor(pageModel) {
        this._pageModel = pageModel;
    }
    get title() {
        return this._pageModel.title;
    }
    get body() {
        return this._pageModel.body;
    }
    get createdAt() {
        return this._pageModel.createdAt;
    }
}
Object.seal(PageModel);
module.exports = PageModel;
