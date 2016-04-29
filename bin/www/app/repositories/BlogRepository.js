"use strict";
const BlogSchema = require("./../dataAccess/schemas/BlogSchema");
const BaseRepository = require("./interfaces/base/BaseRepository");
class BlogRepository extends BaseRepository {
    constructor() {
        super(BlogSchema);
    }
}
Object.seal(BlogRepository);
module.exports = BlogRepository;
