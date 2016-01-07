import Ember from 'ember';

export default Ember.Controller.extend({

  defaultParams: Ember.inject.service('default-params'),
  selectedRepo: '',

  actions: {

    updateFromQueryParams(params, model) {

      params = params || {};
      model = model || this.get('model');

      if (model) {
        const repoId = params.id ? params.id : this.get('defaultParams.singleRepoId');
        const repo = model.findBy('id', repoId);
        this.set('selectedRepo', repo);
      }

    }

  }

});
