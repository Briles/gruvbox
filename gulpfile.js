const gulp = require('gulp');
const util = require('util');
const exec = util.promisify(require('child_process').exec);

const srcPath = './.gulp/';

function execNode(command) {
  return exec(`node ${command}`).then(function (res) {
    if (res.stdout) {
      console.log(res.stdout);
    }

    return res.stdout;
  });
}

gulp.task('build_themes', function () {
  return execNode(`${srcPath}build.js -t`);
});

gulp.task('build_schemes', function () {
  return execNode(`${srcPath}build.js -s`);
});

gulp.task('build_themes_min', function () {
  return execNode(`${srcPath}build.js -t -m`);
});

gulp.task('build_schemes_min', function () {
  return execNode(`${srcPath}build.js -s -m`);
});

gulp.task('build_widgets', function () {
  return execNode(`${srcPath}build.js -w`);
});

gulp.task('build_all', function () {
  return execNode(`${srcPath}build.js`);
});

gulp.task('build_icons', function () {
  return execNode(`${srcPath}icons.js`);
});

gulp.task('build', gulp.series('build_all', 'build_icons'));

gulp.task('watch', function () {
  const themeFiles = [
    `${srcPath}components.js`,
    `${srcPath}components/*.js`,
    `${srcPath}options.js`,
    `${srcPath}components/options/*.js`,
    `${srcPath}paths.js`,
    `${srcPath}sublime-options.js`,
    `${srcPath}mixins.js`,
  ];

  const schemeFiles = [
    `${srcPath}scheme.js`,
    `${srcPath}variants.js`,
  ];

  const widgetFiles = [
    `${srcPath}options.js`,
    `${srcPath}paths.js`,
    `${srcPath}scheme.js`,
    `${srcPath}variants.js`,
    `${srcPath}widget.js`,
  ];

  const iconFiles = [
    `${srcPath}icons.js`,
    `${srcPath}icons/*.json`,
    `${srcPath}utils.js`,
  ];

  const commonFiles = [
    `${srcPath}build.js`,
    `${srcPath}palette.js`,
    `${srcPath}tinycolor.js`,
    `${srcPath}utils.js`,
  ];

  gulp.watch(commonFiles, gulp.series('build_all'));
  gulp.watch(iconFiles, gulp.series('build_icons'));
  gulp.watch(schemeFiles, gulp.series('build_schemes'));
  gulp.watch(themeFiles, gulp.series('build_themes'));
  gulp.watch(widgetFiles, gulp.series('build_widgets'));
});

gulp.task('default', gulp.series('watch'));
gulp.task('build_min', gulp.series('build_themes_min', 'build_schemes_min'));
