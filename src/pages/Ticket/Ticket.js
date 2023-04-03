import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import QuickMenu from './Component/QuickMenu/QuickMenu';
import Theater from './Component/Theater/Theater';
import Seat from './Component/Seat/Seat';

const initValue = {
  movie: '',
  korName: '',
  grade: '',
  region: '',
  cinemaName: '',
  hallType: '',
  date: '',
  time: '',
  seat: [],
  totalPrice: '',
  imageUrl: '',
  screeningRoom: '',
};

const Ticket = () => {
  const [selectInfo, setSelectInfo] = useState(initValue);
  const [showTheater, setShowTheater] = useState(true);
  const handleValue = useCallback((key, value) => {
    setSelectInfo(prevState => ({
      ...prevState,
      [key]: value,
    }));
  }, []);

  const changeTicket = () => {
    setShowTheater(!showTheater);
  };

  const resetSelectd = () => {
    setSelectInfo(initValue);
  };
  return (
    <TicketWrap>
      <ResetBtn onClick={resetSelectd} selectInfo={selectInfo}>
        옵션 초기화
      </ResetBtn>
      {showTheater ? (
        <Theater handleValue={handleValue} selectInfo={selectInfo} />
      ) : (
        <Seat handleValue={handleValue} selectInfo={selectInfo} />
      )}
      <QuickMenu
        changeTicket={changeTicket}
        selectInfo={selectInfo}
        showTheater={showTheater}
        resetSelectd={resetSelectd}
      />
    </TicketWrap>
  );
};

export default Ticket;

const TicketWrap = styled.div`
  position: relative;
  background-color: #f2f0e4;
  width: 996px;
  height: 600px;
  margin: 80px auto 200px;
`;

const ResetBtn = styled.button`
  position: absolute;
  top: -40px;
  right: 0;
  width: 100px;
  height: 30px;
  background-color: ${props =>
    props.selectInfo.movie || props.selectInfo.region ? '#333' : '#fff'};
  border-radius: 5px;
  color: #fff;
`;
