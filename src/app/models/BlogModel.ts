import IBlogModel = require("./interfaces/BlogModel");

class BlogModel {
    private _blogModel: IBlogModel;

    constructor(blogModel: IBlogModel) {
        this._blogModel = blogModel;
    }

    get author(): Object {
        return this._blogModel.author;
    }

    get slug(): string {
        return this._blogModel.slug;
    }

    get title(): string {
        return this._blogModel.title;
    }

    get body(): string {
        return this._blogModel.body;
    }

    get comments(): any {
        return this._blogModel.comments;
    }

    get tags(): any {
        return this._blogModel.tags;
    }

    get createdAt(): Date {
        return this._blogModel.createdAt;
    }
}

Object.seal(BlogModel);

export = BlogModel;