import Ember from 'ember';

export default Ember.Route.extend({

  api: Ember.inject.service('github-api'),
  defaultParams: Ember.inject.service('default-params'),

  queryParams: {
    ids: {
      refreshModel: true
    }
  },

  // set default value in parent form to support browser back button
  beforeModel(transition) {
    const parentController = this.controllerFor('report-comparison');
    parentController.send('updateFromQueryParams', transition.queryParams);
  },

  model(params) {
    const repoIds = params.ids.length ? params.ids : this.get('defaultParams.multipleRepoIds');
    return this.get('api').getAllStats(repoIds);
  }

});
