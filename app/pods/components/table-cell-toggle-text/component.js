import Ember from 'ember';

export default Ember.Component.extend({

  charCount: 50,
  isHidden: true,

  isLongText: Ember.computed('content', function () {
    return this.get('content').length > this.get('charCount');
  }),

  toggleButtonText: Ember.computed('isHidden', function () {
    return this.get('isHidden') ? 'More...' : 'Less...';
  }),

  text: Ember.computed('isHidden', function () {

    let text = this.get('content');

    if (this.get('isHidden')) {
      text = text.substring(0, this.get('charCount'));
    }

    return text;

  }),

  actions: {
    toggle() {
      this.toggleProperty('isHidden');
    }
  }

});
