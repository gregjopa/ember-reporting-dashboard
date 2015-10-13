import Ember from 'ember';

export default Ember.Route.extend({

  actions: {
    error() {
      return this.transitionTo('error');
    }
  }

});
