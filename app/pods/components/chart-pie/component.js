import Ember from 'ember';
import theme from '../../../highcharts-configs/theme';

export default Ember.Component.extend({

  chartOptions: Ember.computed('series.[]', function () {

    return {
      chart: {
        type: 'pie'
      },
      title: {
        text: this.get('title')
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      legend: {
        enabled: false
      },
      plotOptions: {
        pie: {
          dataLabels: {
            enabled: true,
            format: '<b>{point.name}</b>: {point.percentage:.1f} %'
          }
        }
      }
    };

  }),

  chartData: Ember.computed('series.[]', function () {
    return [{
      name: 'commits',
      colorByPoint: true,
      data: this.get('series').map(points => [points.name, points.total])
    }];
  }),

  theme: theme

});
