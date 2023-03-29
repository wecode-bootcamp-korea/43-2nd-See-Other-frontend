import React from 'react';
import styled from 'styled-components';
import Seat from './Seat/Seat';
import QuickMenu from '../QuickMenu/QuickMenu';

const Ticket = () => {
  return (
    <TicketWrap>
      <Seat />
      <QuickMenu />
    </TicketWrap>
  );
};

const TicketWrap = styled.div`
  background-color: #f2f0e4;
  width: 996px;
  height: 600px;
  margin: 0 auto;
`;
export default Ticket;
