/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');
var funnel = require('broccoli-funnel');

module.exports = function (defaults) {
  var app = new EmberApp(defaults, {
    emberHighCharts: {
      includeHighCharts: true,
      includeHighStock: false,
      includeHighMaps: false,
      includeHighChartsMore: false
    }
  });

  app.import('bower_components/bootstrap/dist/css/bootstrap.css');
  app.import('bower_components/bootstrap/js/transition.js');
  app.import('bower_components/bootstrap/js/collapse.js');

  var fonts = new funnel('bower_components/bootstrap/fonts', {
    srcDir: '/',
    destDir: 'fonts'
  });

  return app.toTree(fonts);
};
