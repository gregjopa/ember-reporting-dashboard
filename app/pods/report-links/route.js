import Ember from 'ember';

export default Ember.Route.extend({

  defaultParams: Ember.inject.service('default-params'),

  model() {
    return this.get('defaultParams.allRepos');
  },

  actions: {

    linkToWithArray(ids) {
      this.transitionTo('report-comparison.results', { queryParams: { ids: JSON.parse(ids) } });
    }

  }

});
