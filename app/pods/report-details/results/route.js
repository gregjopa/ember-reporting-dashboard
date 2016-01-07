import Ember from 'ember';

export default Ember.Route.extend({

  api: Ember.inject.service('github-api'),
  defaultParams: Ember.inject.service('default-params'),

  queryParams: {
    id: {
      refreshModel: true
    }
  },

  // set default value in parent form to support browser back button
  beforeModel(transition) {
    const parentController = this.controllerFor('report-details');
    parentController.send('updateFromQueryParams', transition.queryParams);
  },

  model(params) {
    const repoId = params.id || this.get('defaultParams.singleRepoId');
    return this.get('api').getCommits(repoId);
  }

});
