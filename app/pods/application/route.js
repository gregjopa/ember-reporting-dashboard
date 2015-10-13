import Ember from 'ember';

export default Ember.Route.extend({

  actions: {
    error(error, transition) {
      return this.transitionTo('error');
    }
  }

});
