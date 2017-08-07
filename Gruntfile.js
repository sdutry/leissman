module.exports = function(grunt) {
  'use strict';
  
  grunt.initConfig({
    clean: {
      build: {
        src: ['dist']
      }
    },
    jshint: {
      files: ['Gruntfile.js']
    },
    copy: {
      todist: {
        files: [
          {
            cwd: 'src',
            expand: true,
            src: ['images/**/*'],
            dest: 'dist/assets'
          },
          {
	    cwd: 'src',
	    expand: true,
	    src: ['**/*', '!images', '!images/**/*'],
            dest: 'dist'
          }
        ]
      }
    },
    concat: {
      css: {
        src: ['node_modules/bootstrap/dist/css/bootstrap.min.css', 'node_modules/bootstrap/dist/css/bootstrap-theme.min.css'],
          dest: 'dist/assets/css/main.css'
        },
 
        js: {
          src: ['node_modules/jquery/dist/jquery.min.js', 'node_modules/bootstrap/dist/js/bootstrap.min.js','node_modules/image-map-resizer/js/imageMapResizer.min.js'],
          dest: 'dist/assets/js/main.js'
        }
    },
    uglify: {
      js: {
        src: 'dist/assets/js/main.js',
        dest: 'dist/assets/js/main.min.js'
      }
    },
    cssmin: {
      css: {
        src: 'dist/assets/css/main.css',
        dest: 'dist/assets/css/main.min.css'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask('default', ['clean', 'jshint', 'concat', 'uglify', 'cssmin', 'copy:todist']);
};
