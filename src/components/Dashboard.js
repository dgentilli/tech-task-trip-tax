import React from 'react';
import styled from 'styled-components';

import DoughtnutChart from './DoughnutChart';
import BarChart from './BarChart';
import theme from '../theme';
import { mockSalesDataByPerson } from '../mockData';

/**Importing the mock data here in this component instead of importing directly to the chart
 * Because if we were fetching data from an API I would do it in a parent component and pass
 * the data as props.
 */

const DashboardWrapper = styled.div`
  min-height: 100vh;
  margin: 0 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function Dashboard() {
  const numSalesByPerson = mockSalesDataByPerson.map((item) => item.numSales);
  const salesRevenueByPerson = mockSalesDataByPerson.map(
    (item) => item.revenue
  );
  const labels = mockSalesDataByPerson.map((item) => item.employeeName);

  React.useEffect(() => {
    console.log('numSalesByPerson', numSalesByPerson);
  });

  return (
    <DashboardWrapper>
      <DoughtnutChart
        data={salesRevenueByPerson}
        labels={labels}
        title='Sales Revenue by Person'
      />
      <BarChart
        data={numSalesByPerson}
        labels={labels}
        title='Number of Sales by Person'
      />
    </DashboardWrapper>
  );
}

export default Dashboard;
