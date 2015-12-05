import Ember from 'ember';

export default Ember.Controller.extend({

  selectedRepos: [],
  alertIsVisible: false,
  alertMsg: 'Choose at least one repo.',

  actions: {

    validate(selectedRepos) {

      if (!selectedRepos.length) {
        this.set('alertIsVisible', true);
        return;
      }

      this.set('alertIsVisible', false);
      this.send('submit', selectedRepos);

    }

  }

});
