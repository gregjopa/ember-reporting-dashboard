import Ember from 'ember';

export default Ember.Route.extend({

  actions: {

    submit(repos) {
      const repoIds = repos.map(repo => repo.id);
      this.transitionTo('report-comparison.results', { queryParams: { ids: repoIds } });
    }

  }

});
