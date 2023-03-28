import React from 'react';
import styled from 'styled-components';

const SelectOption = ({ list }) => {
  return (
    <section>
      <SelectGroup>
        {list.map(({ id, value }) => {
          return <option key={id}>{value}</option>;
        })}
      </SelectGroup>
      <SelectBtn>GO</SelectBtn>
    </section>
  );
};

export default SelectOption;

const SelectGroup = styled.select`
  padding: 0 50px 0 10px;
  height: 34px;
  line-height: 34px;
  background-color: transparent;
  border: 1px solid #d8d8d8;
  vertical-align: top;
`;

const SelectBtn = styled.button`
  height: 34px;
  width: 36px;
  line-height: 34px;
  padding: 0;
  margin-left: 2px;
  background-color: #9e9e9e;
  border: none;
  color: #fff;
`;
