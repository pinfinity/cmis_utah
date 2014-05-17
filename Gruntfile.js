module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      options: {
        includePaths: ['_bower_components/foundation/scss']
      },
      dist: {
        options: {},
        src: '_stylesheets/app.scss',
        dest: 'stylesheets/app.css'
      }
    },

    coffee: {
      dist: {
        options: {},
        src: '_scripts/**/*.coffee',
        dest: '_scripts/app.js'
      }
    },

    concat: {
      dist: {
        options: {
          separator: ';'
        },
        src: ['_bower_components/foundation/js/foundation.js', '_scripts/app.js'],
        dest: 'scripts/app.js'
      }
    },

    copy: {
      vendor_js: {
        options: {},
        files: [{
            src: '_bower_components/jquery/dist/jquery.js',
            dest: 'scripts/jquery.js'
          },{
            src: '_bower_components/modernizr/modernizr.js',
            dest: 'scripts/modernizr.js'
          }
        ],
      }
    },

    watch: {
      grunt: { files: ['Gruntfile.js'] },

      sass: {
        files: '_stylesheets/**/*.scss',
        tasks: ['sass']
      },

      coffee: {
        files: '_scripts/**/*.coffee',
        tasks: ['coffee', 'concat']
      }
    }
  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('build', ['sass', 'coffee', 'concat', 'copy']);
  grunt.registerTask('default', ['build','watch']);
}