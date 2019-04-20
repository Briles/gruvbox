const gulp = require('gulp');
const util = require('util');
const exec = util.promisify(require('child_process').exec);

const srcPath = './.gulp/';

function execNode(command) {
  return exec(`node ${command}`).then((res) => {
    if (res.stdout) {
      console.log(res.stdout);
    }

    return res.stdout;
  });
}

gulp.task('build_themes', () => execNode(`${srcPath}build.js -t`));
gulp.task('build_schemes', () => execNode(`${srcPath}build.js -s`));
gulp.task('build_widgets', () => execNode(`${srcPath}build.js -w`));
gulp.task('build_all', () => execNode(`${srcPath}build.js`));
gulp.task('build_icons', () => execNode(`${srcPath}icons.js`));
gulp.task('build', gulp.series('build_all', 'build_icons'));

gulp.task('watch', () => {
  const themeFiles = [
    `${srcPath}theme.js`,
    `${srcPath}components.js`,
    `${srcPath}components/*.js`,
    `${srcPath}options.js`,
    `${srcPath}components/options/*.js`,
    `${srcPath}paths.js`,
    `${srcPath}sublime-options.js`,
    `${srcPath}mixins.js`,
    `${srcPath}theme-variables.js`,
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
    `${srcPath}sublime-color-functions.js`,
    `${srcPath}utils.js`,
  ];

  gulp.watch(commonFiles, gulp.series('build_all'));
  gulp.watch(iconFiles, gulp.series('build_icons'));
  gulp.watch(schemeFiles, gulp.series('build_schemes'));
  gulp.watch(themeFiles, gulp.series('build_themes'));
  gulp.watch(widgetFiles, gulp.series('build_widgets'));
});

gulp.task('default', gulp.series('watch'));
