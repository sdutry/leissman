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
    'http-server': {
      dev: {
        root: 'dist',
	port: process.env.PORT || 8080
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-http-server');

  grunt.registerTask('default', ['clean', 'jshint', 'copy']);
  grunt.registerTask('server', ['http-server']);
};
