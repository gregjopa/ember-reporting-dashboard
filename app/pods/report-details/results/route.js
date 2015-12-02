import Ember from 'ember';
import config from '../../../config/environment';

export default Ember.Route.extend({

  queryParams: {
    id: {
      refreshModel: true
    }
  },

  beforeModel(transition) {
    // handle use case when query param value is set directly in the url
    const parentController = this.controllerFor('report-details');
    parentController.send('updateSelectedRepo', transition.queryParams.id);
  },

  model(params) {
    return Ember.$.getJSON(config.APP.apiHost + '/repos/' + params.id + '/commits');
  }

});
