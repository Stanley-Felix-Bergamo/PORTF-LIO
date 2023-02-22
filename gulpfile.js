const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const imgmin = require('gulp-imagemin');


function compilarSass() {

    return gulp.src('./src/styles/*scss')
        .pipe(sourcemaps.init())
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(gulp.dest('./dist/styles'));
}

function mimificarImagem() {

    return gulp.src('./src/images/*')
        .pipe(imgmin())
        .pipe(gulp.dest('./dist/imagem'))
}

exports.default = gulp.parallel(compilarSass, mimificarImagem);

exports.watch = function () {
    gulp.watch('./src/styles/*.scss', { ignoreInitial: false }, gulp.parallel(compilarSass))
    gulp.watch('./src/images/*.scss', { ignoreInitial: false }, gulp.parallel(mimificarImagem))
}


