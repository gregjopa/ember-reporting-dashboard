import Ember from 'ember';
import theme from '../../../themes/theme';

export default Ember.Component.extend({

  chartOptions: Ember.computed('series.[]', function () {

    return {
      chart: {
        type: 'area'
      },
      title: {
        text: this.get('title')
      },
      xAxis: {
        categories: this.get('categories')
      },
      yAxis: {
        title: {
          text: this.get('yAxisTitle')
        }
      },
      plotOptions: {
        area: {
          stacking: 'normal',
          lineColor: '#999999',
          lineWidth: 1,
          marker: {
            lineWidth: 1,
            lineColor: '#999999'
          }
        },
        series: {
          marker: {
            enabled: false
          }
        }
      },
      tooltip: {
        shared: true
      }
    };

  }),

  chartData: Ember.computed('series.[]', function () {
    return this.get('series');
  }),

  theme: theme

});
