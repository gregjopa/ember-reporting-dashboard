/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    // Add options here
  });

  app.import('bower_components/bootstrap/dist/css/bootstrap.css');
  app.import('bower_components/bootstrap/dist/js/bootstrap.js');

  var fontFile = 'bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular';
  app.import(fontFile + '.eot', { destDir: 'fonts' });
  app.import(fontFile + '.ttf', { destDir: 'fonts' });
  app.import(fontFile + '.svg', { destDir: 'fonts' });
  app.import(fontFile + '.woff', { destDir: 'fonts' });
  app.import(fontFile + '.woff2', { destDir: 'fonts' });

  return app.toTree();
};
