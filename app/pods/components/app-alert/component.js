import Ember from 'ember';

export default Ember.Component.extend({

  tagName: 'div',
  classNames: ['alert', 'alert-dismissible'],
  classNameBindings: ['cssClass', 'isVisible:show:hide'],
  cssClass: 'alert-info',

  actions: {
    close() {
      this.set('isVisible', false);
    }
  }
});
