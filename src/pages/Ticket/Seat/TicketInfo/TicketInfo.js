import React from 'react';
import styled from 'styled-components';
import Common from '../../../../components/Common/Common';

const TicketInfo = () => {
  const { ScreenOut, IcoMovie } = Common;

  return (
    <GroupSeatInfo>
      <WrapInfo>
        <TxtInfo>
          <ScreenOut>관람 정보 : </ScreenOut>건대입구, 4관 4층 남은좌석 122/127
        </TxtInfo>
        <EmphTime>
          <ScreenOut>관람 시간 : </ScreenOut>2023.03.29 &#40;수&#41; 20:10 ~
          21:57
        </EmphTime>
      </WrapInfo>
      <div>
        <ScreenOut>좌석 정보 리스트</ScreenOut>
        <ListSeatType>
          {SEAT_INFO.map(({ id, img_position, name }) => {
            return (
              <Li key={id}>
                <IcoMovie
                  width="16px"
                  height="16px"
                  backgroundPosition={img_position}
                />
                <TxtType>{name}</TxtType>
              </Li>
            );
          })}
        </ListSeatType>
        <ScreenOut>좌석 상세 안내</ScreenOut>
        <ListSeatType>
          {TICKET_INFO.map(({ id, img_position, name, price }) => {
            return (
              <Li key={id}>
                <IcoMovie
                  width="16px"
                  height="16px"
                  backgroundPosition={img_position}
                />
                <TxtType>{name}</TxtType>
                <EmphTxt>{price}</EmphTxt>
              </Li>
            );
          })}
        </ListSeatType>
      </div>
    </GroupSeatInfo>
  );
};

const GroupSeatInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 20px;
  border: 1px solid #dedede;
`;

const WrapInfo = styled.div`
  text-align: center;
`;

const TxtInfo = styled.span`
  display: block;
  font-size: 14px;
  line-height: 25px;
  color: #555;
`;

const EmphTime = styled.em`
  display: block;
  padding-top: 5px;
  font-weight: bold;
  font-size: 18px;
  line-height: 25px;
  color: #222;
`;

const ListSeatType = styled.ul`
  display: inline-block;
  padding-left: 50px;
  font-size: 0;
  vertical-align: top;
`;

const Li = styled.li`
  display: flex;
  justify-content: space-between;

  & + & {
    padding-top: 13px;
  }
`;

const TxtType = styled.span`
  display: inline-block;
  vertical-align: top;
  font-size: 12px;
  line-height: 16px;
  color: #555;
  padding-left: 7px;
`;

const EmphTxt = styled.em`
  display: inline-block;
  font-weight: bold;
  color: #d20100;
  font-size: 12px;
  line-height: 16px;
  vertical-align: top;
  padding-left: 7px;
`;

const SEAT_INFO = [
  {
    id: 1,
    name: '선택',
    img_position: '-230px -70px',
  },
  {
    id: 2,
    name: '예매완료',
    img_position: '-200px -70px',
  },
];

const TICKET_INFO = [
  {
    id: 1,
    name: '이코노미석',
    price: '10,000원',
    img_position: '-200px -90px',
  },
  {
    id: 2,
    name: '비즈니스석',
    price: '20,000원',
    img_position: '-230px -90px',
  },
  {
    id: 3,
    name: '프리미엄석',
    price: '25,000원',
    img_position: '-260px -90px',
  },
];

export default TicketInfo;
