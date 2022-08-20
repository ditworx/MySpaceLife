let gulp = require('gulp'),
    sass = require('gulp-sass')(require('sass'));


function buildStyles() {
    return gulp.src('app/scss/**/*.scss', "!" + "app/scss/**/_*.scss")
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('app/css'));
}

function watchFiles() {
    gulp.watch('app/scss/**/*.scss', buildStyles);
}

let build = gulp.series(gulp.parallel(buildStyles));
let watch = gulp.parallel(build, watchFiles);

exports.buildStyles = buildStyles;
exports.default = watch;
exports.build = build;

