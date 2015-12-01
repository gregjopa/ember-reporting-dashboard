/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');
var funnel = require('broccoli-funnel');

module.exports = function (defaults) {
  var app = new EmberApp(defaults, {
    // Add options here
  });

  app.import('bower_components/bootstrap/dist/css/bootstrap.css');
  app.import('bower_components/bootstrap/dist/js/bootstrap.js');

  var fonts = new funnel('bower_components/bootstrap/fonts', {
    srcDir: '/',
    destDir: 'fonts'
  });

  return app.toTree(fonts);
};
