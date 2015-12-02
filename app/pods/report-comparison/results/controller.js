import Ember from 'ember';
import moment from 'moment';

export default Ember.Controller.extend({

  queryParams: [
    'ids'
  ],

  ids: ['emberjs/ember.js', 'angular/angular'],

  series: Ember.computed('model', function () {

    return this.get('model').map(item => {

      return {
        name: item.name,
        data: item.data.map(points => points.total)
      };

    });

  }),

  categories: Ember.computed('model', function () {
    const firstItem = this.get('model')[0];
    const categories = firstItem.data.map(point => moment.unix(point.week).format('MM/DD/YYYY'));
    return categories;
  })

});
