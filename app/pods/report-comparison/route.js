import Ember from 'ember';

export default Ember.Route.extend({

  actions: {

    submit(repos) {
      let repoIds = repos.map(item => item.id);
      let formattedRepos = encodeURIComponent(repoIds);
      this.transitionTo('report-comparison.results', formattedRepos);
    }

  }

});
