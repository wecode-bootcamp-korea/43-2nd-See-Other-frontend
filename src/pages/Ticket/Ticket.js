import React, { useState } from 'react';
import styled from 'styled-components';
import QuickMenu from '../QuickMenu/QuickMenu';
import Theater from './Component/Theater/Theater';

const Ticket = () => {
  const [selectInfo, setSelectInfo] = useState(SELECTED_MOVIE_INFO);
  const handleValue = (key, value) => {
    setSelectInfo(prevState => ({
      ...prevState,
      [key]: value,
    }));
  };

  console.log(selectInfo);

  return (
    <>
      <TicketWrap>
        <Theater handleValue={handleValue} selectInfo={selectInfo} />
      </TicketWrap>
      <QuickMenu {...selectInfo} />
    </>
  );
};

export default Ticket;

const TicketWrap = styled.div`
  background-color: #f2f0e4;
  width: 996px;
  height: 600px;
  margin: 0 auto;
`;

const SELECTED_MOVIE_INFO = {
  name: '',
  grade: '',
  region: '',
  cinema: '',
  theater: '',
  date: '',
  time: '',
  seat: [],
};
