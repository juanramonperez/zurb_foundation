module.exports = function (grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      dist: {
        options: {
          outputStyle: 'compressed',
          includePaths: ['scss']
        },
        files: {
          'css/foundation.min.css': 'scss/foundation.scss',
          'css/zurb_foundation.min.css': 'scss/zurb_foundation.scss'
        }
      }
    },

    copy: {
      dist: {
        files: [
          {expand: true, cwd: 'bower_components/foundation/dist/', src: ['*.css'], dest: 'css/', filter: 'isFile'},
          {expand: true, cwd: 'bower_components/foundation/dist/', src: ['*.js'], dest: 'js/'},
          {expand: true, cwd: 'bower_components/foundation/js/', src: ['*'], dest: 'js/foundation'},
          {expand: true, cwd: 'bower_components/foundation/scss/', src: ['**'], dest: 'scss/foundation'}
        ]
      }
    },

    watch: {
      grunt: {files: ['Gruntfile.js']},

      sass: {
        files: 'scss/**/*.scss',
        tasks: ['sass']
      }

    }
  });

  grunt.registerTask('build', ['copy', 'sass']);
  grunt.registerTask('default', ['build', 'watch']);
};