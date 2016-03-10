'use strict';

const srcPath = './src/';

const gulp = require('gulp');
const exec = require('child_process').exec;
const runSequence = require('run-sequence');

function execNode(command) {
  exec(`node ${command}`, function (err, stdout, stderr) {
    if (stdout) {
      console.log(stdout);
    }

    if (stderr) {
      console.log(stderr);
    }
  });
}

gulp.task('build_theme', function () {
  execNode(`${srcPath}build.js`);
});

gulp.task('build_icons', function () {
  execNode(`${srcPath}icons.js`);
});

gulp.task('build', function (callback) {
  runSequence('build_theme', 'build_icons', callback);
});

gulp.task('watch', function () {
  gulp.watch(`${srcPath}**/*.js`, ['build']);
});

gulp.task('default', function (callback) {
  runSequence('build', 'watch', callback);
});
