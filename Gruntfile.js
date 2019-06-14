/*
 * grunt-kquery-upload
 * 
 *
 * Copyright (c) 2019 Nicholas Grippo
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Configuration to be run (and then tested).
    kquery_upload: {
      upload: {
        options: {
        }
      }
    }

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  grunt.registerTask('default', ['kquery_upload:upload']);


  // // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // // plugin's task(s), then test the result.
  // grunt.registerTask('test', ['clean', 'kquery_upload', 'nodeunit']);
  //
  // // By default, lint and run all tests.
  // grunt.registerTask('default', ['jshint', 'test']);

};
