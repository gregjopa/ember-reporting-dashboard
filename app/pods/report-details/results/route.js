import Ember from 'ember';

export default Ember.Route.extend({

  api: Ember.inject.service('github-api'),

  queryParams: {
    id: {
      refreshModel: true
    }
  },

  beforeModel(transition) {
    // handle use case when query param value is set directly in the url
    const parentController = this.controllerFor('report-details');
    parentController.send('updateSelectedRepo', transition.queryParams.id);
  },

  model(params) {
    return this.get('api').getCommits(params.id);
  }

});
