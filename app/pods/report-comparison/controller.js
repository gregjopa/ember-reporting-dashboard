import Ember from 'ember';

export default Ember.Controller.extend({

  defaultParams: Ember.inject.service('default-params'),
  selectedRepos: [],
  alertIsVisible: false,
  alertMsg: 'Choose at least one repo.',

  actions: {

    validate(selectedRepos) {

      if (!selectedRepos.length) {
        this.set('alertIsVisible', true);
        return;
      }

      this.set('alertIsVisible', false);
      this.send('submit', selectedRepos);

    },

    updateFromQueryParams(params, model) {

      params = params || {};
      model = model || this.get('model');

      if (model) {
        const ids = params.ids;
        const repoIds = ids ? JSON.parse(ids) : this.get('defaultParams.multipleRepoIds');
        const repos = repoIds.map(repoId => model.findBy('id', repoId));
        this.set('selectedRepos', repos);
      }

    }

  }

});
