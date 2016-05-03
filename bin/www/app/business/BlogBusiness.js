"use strict";
const BlogRepository = require("./../repositories/BlogRepository");
class BlogBusiness {
    constructor() {
        this._blogRepository = new BlogRepository();
    }
    create(item, callback) {
        item.createdAt = new Date();
        this._blogRepository.create(item, callback);
    }
    delete(_id, callback) {
        this._blogRepository.delete(_id, callback);
    }
    findById(_id, callback) {
        this._blogRepository.findById(_id, callback);
    }
    retrieve(callback) {
        this._blogRepository.retrieve(callback);
    }
    update(_id, item, callback) {
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
module.exports = BlogBusiness;
//# sourceMappingURL=BlogBusiness.js.map