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

module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      options: {
        outputStyle: 'compressed',
        precision: 10,
        sourceMap: false,
      },
      main: {
        files: {
          'main.min.css': srcPath + 'scss/main.scss',
        },
      },
    },
    concat: {
      main: {
        src: ['node_modules/normalize.css/normalize.css', 'main.min.css'],
        dest: 'main.min.css',
      },
    },
    uncss: {
      main: {
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
      main: {
        src: 'main.min.css',
        dest: 'main.min.css',
      },
    },
    csscomb: {
      main: {
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
      main: {
        src: 'main.min.css',
        dest: 'main.min.css',
      },
    },
    browserify: {
      main: {
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
      main: {
        options: {
          compress: {
            drop_console: false,
          },
        },
        files: {
          'main.min.js': ['main.min.js'],
        },
      },
    },
    jade: {
      compile: {
        options: {
          data: {
            range: range,
            sublimeOptions: getGruvboxOptions(),
          },
        },
        files: [{
          expand: true,
          cwd: srcPath + 'templates/',
          src: ['*.jade'],
          dest: '',
          ext: '.html',
        }],
      },
    },
    htmlmin: {
      main: {
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
  grunt.registerTask('build_html', ['jade', 'htmlmin']);
  grunt.registerTask('build_js', ['browserify', 'uglify']);
  grunt.registerTask('build_css', ['sass', 'concat', 'postcss', 'csscomb', 'cssmin']);
  grunt.registerTask('build', ['build_html', 'build_css', 'build_js']);
};
