import Ember from 'ember';

export default Ember.Route.extend({

  actions: {
    error(err) {

      let msg;

      if (err.status === 403) {
        msg = 'GitHub API rate limit exceeded';
      }
      else if (typeof err.statusText === 'string') {
        msg = err.statusText;
      }
      else {
        msg = 'Internal Server Error';
      }

      console.error(err);
      return this.transitionTo('error', { queryParams: { msg: msg } });

    }
  }

});
