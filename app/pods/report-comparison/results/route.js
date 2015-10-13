import Ember from 'ember';
import config from '../../../config/environment';

export default Ember.Route.extend({

  model(params) {

    let repoIds = decodeURIComponent(params.repos).split(',');
    let getEndpoint = (repoId) => {
      return Ember.$.getJSON(config.APP.apiHost + '/repos/' + repoId + '/stats/commit_activity');
    };

    return Ember.RSVP.Promise.all(repoIds.map(getEndpoint))
      .then((results) => {
        return results.map((result, index) => {
          return {
            name: repoIds[index],
            data: result
          };
        });
      });
  }

});
