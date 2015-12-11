import Ember from 'ember';

export default Ember.Route.extend({

  api: Ember.inject.service('github-api'),
  defaultParams: Ember.inject.service('default-params'),

  queryParams: {
    ids: {
      refreshModel: true
    }
  },

  model({ ids }) {
    const repoIds = ids.length ? ids : this.get('defaultParams.multipleRepoIds');
    return this.get('api').getAllStats(repoIds);
  }

});
