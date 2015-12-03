import Ember from 'ember';

export default Ember.Controller.extend({

  repos: Ember.A([
    { name: 'ember', id: 'emberjs/ember.js' },
    { name: 'angular', id: 'angular/angular' },
    { name: 'backbone', id: 'jashkenas/backbone' },
    { name: 'knockout', id: 'knockout/knockout' }
  ]),

  selectedRepo: Ember.computed.oneWay('repos.firstObject'),

  actions: {

    updateSelectedRepo(id) {

      // validate input and check if id is already selected
      if (!id || this.get('selectedRepo').id === id) {
        return;
      }

      const repo = this.get('repos').findBy('id', id);

      if (repo) {
        this.set('selectedRepo', repo);
      }

    }

  }

});
