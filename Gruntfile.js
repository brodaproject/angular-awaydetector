module.exports = function (grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    clean: {
      files: {
        src: [
          'tmp.js'
        ]
      }
    },
    ngmin: {
      files: {
        src: 'angular-awaydetector.js',
        dest: 'tmp.js'
      }
    },
    uglify: {
      build: {
        src: 'angular-awaydetector.js',
        dest: 'angular-awaydetector.min.js'
      }
    }
  });

  // Load the plugins that provide the tasks.
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-ngmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task(s).
  grunt.registerTask('default', ['ngmin', 'uglify', 'clean']);
};