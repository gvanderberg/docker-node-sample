import IBlogBusiness = require("./interfaces/BlogBusiness");
import IBlogModel = require("./../models/interfaces/BlogModel");
import BlogRepository = require("./../repositories/BlogRepository");
import BlogModel = require("./../models/BlogModel");

class BlogBusiness implements IBlogBusiness {
    private _blogRepository: BlogRepository;

    constructor() {
        this._blogRepository = new BlogRepository();
    }

    create(item: IBlogModel, callback: (error: any, result: any) => void) {
        item.createdAt = new Date();

        this._blogRepository.create(item, callback);
    }

    delete(_id: string, callback: (error: any, result: any) => void) {
        this._blogRepository.delete(_id, callback);
    }

    findById(_id: string, callback: (error: any, result: IBlogModel) => void) {
        this._blogRepository.findById(_id, callback);
    }

    retrieve(callback: (error: any, result: any) => void) {
        this._blogRepository.retrieve(callback);
    }

    update(_id: string, item: IBlogModel, callback: (error: any, result: any) => void) {
        this._blogRepository.findById(_id, (err, res) => {
            if (err) {
                callback(err, res);
            }
            else {
                this._blogRepository.update(res._id, item, callback);
            }
        });
    }
}

Object.seal(BlogBusiness);

export = BlogBusiness;