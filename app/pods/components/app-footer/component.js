import Ember from 'ember';

export default Ember.Component.extend({

  year: Ember.computed(function () {
    return new Date().getFullYear();
  })

});
