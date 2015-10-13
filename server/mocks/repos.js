module.exports = function (app) {

  var express = require('express');
  var commitActivityRouter = express.Router();

  var commitActivityEmber = require('../fixtures/commit_activity/ember.json');
  var commitActivityAngular = require('../fixtures/commit_activity/angular.json');
  var commitActivityBackbone = require('../fixtures/commit_activity/backbone.json');
  var commitActivityKnockout = require('../fixtures/commit_activity/knockout.json');

  var commitsEmber = require('../fixtures/commits/ember.json');
  var commitsAngular = require('../fixtures/commits/angular.json');
  var commitsBackbone = require('../fixtures/commits/backbone.json');
  var commitsKnockout = require('../fixtures/commits/knockout.json');

  var delay = 1000;


  // GET /repos/:owner/:repo/stats/commit_activity
  commitActivityRouter.get('/:owner/:repo/stats/commit_activity', function (req, res) {

    var name = req.params.owner + '/' + req.params.repo;

    var fixtures = {
      'emberjs/ember.js': commitActivityEmber,
      'angular/angular': commitActivityAngular,
      'jashkenas/backbone': commitActivityBackbone,
      'knockout/knockout': commitActivityKnockout
    };

    var json = fixtures[name];

    setTimeout(function () {
      res.send(json);
    }, delay);

  });


  // GET /repos/:owner/:repo/commits
  commitActivityRouter.get('/:owner/:repo/commits', function (req, res) {

    var name = req.params.owner + '/' + req.params.repo;

    var fixtures = {
      'emberjs/ember.js': commitsEmber,
      'angular/angular': commitsAngular,
      'jashkenas/backbone': commitsBackbone,
      'knockout/knockout': commitsKnockout
    };

    var json = fixtures[name];

    setTimeout(function () {
      res.send(json);
    }, delay);

  });


  app.use('/api/repos', commitActivityRouter);

};
