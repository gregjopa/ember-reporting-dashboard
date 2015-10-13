import Ember from 'ember';

export default Ember.Component.extend({

  classNameBindings: ['truncateText'],

  truncateText: Ember.computed(function () {
    return this.get('content').length > 60;
  })

});
