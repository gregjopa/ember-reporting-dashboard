import Ember from 'ember';
import config from '../config/environment';

export default Ember.Service.extend({

  getStats(repoId) {
    return Ember.$.getJSON(`${config.APP.apiHost}/repos/${repoId}/stats/commit_activity`);
  },

  getCommits(repoId) {
    return Ember.$.getJSON(`${config.APP.apiHost}/repos/${repoId}/commits`);
  },

  pollStats(repoId) {

    /*
      The stats endpoint will return a 202 when the data is not ready and will start a
      background job to compile the stats. A 200 is returned when the data is ready.
      More details: https://developer.github.com/v3/repos/statistics/#statistics
    */

    return new Ember.RSVP.Promise((resolve, reject) => {

      const self = this;
      const maxTrys = 3;
      let counter = 1;

      (function poll () {
        setTimeout(() => {

          self.getStats(repoId)
            .done((data, textStatus, jqXHR) => {

              if (jqXHR.status === 200) {
                return resolve(data);
              }
              else if (jqXHR.status === 202 && counter < maxTrys) {
                counter++;
                return poll();
              }
              else {
                return reject('repository statistics are not available');
              }

            })
            .fail(jqXHR => {
              return reject(jqXHR);
            });

        }, 1000);
      })();

    });

  },

  getAllStats(repoIds) {

    const promises = repoIds.map(repoId => this.pollStats(repoId));

    return Ember.RSVP.Promise.all(promises)
      .then((data) => {

        return data.map((item, index) => {
          return {
            name: repoIds[index],
            data: item
          };
        });

      });
  }

});
