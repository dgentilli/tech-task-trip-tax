import React from 'react';

import ReportTable from './ReportTable';
import { mockSalesDataByPerson } from '../mockData';

/**Since we're using mock data this component doesn't have much of a purpose
 * But I kept it in the app because this is where I would normally fetch data
 * from the API and pass it as props.
 */

function Reports() {
  return <ReportTable mockSalesDataByPerson={mockSalesDataByPerson} />;
}

export default Reports;
