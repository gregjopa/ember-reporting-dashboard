import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function () {

  this.route('report-comparison', { path: '/comparison' }, function () {
    this.route('results');
  });

  this.route('report-details', { path: '/details' }, function () {
    this.route('results');
  });

  this.route('error');

});

export default Router;
