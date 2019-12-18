const gulp = require('gulp');
const util = require('util');
const exec = util.promisify(require('child_process').exec);

const srcPath = './.gulp/';

function execNode(command) {
  return exec(`node --harmony ${command}`).then((res) => {
    if (res.stdout) {
      console.log(res.stdout);
    }

    return res.stdout;
  });
}

gulp.task('build_theme', () => execNode(`${srcPath}build-theme.js`));
gulp.task('build_schemes', () => execNode(`${srcPath}build-schemes.js`));
gulp.task('build_all', () => execNode(`${srcPath}build-all.js`));

gulp.task('watch', () => {
  gulp.watch('.gulp/**/*', gulp.series('build_all'));
});

gulp.task('default', gulp.series('watch'));
