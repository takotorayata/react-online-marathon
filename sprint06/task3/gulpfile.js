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
