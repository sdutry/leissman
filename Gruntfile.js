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
        ]
      }
    },
    concat: {
      css: {
        src: ['node_modules/bootstrap/dist/css/bootstrap.min.css', 
              'node_modules/bootstrap/dist/css/bootstrap-theme.min.css',
	      'src/css/site.css'],
          dest: 'dist/assets/css/main.css'
        },
 
        js: {
          src: ['node_modules/jquery/dist/jquery.min.js', 
                'node_modules/bootstrap/dist/js/bootstrap.min.js',
                'node_modules/image-map-resizer/js/imageMapResizer.min.js', 
                'src/js/site.js'],
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
    },
    assemble: {
      options: {
        flatten: true,
        partials: 'src/partials/*.hbs',
        data: 'src/data/*.json',
        layoutdir: 'src/layouts',
        layout: 'default.hbs'
      },
      site: {
        files: {'dist/': ['src/pages/*.hbs']}
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-assemble');

  grunt.registerTask('default', ['clean', 'jshint', 'concat', 'uglify', 'cssmin', 'copy:todist', 'assemble']);
};
