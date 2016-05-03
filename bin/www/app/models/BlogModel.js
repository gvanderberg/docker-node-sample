"use strict";
class BlogModel {
    constructor(blogModel) {
        this._blogModel = blogModel;
    }
    get author() {
        return this._blogModel.author;
    }
    get slug() {
        return this._blogModel.slug;
    }
    get title() {
        return this._blogModel.title;
    }
    get body() {
        return this._blogModel.body;
    }
    get comments() {
        return this._blogModel.comments;
    }
    get tags() {
        return this._blogModel.tags;
    }
    get createdAt() {
        return this._blogModel.createdAt;
    }
    get published() {
        return this._blogModel.published;
    }
}
Object.seal(BlogModel);
module.exports = BlogModel;
//# sourceMappingURL=BlogModel.js.map