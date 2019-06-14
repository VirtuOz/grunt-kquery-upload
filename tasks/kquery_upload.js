/*
 * grunt-kquery-upload
 * 
 *
 * Copyright (c) 2019 Nicholas Grippo
 * Licensed under the MIT license.
 */

'use strict';
const path = require('path');
var kqueryUpload = require("kquery-upload");
module.exports = function (grunt) {

    // Please see the Grunt documentation for more information regarding task
    // creation: http://gruntjs.com/creating-tasks

    grunt.registerMultiTask('kquery_upload', 'Grunt plugin for kquery upload module', function () {
        // Merge task-specific and/or target-specific options with these defaults.
        var done = this.async();
        var config = grunt.config('kquery_upload');
        var options = this.options({
            deletePreviousCachedUpload: true,
            downloadBeforeDeletion: true,
            tryCachedCredentials: true,
            uploadCache: ".uploadCache",
            downloadFolderPath: "./downloads",
            credentialsFile: ".credentials",
            loginCookie: ".cookies.json",
            IQSHost: "nuance-va"
        });

        options.kqueryFile = path.resolve(options.kqueryFile);
        options.loginCookie = path.resolve(options.loginCookie);
        options.uploadCache = path.resolve(options.uploadCache);
        options.credentialsFile = path.resolve(options.credentialsFile);
        options.downloadFolderPath= path.resolve(options.downloadFolderPath);


        if (grunt.file.exists(options.kqueryFile)) {
            grunt.log.debug("how");

            kqueryUpload(options).then(() => {
                    grunt.log.write("KQuery Upload Done ");
                    done();
                })
                .catch((error) => {
                    grunt.log.error(error);
                    done(false);
                });


        }
        else{
            grunt.log.error("KQuery is missing");
        }


        // Iterate over all specified file groups.
        /*this.files.forEach(function(f) {
          // Concat specified files.
          var src = f.src.filter(function(filepath) {
            // Warn on and remove invalid source files (if nonull was set).
            if (!grunt.file.exists(filepath)) {
              grunt.log.warn('Source file "' + filepath + '" not found.');
              return false;
            } else {
              return true;
            }
          }).map(function(filepath) {
            // Read file source.
            return grunt.file.read(filepath);
          }).join(grunt.util.normalizelf(options.separator));

          // Handle options.
          src += options.punctuation;

          // Write the destination file.
          grunt.file.write(f.dest, src);

          // Print a success message.
          grunt.log.writeln('File "' + f.dest + '" created.');
        });*/
    });

};
