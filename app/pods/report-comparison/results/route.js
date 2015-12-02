import Ember from 'ember';
import config from '../../../config/environment';

export default Ember.Route.extend({

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

    const getEndpoint = (repoId) => {
      return Ember.$.getJSON(config.APP.apiHost + '/repos/' + repoId + '/stats/commit_activity');
    };

    return Ember.RSVP.Promise.all(params.ids.map(getEndpoint))
      .then((results) => {
        return results.map((result, index) => {
          return {
            name: params.ids[index],
            data: result
          };
        });
      });
  }

});
