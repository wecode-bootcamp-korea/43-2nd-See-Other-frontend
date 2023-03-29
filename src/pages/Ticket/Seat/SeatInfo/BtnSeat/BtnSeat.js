import React from 'react';
import styled from 'styled-components';
import Common from '../../../../../components/Common/Common';

const BtnSeat = ({
  expanded,
  expandButton,
  isDisabled,
  backgroundPosition,
}) => {
  const { ScreenOut, IcoMovie } = Common;

  return (
    <BtnSeatContainer
      aria-expanded={expanded}
      onClick={expandButton}
      disabled={isDisabled}
    >
      <NumSeat>
        <ScreenOut>좌석 번호</ScreenOut>1
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
