import Ember from 'ember';

export default Ember.Route.extend({

  defaultParams: Ember.inject.service('default-params'),

  model() {

    // add delay to simulate api endpoint
    return new Ember.RSVP.Promise((resolve) => {
      Ember.run.later(() => resolve(this.get('defaultParams.allRepos')), 1000);
    });

  },

  // set default value in form
  afterModel(model, transition) {
    const controller = this.controllerFor('report-details');
    controller.send('updateFromQueryParams', transition.queryParams, model);
  },

  actions: {

    submit(id) {
      this.transitionTo('report-details.results', { queryParams: { id: id } });
    }

  }

});
