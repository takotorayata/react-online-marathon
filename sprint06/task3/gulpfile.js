const gulp = require('gulp');
const {src, dest} = require('gulp');
const concat = require('gulp-concat');

const  taskJS = () =>
    src('./src/**/*.js')
    .pipe(concat('result.js'))
    .pipe(dest('output/'));

const taskCSS = () =>
    src('./src/**/*.css')
    .pipe(concat('result.css'))
    .pipe(dest('output/'));

exports.default = gulp.series(taskJS, taskCSS);


// const gulp = require('gulp');
// const {src, dest} = require('gulp');
// const concat = require('gulp-concat');
// async function taskJS() {
//   return src('./src/**/*.js')
//     .pipe(concat('result.js'))
//     .pipe(dest('output/'));
// }
// async function taskCSS(cb) {
//   return src('./src/**/*.css')
//     .pipe(concat('result.css'))
//     .pipe(dest('output/'));
//   cb();
// }
// exports.default = gulp.series(taskJS, taskCSS);
