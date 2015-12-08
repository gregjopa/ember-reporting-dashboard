import Ember from 'ember';

export default Ember.Route.extend({

  defaultParams: Ember.inject.service('default-params'),

  model() {

    // add delay to simulate api endpoint
    return new Ember.RSVP.Promise((resolve) => {
      Ember.run.later(() => resolve(this.get('defaultParams.allRepos')), 1000);
    });

  },

  // use afterModel() to set default value for selectedRepo
  afterModel(model, transition) {

    const controller = this.controllerFor('report-details');

    // handle use case when query params are set directly in the url
    const id = transition.queryParams.id;
    const repoId = id ? id : this.get('defaultParams.singleRepoId');

    const repo = model.findBy('id', repoId);
    controller.set('selectedRepo', repo);

  },

  actions: {

    submit(id) {
      this.transitionTo('report-details.results', { queryParams: { id: id } });
    }

  }

});
