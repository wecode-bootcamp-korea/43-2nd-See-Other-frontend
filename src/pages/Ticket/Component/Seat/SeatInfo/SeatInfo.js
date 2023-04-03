import React, { useState } from 'react';
import styled from 'styled-components';
import BtnSeat from './BtnSeat/BtnSeat';

const SeatInfo = ({ totalSeats, reservedSeats, price, handleValue, seat }) => {
  const [bookingList, setBookingList] = useState([]);

  const seats = Array.from({ length: Number(totalSeats) }, (_, index) => {
    const row = String.fromCharCode(65 + Math.floor(index / 6));
    const seatNum = (index % 6) + 1;
    const seatName = `${row}${seatNum}`;
    const disabled = reservedSeats.includes(seatName);

    return (
      <BtnSeat
        key={seatName}
        isDisabled={disabled}
        seatName={seatName}
        seat={seat}
        price={price}
        row={row}
        bookingList={bookingList}
        setBookingList={setBookingList}
        handleValue={handleValue}
      />
    );
  });

  return (
    <GroupSeat>
      <TitScreen>Screen</TitScreen>
      <WrapSeat>{seats}</WrapSeat>
    </GroupSeat>
  );
};

const GroupSeat = styled.div`
  padding: 30px 0;
  min-height: 287px;
  font-size: 0;
`;

const TitScreen = styled.strong`
  display: block;
  font-size: 15px;
  line-height: 30px;
  text-align: center;
  width: 100%;
  font-weight: bold;
  color: #222;
  background-color: #e0ddd5;
`;

const WrapSeat = styled.div`
  font-size: 0;
  width: 180px;
  margin: 110px auto 0;
`;

export default SeatInfo;
