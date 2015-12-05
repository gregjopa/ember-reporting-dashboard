import Ember from 'ember';

export default Ember.Route.extend({

  defaultParams: Ember.inject.service('default-params'),

  model() {

    // add delay to simulate api endpoint
    return new Ember.RSVP.Promise((resolve) => {
      Ember.run.later(() => resolve(this.get('defaultParams.allRepos')), 1000);
    });

  },

  // use afterModel() to set default value for selectedRepos
  afterModel(model, transition) {

    const controller = this.controllerFor('report-comparison');

    // handle use case when query params are set directly in the url
    const ids = transition.queryParams.ids;
    const repoIds = ids ? JSON.parse(ids) : this.get('defaultParams.multipleRepoIds');

    const repos = repoIds.map(repoId => model.findBy('id', repoId));
    controller.set('selectedRepos', repos);

  },

  actions: {

    submit(repos) {
      const repoIds = repos.map(repo => repo.id);
      this.transitionTo('report-comparison.results', { queryParams: { ids: repoIds } });
    }

  }

});
