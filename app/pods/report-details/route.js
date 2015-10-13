import Ember from 'ember';

export default Ember.Route.extend({

  actions: {

    submit(repo) {
      this.transitionTo('report-details.results', { queryParams: { repo: repo.id } });
    }

  }

});
