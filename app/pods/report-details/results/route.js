import Ember from 'ember';
import config from '../../../config/environment';

export default Ember.Route.extend({

  queryParams: {
    repo: {
      refreshModel: true
    }
  },

  model(params) {
    return Ember.$.getJSON(config.APP.apiHost + '/repos/' + params.repo + '/commits');
  }

});
