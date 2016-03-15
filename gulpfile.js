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
  var themeFiles = [
    `${srcPath}build.js`,
    `${srcPath}components.js`,
    `${srcPath}components/*.js`,
    `${srcPath}options.js`,
    `${srcPath}palette.js`,
    `${srcPath}paths.js`,
    `${srcPath}scheme.js`,
    `${srcPath}sublime-options.js`,
    `${srcPath}tinycolor.js`,
    `${srcPath}utils.js`,
    `${srcPath}widget.js`,
  ];

  var iconFiles = [
    `${srcPath}icons.js`,
    `${srcPath}icons/*.json`,
    `${srcPath}utils.js`,
  ];

  gulp.watch(themeFiles, ['build_theme']);
  gulp.watch(iconFiles, ['build_icons']);
});

gulp.task('default', function (callback) {
  runSequence('watch', callback);
});
