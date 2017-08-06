module.exports = function(grunt) {
  'use strict';
  
  grunt.initConfig({
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
            dest: 'dist/js/vendor'
          },
          {
            expand: true,
            cwd: 'node_modules/bootstrap/dist/js/',
            src: ['bootstrap.min.js'],
            dest: 'dist/js/vendor'
          },
          {
            expand: true,
            cwd: 'node_modules/image-map-resizer/js/',
            src: ['imageMapResizer.min.js'],
            dest: 'dist/js/vendor'
          },
          {
            expand: true,
            cwd: 'node_modules/bootstrap/dist/css/',
            src: ['bootstrap.min.css', 'bootstrap-theme.min.css'],
            dest: 'dist/css/vendor'
          }
	]
      },
      main: {
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
    clean: {
      build: {
        src: ['dist']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('default', ['clean', 'jshint', 'copy:vendor', 'copy:main']);
};
