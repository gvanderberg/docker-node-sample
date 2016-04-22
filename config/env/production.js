"use strict";
let env = {};
const db = "mongodb://localhost/noobjs_dev";
const facebook = {
    clientId: process.env.FACEBOOK_CLIENTID,
    clientSecret: process.env.FACEBOOK_SECRET,
    callbackUrl: "http://localhost:8080/auth/facebook/callback"
};
const github = {
    clientId: process.env.GITHUB_CLIENTID,
    clientSecret: process.env.GITHUB_SECRET,
    callbackUrl: "http://localhost:8080/auth/github/callback"
};
const google = {
    clientId: process.env.GOOGLE_CLIENTID,
    clientSecret: process.env.GOOGLE_SECRET,
    callbackUrl: "http://localhost:8080/auth/google/callback"
};
const linkedin = {
    clientId: process.env.LINKEDIN_CLIENTID,
    clientSecret: process.env.LINKEDIN_SECRET,
    callbackUrl: "http://localhost:8080/auth/linkedin/callback"
};
const twitter = {
    clientId: process.env.TWITTER_CLIENTID,
    clientSecret: process.env.TWITTER_SECRET,
    callbackUrl: "http://localhost:8080/auth/twitter/callback"
};
module.exports = env;
//# sourceMappingURL=production.js.map