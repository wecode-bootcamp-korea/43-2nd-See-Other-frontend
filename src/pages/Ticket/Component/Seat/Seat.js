import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import { APIS } from '../../../../config';
import TicketInfo from './TicketInfo/TicketInfo';
import SeatInfo from './SeatInfo/SeatInfo';
import Common from '../../../../components/Common/Common';
import styled from 'styled-components';

const Seat = ({ handleValue, selectInfo }) => {
  const [seatList, setSeatList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isDisabled, setIsDisabled] = useState(false);
  const { Thead } = Common;
  const { movie, cinemaName, hallType, date, time, screeningRoom } = selectInfo;

  useEffect(() => {
    const values = {
      movie,
      cinemaName,
      hallType,
      date,
      time,
      screeningRoom,
    };

    const removeSpaces = value => {
      if (typeof value === 'string') {
        return value.replace(/\s/g, '');
      }
      return value;
    };

    const sanitizedValues = Object.fromEntries(
      Object.entries(values).map(([key, value]) => [key, removeSpaces(value)])
    );

    const queryParams = queryString.stringify(sanitizedValues, {
      skipEmptyString: true,
    });

    fetch(`${APIS.seats}?${queryParams}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8', //필수로 넣어야함
      },
    })
      .then(res => res.json())
      .then(data => {
        setSeatList(data.getSeats[0]);
        setLoading(false);
      });
  }, [movie, cinemaName, hallType, date, time, screeningRoom]);

  if (loading) return null;

  return (
    <SeatWrap>
      <Thead>인원/좌석</Thead>
      <TicketInfo {...seatList} selectInfo={selectInfo} />
      <SeatInfo
        {...selectInfo}
        {...seatList}
        isDisabled={isDisabled}
        setIsDisabled={setIsDisabled}
        handleValue={handleValue}
      />
    </SeatWrap>
  );
};

export default Seat;

const SeatWrap = styled.div`
  height: 100%;
`;
