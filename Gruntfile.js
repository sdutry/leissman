module.exports = function(grunt) {
  'use strict';
  
  grunt.initConfig({
    clean: {
      build: {
        src: ['dist', 'src/js/vendor', 'src/css/vendor']
      }
    },
    jshint: {
      files: ['Gruntfile.js']
    },
    copy: {
      vendor: {
        files: [
          {
            expand: true,
            cwd: 'node_modules/jquery/dist/',
            src: ['jquery.min.js'],
            dest: 'src/js/vendor'
          },
          {
            expand: true,
            cwd: 'node_modules/bootstrap/dist/js/',
            src: ['bootstrap.min.js'],
            dest: 'src/js/vendor'
          },
          {
            expand: true,
            cwd: 'node_modules/image-map-resizer/js/',
            src: ['imageMapResizer.min.js'],
            dest: 'src/js/vendor'
          },
          {
            expand: true,
            cwd: 'node_modules/bootstrap/dist/css/',
            src: ['bootstrap.min.css', 'bootstrap-theme.min.css'],
            dest: 'src/css/vendor'
          }
	]
      },
      todist: {
        files: [
          {
            cwd: 'src',
            expand: true,
            src: ['**/*'],
            dest: 'dist/'
          }
	]
      }
    },
    concat: {
      css: {
        src: ['src/css/vendor/bootstrap.min.css', 'src/css/vendor/bootstrap-theme.min.css'],
          dest: 'dist/css/generated/main.css'
        },
 
        js: {
          src: ['src/js/vendor/jquery.min.js', 'src/js/vendor/bootstrap.min.js','src/js/vendor/imageMapResizer.min.js'],
          dest: 'dist/js/generated/main.js'
        }
    },
    uglify: {
      js: {
        src: 'dist/js/generated/main.js',
        dest: 'dist/js/generated/main.min.js'
      }
    },
    cssmin: {
      css: {
        src: 'dist/css/generated/main.css',
        dest: 'dist/css/generated/main.min.css'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask('default', ['clean', 'jshint', 'copy:vendor', 'concat', 'uglify', 'cssmin', 'copy:todist']);
};
