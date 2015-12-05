import Ember from 'ember';

export default Ember.Route.extend({

  api: Ember.inject.service('github-api'),
  defaultParams: Ember.inject.service('default-params'),

  queryParams: {
    id: {
      refreshModel: true
    }
  },

  model(params) {
    const repoId = params.id || this.get('defaultParams.singleRepoId');
    return this.get('api').getCommits(repoId);
  }

});
