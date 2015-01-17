/**
 * Clyde Theme Build tasks
 *
 * Use these tasks to build a production-ready
 * version of the Clyde theme.
 */

module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);
  require('time-grunt')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    theme: {
      dev: 'src',
      assets: 'src/assets',
      dist: 'dist',
      codeName: 'Clyde Foxx' // With two x's on purpose
    },

    // watch task
    watch: {
      options: {
        reload: true,
        debounceDelay: 500
      },
      styles: {
        files: ['<%= theme.assets %>/less/**/*.less'],
        tasks: ['less']
      },
      scripts: {
        files: ['<%= theme.assets %>/js/**/*.js', 'Gruntfile.js'],
        tasks: ['jshint']
      }
    },

    // connect server
    connect: {}, // not used currently

    // jshint
    jshint: {
      dev: ['<%= theme.assets %>/js/**/*.js', 'Gruntfile.js']
    },

    // compile less
    less: {
      main: {
        files: {
          '<%= theme.assets %>/css/style.css': ['<%= theme.assets %>/less/style.less']
        }
      }
    },

    // document any JS
    docco: {},

    // shell commands
    shell: {
      installTheme: {
        commands: ['rm -rf ../test_theme', 'mv dist/ ../test_theme']
      }
    }
  });

  // Tasks
  grunt.registerTask('default', ['develop']);

  grunt.registerTask('develop', ['watch']);
};
