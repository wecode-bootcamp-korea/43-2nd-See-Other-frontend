import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Common from '../../../../../../components/Common/Common';

const BtnSeat = ({
  isDisabled,
  seatName,
  price,
  seat,
  bookingList,
  setBookingList,
  row,
  handleValue,
}) => {
  const [expanded, setExpanded] = useState(false);
  const [backgroundPosition, setBackgroundPosition] = useState('');
  const { ScreenOut, IcoMovie } = Common;

  useEffect(() => {
    const priceName = {
      isDisabled: '-230px -170px',
      expanded: '-260px -140px',
      A: '-230px -140px',
      B: '-260px -110px',
      C: '-230px -110px',
      D: '-230px -110px',
    };

    if (isDisabled) {
      setBackgroundPosition(priceName.isDisabled);
    } else if (expanded) {
      setBackgroundPosition(priceName.expanded);
    } else {
      setBackgroundPosition(priceName[row]);
    }
  }, [isDisabled, expanded, row]);

  const getPrice = seat => {
    const row = seat[0];
    switch (row) {
      case 'A':
        return Number(price) - 5000;
      case 'B':
        return Number(price);
      case 'C':
      case 'D':
        return Number(price) + 5000;
      default:
        return 0;
    }
  };

  const expandButton = e => {
    const updatedArr = bookingList.includes(seatName)
      ? bookingList.filter(seat => seat !== seatName)
      : [...bookingList, seatName];

    const totalPrice = updatedArr.reduce(
      (acc, curr) => acc + getPrice(curr),
      0
    );

    setExpanded(!expanded);
    setBookingList(updatedArr);
    handleValue('seat', updatedArr);
    handleValue('totalPrice', totalPrice);
  };

  return (
    <BtnSeatContainer
      aria-expanded={expanded}
      onClick={() => {
        expandButton();
      }}
      disabled={isDisabled}
      value={row}
    >
      <NumSeat>
        <ScreenOut>좌석 번호</ScreenOut>
        {seatName}
      </NumSeat>
      <IcoMovie
        width="26px"
        height="26px"
        margin="2px"
        backgroundPosition={backgroundPosition}
      />
    </BtnSeatContainer>
  );
};

const BtnSeatContainer = styled.button`
  position: relative;
`;

const NumSeat = styled.span`
  position: absolute;
  color: #fff;
  font-size: 12px;
  line-height: 30px;
  width: 100%;
  font-weight: bold;
  text-align: center;
`;

export default BtnSeat;
