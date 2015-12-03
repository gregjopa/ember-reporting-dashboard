import Ember from 'ember';

export default Ember.Route.extend({

  api: Ember.inject.service('github-api'),

  queryParams: {
    ids: {
      refreshModel: true
    }
  },

  beforeModel(transition) {
    // handle use case when query param value is set directly in the url
    const parentController = this.controllerFor('report-comparison');
    parentController.send('updateSelectedRepos', transition.queryParams.ids);
  },

  model(params) {
    return this.get('api').getStats(params.ids);
  }

});
