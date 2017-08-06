module.exports = function(grunt) {
  'use strict';
  
  grunt.initConfig({
    jshint: {
      files: ['Gruntfile.js']
    },
    copy: {
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

  grunt.registerTask('default', ['clean', 'jshint', 'copy']);
};
