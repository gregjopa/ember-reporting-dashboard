import Ember from 'ember';

export default Ember.Service.extend({

  allRepos: [
    { name: 'ember', id: 'emberjs/ember.js' },
    { name: 'angular', id: 'angular/angular' },
    { name: 'backbone', id: 'jashkenas/backbone' },
    { name: 'knockout', id: 'knockout/knockout' }
  ],

  singleRepoId: 'emberjs/ember.js',
  multipleRepoIds: ['emberjs/ember.js', 'angular/angular']

});
