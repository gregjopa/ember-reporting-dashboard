import Ember from 'ember';

export default Ember.Controller.extend({

  repos: [
    { name: 'ember', id: 'emberjs/ember.js' },
    { name: 'angular', id: 'angular/angular' },
    { name: 'backbone', id: 'jashkenas/backbone' },
    { name: 'knockout', id: 'knockout/knockout' }
  ],

  selectedRepos: [
    { name: 'ember', id: 'emberjs/ember.js' },
    { name: 'angular', id: 'angular/angular' }
  ]

});
