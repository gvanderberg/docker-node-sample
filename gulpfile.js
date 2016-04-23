var gulp = require("gulp");
var bower = require("gulp-bower");
var tsb = require("gulp-tsb");

var compile = tsb.create("tsconfig.json");

gulp.task("default", ["build", "watch"]);

gulp.task("bower", () => {
    return bower();
});

gulp.task("build", ["build:public", "build:views"], () => {
    return gulp.src(["src/**/*.ts"]).pipe(compile()).pipe(gulp.dest("bin/www"));
});

gulp.task("build:public", () => {
    return gulp.src(["src/public/**/*.*"]).pipe(gulp.dest("bin/www/public"));
});

gulp.task("build:views", () => {
    return gulp.src(["src/views/**/*.jade"]).pipe(gulp.dest("bin/www/views"));
});

gulp.task("clean", () => { });

gulp.task("watch", () => {
    return gulp.watch("src/**/*.*", ["build"]);
});