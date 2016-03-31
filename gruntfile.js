'use strict';

var srcPath = 'src/';

var range = function (start, end) {
  var arr = [];
  for (var i = start; i < end; i++) arr.push(i);
  return arr;
};

function getGruvboxOptions() {
  var options = [];
  const gruvboxOptions = require('../../gruvbox/src/sublime-options.js');
  for (var opt in gruvboxOptions) {
    options.push(gruvboxOptions[opt]);
  }

  return options.sort();
}

const uglifyJSFiles = {
  'main.min.js': ['main.min.js'],
};

const jadeFiles = [{
  expand: true,
  cwd: srcPath + 'templates/',
  src: ['*.jade'],
  dest: '',
  ext: '.html',
}];

module.exports = function (grunt) {
  const jadeData = grunt.file.readJSON('data.json');

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      options: {
        outputStyle: 'compressed',
        precision: 10,
        sourceMap: false,
      },
      dev: {
        files: {
          'main.min.css': srcPath + 'scss/main.scss',
        },
      },
    },
    concat: {
      dev: {
        src: ['node_modules/normalize.css/normalize.css', 'main.min.css'],
        dest: 'main.min.css',
      },
    },
    uncss: {
      dev: {
        options: {
          ignore: ['.js-*', /::?-[\w\d]+/],
          stylesheets: ['main.min.css'],
          ignoreSheets: ['/fonts.googleapis/', '/brick.a.ssl.fastly.net/'],
        },
        files: {
          'main.min.css': ['index.html'],
        },
      },
    },
    postcss: {
      options: {
        map: false,
        processors: [
          require('autoprefixer')({
            browsers: ['> 1%'],
          }),
        ],
      },
      dev: {
        src: 'main.min.css',
        dest: 'main.min.css',
      },
    },
    csscomb: {
      dev: {
        src: 'main.min.css',
        dest: 'main.min.css',
      },
    },
    cssmin: {
      options: {
        keepSpecialComments: 1,
        roundingPrecision: -1,
        aggressiveMerging: true,
        advanced: true,
      },
      dev: {
        src: 'main.min.css',
        dest: 'main.min.css',
      },
    },
    browserify: {
      dev: {
        files: {
          'main.min.js': ['src/js/main.js'],
        },
        options: {},
      },
    },
    uglify: {
      options: {
        mangle: false,
      },
      dev: {
        options: {
          compress: {
            drop_console: false,
          },
        },
        files: uglifyJSFiles,
      },
      release: {
        options: {
          compress: {
            drop_console: true,
          },
        },
        files: uglifyJSFiles,
      },
    },
    jade: {
      dev: {
        options: {
          data: {
            configuratorCategories: jadeData.configuratorCategories,
            release: false,
            range: range,
            sublimeOptions: getGruvboxOptions(),
          },
        },
        files: jadeFiles,
      },
      release: {
        options: {
          data: {
            configuratorCategories: jadeData.configuratorCategories,
            release: true,
            range: range,
            sublimeOptions: getGruvboxOptions(),
          },
        },
        files: jadeFiles,
      },
    },
    htmlmin: {
      dev: {
        options: {
          caseSensitive: true,
          collapseBooleanAttributes: true,
          collapseWhitespace: true,
          conservativeCollapse: false,
          keepClosingSlash: false,
          minifyCSS: true,
          minifyJS: true,
          minifyURLs: true,
          removeAttributeQuotes: false,
          removeCDATASectionsFromCDATA: true,
          removeComments: true,
          removeCommentsFromCDATA: true,
          removeEmptyAttributes: true,
          removeEmptyElements: false,
          removeIgnored: true,
          removeOptionalTags: true,
          removeRedundantAttributes: false,
          removeScriptTypeAttributes: true,
          removeStyleLinkTypeAttributes: true,
          useShortDoctype: true,
        },
        files: {
          'index.html': 'index.html',
        },
      },
    },
    watch: {
      options: {
        spawn: false,
        interrupt: true,
        event: ['changed'],
        livereload: true,
      },
      css: {
        files: [srcPath + 'scss/**/*.scss'],
        tasks: ['build_css'],
      },
      js: {
        files: [srcPath + 'js/**/*.js'],
        tasks: ['build_js'],
      },
      html: {
        files: [srcPath + 'templates/**/*.jade'],
        tasks: ['build_html'],
      },
    },
  });

  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-csscomb');
  grunt.loadNpmTasks('grunt-postcss');
  grunt.loadNpmTasks('grunt-sass');
  grunt.registerTask('default', ['watch']);
  grunt.registerTask('build_html', ['jade:dev', 'htmlmin']);
  grunt.registerTask('build_js', ['browserify', 'uglify:dev']);
  grunt.registerTask('build_css', ['sass', 'concat', 'postcss', 'csscomb', 'cssmin']);
  grunt.registerTask('build', ['build_html', 'build_css', 'build_js']);
  grunt.registerTask('release_html', ['jade:release', 'htmlmin']);
  grunt.registerTask('release_js', ['browserify', 'uglify:release']);
  grunt.registerTask('release_css', ['build_css']);
  grunt.registerTask('release', ['release_html', 'release_css', 'release_js']);
};
