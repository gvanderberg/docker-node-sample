var gulp = require("gulp");
var bower = require("gulp-bower");
var tsb = require("gulp-tsb");

var compile = tsb.create("tsconfig.json");

gulp.task("default", ["build", "watch"]);

gulp.task("bower", () => {
    return bower();
});

gulp.task("build", ["build:static", "build:views"], () => {
    return gulp.src(["src/**/*.ts"]).pipe(compile()).pipe(gulp.dest("bin/www"));
});

gulp.task("build:static", () => {
    return gulp.src(["src/public/**/*.*"]).pipe(gulp.dest("bin/www/public"));
});

gulp.task("build:views", () => {
    return gulp.src(["src/**/*.jade"]).pipe(gulp.dest("bin/www"));
});

gulp.task("clean", () => { });

gulp.task("watch", () => {
    return gulp.watch("src/**/*.*", ["build"]);
});