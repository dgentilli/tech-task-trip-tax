import React from 'react';
import styled from 'styled-components';
import { Doughnut } from 'react-chartjs-2';

import theme from '../theme';
import { ChartHeader } from '../globalStyles/reusableStyles';

/**
 * REFS: https://www.npmjs.com/package/react-chartjs-2
 * http://jerairrest.github.io/react-chartjs-2/
 */

const DoughnutChart = (props) => {
  /**The below variables aren't necessary with mock data BUT
   * when fetching from an API we want to make sure we have the data
   * so we don't crash the app.
   */

  const data = props.data ? props.data : null;
  const labels = props.labels ? props.labels : null;
  const title = props.title ? props.title : null;

  const doughnut = (
    <Doughnut
      data={{
        labels: labels,
        datasets: [
          {
            data: data,
            label: labels,
            borderColor: '#ccc',
            backgroundColor: ['#ffea08', '#24a822', '#e81f10', '#333'],
            fill: true,
          },
        ],
      }}
    />
  );
  return (
    <div>
      <ChartHeader>{title ? title : 'Chart Data'}</ChartHeader>
      {data && labels ? doughnut : 'Loading...'}
    </div>
  );
};
export default DoughnutChart;
