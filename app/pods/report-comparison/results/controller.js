import Ember from 'ember';
import moment from 'moment';

export default Ember.Controller.extend({

  queryParams: [
    'ids'
  ],

  ids: [],

  series: Ember.computed('model', function () {

    const data = this.get('model').map(item => {

      // calculate total
      const { total } = item.data.reduce((prev, curr) => {
        return { total: prev.total + curr.total };
      });

      // format
      return {
        name: item.name,
        total: total,
        data: item.data.map(point => [this.formatDate(point.week), point.total])
      };

    });

    // sort by total in decending order
    return data.sort((obj1, obj2) => obj2.total - obj1.total);

  }),

  formatDate(seconds) {
    return moment.unix(seconds).format('MM/DD/YYYY');
  }

});
