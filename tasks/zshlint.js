// Generated by LiveScript 1.6.0
(function(){
  'use strict';
  var each, exec, path;
  each = require('prelude-ls').each;
  exec = require('child_process').exec;
  path = require('path');
  module.exports = function(grunt){
    return grunt.registerMultiTask('zshlint', 'Lint zsh files', function(){
      var done, files, options, runs, this$ = this;
      done = this.async();
      files = this.filesSrc;
      options = this.options({
        force: false
      });
      runs = 0;
      return each(function(file){
        return exec("zsh -n " + file, function(err, stdout, stderr){
          var msg;
          if (err) {
            if (stdout) {
              grunt.log.error(stdout);
            }
            if (stderr) {
              grunt.log.error(stderr);
            }
          }
          if (++runs === files.length) {
            if (this$.errorCount) {
              return done(options.force);
            }
            msg = files.length + ' file' + (files.length === 1 ? '' : 's') + ' lint free.';
            grunt.log.ok(msg);
            return done();
          }
        });
      })(
      files);
    });
  };
}).call(this);
