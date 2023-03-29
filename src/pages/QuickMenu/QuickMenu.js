import React from 'react';
// import CsCenter from './CsCenter/CsCenter';
import { Link } from 'react-router-dom';
import Common from '../../components/Common/Common';
import styled from 'styled-components';

const QuickMenu = () => {
  const { ImgGobal, IcoMovie } = Common;

  return (
    <>
      <TicketWrap />

      <TotalWrap>
        <InnerTotal>
          <IcoMovie width="105px" height="105px" backgroundPosition="0 -350px">
            영화선택
          </IcoMovie>
          <MovieWrap>
            <ImgWrap>
              <ImgGobal src="../../images/pooh.png" alt="영화이미지" />
            </ImgWrap>
            <ImgDetail>
              <span>웅남이</span>
              <span>SCREENX 2D</span>
              <span>19세 관람가</span>
            </ImgDetail>
          </MovieWrap>
          <InfoTicket>
            <TicketBox>
              <TitTicket>극장 : </TitTicket>
              <TxtTicket>CGV 구로</TxtTicket>
            </TicketBox>
            <TicketBox>
              <TitTicket>일시 : </TitTicket>
              <TxtTicket>2023.3.31(금)11:00</TxtTicket>
            </TicketBox>
            <TicketBox>
              <TitTicket>상영관 : </TitTicket>
              <TxtTicket>1관 SCREENX 6층</TxtTicket>
            </TicketBox>
            <TicketBox>
              <TitTicket>인원 : </TitTicket>
              <TxtTicket>일반 1명</TxtTicket>
            </TicketBox>
          </InfoTicket>
          <InfoTicket>
            <TicketBox>
              <TitTicket>좌석명 : </TitTicket>
              <TxtTicket>일반석</TxtTicket>
            </TicketBox>
            <TicketBox>
              <TitTicket>좌석번호 : </TitTicket>
              <TxtTicket>E4</TxtTicket>
            </TicketBox>
          </InfoTicket>
          <InfoTicket>
            <TicketBox>
              <TitTicket>일반 : </TitTicket>
              <TxtTicket>14,000원 x 1</TxtTicket>
            </TicketBox>
            <TicketBox>
              <TitTicket>총금액 : </TitTicket>
              <TxtTicket>14,000원</TxtTicket>
            </TicketBox>
          </InfoTicket>

          <IcoMovie
            width="105px"
            height="105px"
            backgroundPosition="-120px -240px"
          >
            영화선택
          </IcoMovie>
        </InnerTotal>
      </TotalWrap>
    </>
  );
};

const TicketWrap = styled.div`
  background-color: #f2f0e4;
  width: 996px;
  height: 600px;
  margin: 0 auto;
`;

const TotalWrap = styled.div`
  background-color: #222;
  height: 128px;
`;

const InnerTotal = styled.div`
  width: 996px;
  margin: 0 auto;
  padding: 10px 0;
  display: flex;
  text-align: left;
  justify-content: space-between;
  color: #ccc;
`;

const MovieWrap = styled.div`
  display: flex;
  padding: 10px;
`;

const ImgWrap = styled.div`
  width: 70px;
`;
const ImgDetail = styled.div`
  margin-left: 10px;
  font-size: 12px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const InfoTicket = styled.div`
  width: 195px;
  padding: 10px;
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

const InfoPayment = styled.div`
  width: 155px;
  font-size: 12px;
  display: flex;
  flex-direction: column;
  border: 1px solid #a0a0a0;
  border-bottom: none;
  border-top: none;
`;

const PaymentBox = styled.div`
  padding: 30px 0;
`;

export default QuickMenu;
