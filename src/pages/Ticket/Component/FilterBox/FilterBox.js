import React from 'react';
import styled from 'styled-components';

const FilterBox = () => {
  return (
    <FilterGroup>
      <ViewAllBtn type="button">전체</ViewAllBtn>
      <SelectTheater>
        <option>특별관</option>
        {THEATER_LIST.map(({ id, value }) => {
          return <option key={id}>{value}</option>;
        })}
      </SelectTheater>
    </FilterGroup>
  );
};

export default FilterBox;

const FilterGroup = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 5px 15px 5px;
  margin-bottom: 10px;
  border-bottom: 1px solid #d4d3c9;
`;

const ViewAllBtn = styled.button`
  margin: 0;
  padding: 0;
  vertical-align: middle;
  border: 0 none;
  background-color: transparent;
  cursor: pointer;
`;

const SelectTheater = styled.select`
  border: 0 none;
  background-color: transparent;
  text-align: right;

  &:focus {
    outline: none;
  }
`;

const THEATER_LIST = [
  { id: 1, value: 'IMAX' },
  { id: 2, value: 'CINE de CHEIF' },
  { id: 3, value: 'SUITE CINEMA' },
];
