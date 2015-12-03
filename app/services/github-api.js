import Ember from 'ember';
import config from '../config/environment';

export default Ember.Service.extend({

  getStats(repoIds) {

    const getEndpoint = (repoId) => {
      return Ember.$.getJSON(`${config.APP.apiHost}/repos/${repoId}/stats/commit_activity`);
    };

    const format = (results) => {
      return results.map((result, index) => {
        return {
          name: repoIds[index],
          data: result
        };
      });
    };

    return Ember.RSVP.Promise.all(repoIds.map(getEndpoint))
      .then((results) => {
        return format(results);
      });

  },

  getCommits(repoId) {
    return Ember.$.getJSON(`${config.APP.apiHost}/repos/${repoId}/commits`);
  }

});
