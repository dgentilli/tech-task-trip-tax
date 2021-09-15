import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import theme from '../theme';
import {
  InputContainer,
  InputLabel,
  Input,
} from '../globalStyles/reusableStyles';
import { mockSalesDataByPerson } from '../mockData';

const ReportTableWrapper = styled.div`
  width: 95%;
  height: 100vh;
  margin: 0 auto;
`;

const Row = styled.div`
  width: 100%;
  height: 2.5rem;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  &:first-child {
    border-bottom: 1px solid ${theme.color.ORANGE};
  }

  &:nth-child(odd) {
    background-color: #eee;
    border-radius: 4px;
  }
`;

const ColumnHeader = styled.h5`
  color: ${theme.color.TEXT_DARK};
  width: 55px;
`;

const DataItem = styled.p`
  text-align: left;
  color: ${theme.color.TEXT_DARK};
  width: 50px;
`;

const ReportTable = () => {
  const [filterInput, setFilterInput] = useState();
  const [filteredList, setFilteredList] = useState();
  const [message, setMessage] = useState();
  const headers = ['Name', 'Nr. Sales', 'Sales Revenue'];
  const headerDisplay = headers.map((item) => {
    return <ColumnHeader key={item}>{item}</ColumnHeader>;
  });

  useEffect(() => {
    let tempInput = filterInput && filterInput.toLowerCase();
    let tempArray = mockSalesDataByPerson.filter(
      (item) => item.employeeName.toLowerCase() === tempInput
    );
    if (tempArray.length > 0) {
      setFilteredList(tempArray);
      setMessage(null);
    } else {
      setMessage('There were no results that matched your query.');
    }
    return () => setFilteredList(null);
  }, [filterInput]);

  const dataDisplay = (data) => {
    return data.map((item) => {
      return (
        <Row key={item.employeeName}>
          <DataItem>{item.employeeName}</DataItem>
          <DataItem>{item.numSales}</DataItem>
          <DataItem>{item.revenue}</DataItem>
        </Row>
      );
    });
  };

  return (
    <ReportTableWrapper>
      <InputContainer>
        <InputLabel>Filter by name:</InputLabel>
        <Input onChange={(event) => setFilterInput(event.target.value)}></Input>
      </InputContainer>
      <div>{filterInput && message ? message : ''}</div>
      <Row>{headerDisplay}</Row>
      {filteredList && filteredList.length > 0
        ? dataDisplay(filteredList)
        : dataDisplay(mockSalesDataByPerson)}
    </ReportTableWrapper>
  );
};

export default ReportTable;
