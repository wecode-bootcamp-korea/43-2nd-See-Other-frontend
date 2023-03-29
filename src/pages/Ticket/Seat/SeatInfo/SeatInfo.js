import React from 'react';
import styled from 'styled-components';
import BtnSeat from './BtnSeat/BtnSeat';

const SeatInfo = ({
  expandButton,
  expanded,
  isDisabled,
  backgroundPosition,
}) => {
  return (
    <GroupSeat>
      <TitScreen>Screen</TitScreen>
      <WrapSeat>
        <BtnSeat
          expanded={expanded}
          expandButton={expandButton}
          isDisabled={isDisabled}
          backgroundPosition={backgroundPosition}
        />
      </WrapSeat>
    </GroupSeat>
  );
};

const GroupSeat = styled.div`
  padding: 30px 0 50px;
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
  margin: 40px auto 0;
`;

export default SeatInfo;
