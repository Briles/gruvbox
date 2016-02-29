'use strict';

const srcPath = './src/';

const gulp = require('gulp');
const exec = require('child_process').exec;
const runSequence = require('run-sequence');

gulp.task('build', function () {

  exec(`node ${srcPath}build.js`, function (err, stdout, stderr) {
    if (stdout) {
      console.log(stdout);
    }

    if (stderr) {
      console.log(stderr);
    }
  });

});

gulp.task('watch', function () {
  gulp.watch(`${srcPath}**/*.js`, ['build']);
});

gulp.task('default', function (callback) {
  runSequence('build', 'watch', callback);
});

gulp.task('build', function (callback) {
  runSequence('build', callback);
});