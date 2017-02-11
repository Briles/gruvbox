'use strict';

const srcPath = './.gulp/';

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

gulp.task('build_themes', function () {
  execNode(`${srcPath}build.js -t`);
});

gulp.task('build_schemes', function () {
  execNode(`${srcPath}build.js -s`);
});

gulp.task('build_themes_min', function () {
  execNode(`${srcPath}build.js -t -m`);
});

gulp.task('build_schemes_min', function () {
  execNode(`${srcPath}build.js -s -m`);
});

gulp.task('build_widgets', function () {
  execNode(`${srcPath}build.js -w`);
});

gulp.task('build_all', function () {
  execNode(`${srcPath}build.js`);
});

gulp.task('build_icons', function () {
  execNode(`${srcPath}icons.js`);
});

gulp.task('build', function (callback) {
  runSequence('build_all', 'build_icons', callback);
});

gulp.task('watch', function () {
  var themeFiles = [
    `${srcPath}components.js`,
    `${srcPath}components/*.js`,
    `${srcPath}options.js`,
    `${srcPath}components/options/*.js`,
    `${srcPath}paths.js`,
    `${srcPath}sublime-options.js`,
    `${srcPath}mixins.js`,
  ];

  var schemeFiles = [
    `${srcPath}scheme.js`,
    `${srcPath}variants.js`,
  ];

  var widgetFiles = [
    `${srcPath}options.js`,
    `${srcPath}paths.js`,
    `${srcPath}scheme.js`,
    `${srcPath}variants.js`,
    `${srcPath}widget.js`,
  ];

  var iconFiles = [
    `${srcPath}icons.js`,
    `${srcPath}icons/*.json`,
    `${srcPath}utils.js`,
  ];

  var commonFiles = [
    `${srcPath}build.js`,
    `${srcPath}palette.js`,
    `${srcPath}tinycolor.js`,
    `${srcPath}utils.js`,
  ];

  gulp.watch(commonFiles, ['build_all']);
  gulp.watch(iconFiles, ['build_icons']);
  gulp.watch(schemeFiles, ['build_schemes']);
  gulp.watch(themeFiles, ['build_themes']);
  gulp.watch(widgetFiles, ['build_widgets']);
});

gulp.task('default', function () {
  runSequence('watch');
});

gulp.task('build_min', function () {
  runSequence('build_themes_min', 'build_schemes_min');
});
