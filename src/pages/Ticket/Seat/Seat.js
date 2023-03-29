import React from 'react';
import { useState, useEffect } from 'react';
import TicketInfo from './TicketInfo/TicketInfo';
import SeatInfo from './SeatInfo/SeatInfo';
import Common from '../../../components/Common/Common';

const Seat = () => {
  const { Thead } = Common;
  const [expanded, setExpanded] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [backgroundPosition, setBackgroundPosition] = useState('-260px -170px'); // 좌석 기본 값 defalt값 변수 만들어야함 현재의 경우 일반석 고정

  const expandButton = () => {
    setExpanded(!expanded);
  };

  useEffect(() => {
    if (isDisabled) {
      setBackgroundPosition('-230px -170px');
    } else if (expanded) {
      setBackgroundPosition('-260px -140px');
    } else {
      setBackgroundPosition('-260px -170px'); // 좌석 기본 값 defalt값 변수 만들어야함 현재의 경우 일반석 고정
    }
  }, [expanded]);

  return (
    <>
      <Thead>인원/좌석</Thead>
      <TicketInfo />
      <SeatInfo
        expanded={expanded}
        expandButton={expandButton}
        isDisabled={isDisabled}
        backgroundPosition={backgroundPosition}
      />
    </>
  );
};

export default Seat;
