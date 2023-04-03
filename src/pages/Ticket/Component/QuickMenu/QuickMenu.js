import React, { useState } from 'react';
import Common from '../../../../components/Common/Common';
import styled from 'styled-components';

const QuickMenu = ({ changeTicket, selectInfo, showTheater, resetSelectd }) => {
  const {
    korName,
    grade,
    region,
    hallType,
    cinemaName,
    date,
    time,
    seat,
    imageUrl,
    totalPrice,
  } = selectInfo;
  const { ImgGobal, IcoMovie } = Common;
  const [selected, setselected] = useState();
  const isAllSeledted =
    korName && grade && region && cinemaName && hallType && date && time;

  const handelCheck = e => {
    setselected(e.target.value);
  };
  return (
    <TotalWrap>
      <InnerTotal>
        {!showTheater && (
          <button
            onClick={() => {
              changeTicket();
              resetSelectd();
            }}
          >
            <IcoMovie
              width="105px"
              height="105px"
              backgroundPosition="0 -350px"
            >
              영화선택
            </IcoMovie>{' '}
          </button>
        )}

        <MovieWrap>
          <ImgWrap>
            {korName && <ImgGobal src={imageUrl} alt="영화이미지" />}
          </ImgWrap>
          <ImgDetail>
            <span>{korName}</span>
            <span>{korName && `${grade}세 관람가`}</span>
          </ImgDetail>
        </MovieWrap>
        <InfoTicket>
          <TicketBox>
            <TitTicket>극장 : </TitTicket>
            <TxtTicket>{cinemaName && `CGV ${cinemaName}`}</TxtTicket>
          </TicketBox>
          <TicketBox>
            <TitTicket>일시 : </TitTicket>
            <TxtTicket>
              {date.toString()}&nbsp;
              {time}
            </TxtTicket>
          </TicketBox>
          <TicketBox>
            <TitTicket>상영관 : </TitTicket>
            <TxtTicket> {hallType} </TxtTicket>
          </TicketBox>
          <TicketBox>
            <TitTicket>인원 : </TitTicket>
            <TxtTicket>{seat.length > 0 && `일반 ${seat.length}명`}</TxtTicket>
          </TicketBox>
        </InfoTicket>
        <InfoTicket>
          <TicketBox>
            <TitTicket>좌석명 : </TitTicket>
            <TxtTicket> {seat.length > 0 && `일반석`}</TxtTicket>
          </TicketBox>
          <TicketBox>
            <TitTicket>좌석번호 : </TitTicket>
            {seat.map(seatName => {
              return <TxtTicket key={seatName}>{seatName},&nbsp;</TxtTicket>;
            })}
          </TicketBox>
          <TicketBox>
            <TitTicket>결제금액 : </TitTicket>
            <TxtTicket>
              {seat.length > 0 && `${totalPrice.toLocaleString()}원`}
            </TxtTicket>
          </TicketBox>
        </InfoTicket>

        <InfoTicket>
          {PATMENT_LIST.map(({ id, pay }) => {
            return (
              <PaymentBox key={id}>
                <InpCheck
                  type="radio"
                  id={pay}
                  value={pay}
                  checked={selected === pay}
                  onChange={handelCheck}
                />
                <InpLabel htmlFor={pay}>
                  <IcoMovie
                    width="15px"
                    height="15px"
                    backgroundPosition={
                      selected === pay ? '-20px 0px;' : '0px 0px;'
                    }
                    margin="8px"
                  />
                </InpLabel>
                <PaymentInfo>{pay}</PaymentInfo>
              </PaymentBox>
            );
          })}
        </InfoTicket>
        {showTheater ? (
          <button disabled={!isAllSeledted} onClick={changeTicket}>
            <IcoMovie
              width="105px"
              height="105px"
              backgroundPosition={
                isAllSeledted ? '-120px -130px' : '0px -130px'
              }
            >
              결제하기
            </IcoMovie>
          </button>
        ) : (
          <button disabled={seat.length} onClick={changeTicket}>
            <IcoMovie
              width="105px"
              height="105px"
              backgroundPosition={seat.length ? '-120px -240px' : '0px -240px'}
            >
              결제하기
            </IcoMovie>
          </button>
        )}
      </InnerTotal>
    </TotalWrap>
  );
};
const TotalWrap = styled.div`
  background-color: #222;
  height: 128px;
`;

const InnerTotal = styled.div`
  width: 996px;
  margin: 0 auto;
  padding: 8px 15px;
  display: flex;
  text-align: left;
  justify-content: space-between;
  color: #ccc;
  box-sizing: border-box;
`;

const MovieWrap = styled.div`
  display: flex;
  width: 180px;
  height: 100px;
  padding: 5px;
`;

const ImgWrap = styled.div`
  width: 65px;
  margin-left: 15px;
`;

const ImgDetail = styled.div`
  margin-left: 10px;
  padding: 7px;
  height: 100%;
  font-size: 12px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const InfoTicket = styled.div`
  width: 195px;
  padding: 10px 0px 10px 20px;
  font-size: 12px;
  overflow: hidden;
  box-sizing: border-box;
  position: relative;

  & + &::after {
    position: absolute;
    top: 20px;
    bottom: 20px;
    left: 0;
    width: 1px;
    background-color: #555;
    content: '';
  }
`;

const TicketBox = styled.div`
  display: flex;
  line-height: 20px;
`;

const TitTicket = styled.div`
  width: 60px;
  font-weight: bold;
`;

const TxtTicket = styled.div``;

const PaymentBox = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const InpCheck = styled.input`
  position: absolute;
  left: 0;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 0 none;
  background: none;
  -webkit-appearance: none;
  opacity: 0.01;
`;

const InpLabel = styled.label``;

const PaymentInfo = styled.label`
  line-height: 20px;
  font-size: 12px;
`;

export default QuickMenu;

const PATMENT_LIST = [
  { id: 1, pay: '신용카드' },
  { id: 2, pay: '무통장 입금' },
  { id: 3, pay: '카카오페이' },
];
