import Ember from 'ember';
import moment from 'moment';

export default Ember.Controller.extend({

  repoIds: [],

  series: Ember.computed('model', function () {

    return this.get('model').map(item => {

      return {
        name: item.name,
        data: item.data.map(points => points.total)
      };

    });

  }),

  categories: Ember.computed('model', function () {
    let firstItem = this.get('model')[0];
    let categories = firstItem.data.map(point => moment.unix(point.week).format('MM/DD/YYYY'));
    return categories;
  })

});
