import Ember from 'ember';

export default Ember.Controller.extend({

  repos: [
    { name: 'ember', id: 'emberjs/ember.js' },
    { name: 'angular', id: 'angular/angular' },
    { name: 'backbone', id: 'jashkenas/backbone' },
    { name: 'knockout', id: 'knockout/knockout' }
  ],

  selectedRepo: { name: 'ember', id: 'emberjs/ember.js' }

  // selectedRepos: Ember.computed('model', function () {
  //   console.log('selected Repos', this.get('model'));
  //   return this.get('repos').filter(item => {
  //     return this.get('model').indexOf(item.id) !== -1;
  //   });
  // })


});
