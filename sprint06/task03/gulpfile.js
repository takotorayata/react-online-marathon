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

// There is the file gulpfile.js
// Configure it to specify (if you use any extras plugins describe them in the package.json, as appropriate):
// Create the task will take all the js files located in the src directory and its subdirectories recursively and concatenate them into one output/result.js file
// Create the task will take all the css files located in the src directory and its subdirectories recursively and concatenate them into one output/result.css file
// Define the public default task will run the tasks described above
