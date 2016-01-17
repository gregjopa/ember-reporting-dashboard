import Ember from 'ember';
import theme from '../../../highcharts-configs/theme';

export default Ember.Component.extend({

  chartOptions: Ember.computed('series.[]', function () {

    return {
      chart: {
        type: 'column'
      },
      title: {
        text: this.get('title')
      },
      xAxis: {
        type: 'category'
      },
      yAxis: {
        title: {
          text: this.get('yAxisTitle')
        }
      },
      legend: {
        enabled: false
      },
      plotOptions: {
        column: {
          dataLabels: {
            enabled: true
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
