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
    },
    connect: {
      server: {
        options: {
          port: 8000,
          base: 'dist',
          keepalive: true
	}
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-connect');

  grunt.registerTask('default', ['clean', 'jshint', 'copy', 'connect:server']);
};
