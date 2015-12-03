import Ember from 'ember';

export default Ember.Controller.extend({

  repos: Ember.A([
    { name: 'ember', id: 'emberjs/ember.js' },
    { name: 'angular', id: 'angular/angular' },
    { name: 'backbone', id: 'jashkenas/backbone' },
    { name: 'knockout', id: 'knockout/knockout' }
  ]),

  selectedRepos: Ember.computed('repos', function () {
    return this.get('repos').slice(0, 2);
  }),

  actions: {

    updateSelectedRepos(ids) {

      // validate input
      if (!ids) {
        return;
      }

      // convert input string to array
      const repoIds = JSON.parse(ids);

      const alreadySelected = repoIds.every(repoId => {
        return Boolean(this.get('selectedRepos').findBy('id', repoId));
      });

      const isSameSize = this.get('selectedRepos').length === repoIds.length;

      // check if ids are already selected
      if (alreadySelected && isSameSize) {
        return;
      }

      const repos = repoIds.map(repoId => this.get('repos').findBy('id', repoId));

      if (repos.length) {
        this.set('selectedRepos', repos);
      }

    }

  }

});
