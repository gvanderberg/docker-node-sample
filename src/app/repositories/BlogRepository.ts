import IBlogModel = require("./../models/interfaces/BlogModel");
import BlogModel = require("./../models/BlogModel");
import BlogSchema = require("./../dataAccess/schemas/BlogSchema");
import BaseRepository = require("./interfaces/base/BaseRepository");

class BlogRepository extends BaseRepository<IBlogModel>{
    constructor() {
        super(BlogSchema);
    }
}

Object.seal(BlogRepository);

export = BlogRepository;