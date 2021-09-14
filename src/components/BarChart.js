import React from 'react';
import styled from 'styled-components';
import { Bar } from 'react-chartjs-2';

import theme from '../theme';
import { ChartHeader } from '../globalStyles/reusableStyles';

/**
 * REFS: https://www.npmjs.com/package/react-chartjs-2
 * http://jerairrest.github.io/react-chartjs-2/
 */

const ChartBar = (props) => {
  /**The below lines aren't necessary with mock data BUT
   * when fetching from an API we want to make sure we have the data
   * otherwise we'll crash the app.
   */

  const data = props.data ? props.data : null;
  const labels = props.labels ? props.labels : null;
  const title = props.title ? props.title : null;

  const bar = (
    <Bar
      data={{
        labels: labels,
        datasets: [
          {
            data: data,
            label: 'Indicates number of sales',
            borderColor: '#ccc',
            backgroundColor: ['#ffea08', '#24a822', '#e81f10', '#333'],
            fill: true,
            options: {
              plugins: {
                label: { display: false },
                title: { display: false },
                legend: { display: false },
              },
            },
          },
        ],
      }}
    />
  );
  return (
    <div>
      <ChartHeader>{title ? title : 'Chart Data'}</ChartHeader>
      {data && labels ? bar : 'Loading...'}
    </div>
  );
};
export default ChartBar;
