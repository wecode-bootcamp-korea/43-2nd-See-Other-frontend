import React from 'react';
import styled from 'styled-components';
import Common from '../Common/Common';

const MyTicket = ({ setIsOpenModal }) => {
  const { IcoMovie } = Common;

  return (
    <DetailBg>
      <MovieDetail>
        <TicketBook>
          <ImgWrap>
            <TicketImg src="images/movie01.jpg" />
          </ImgWrap>
          <TicketBookAnne>
            <BoxReservation>
              <TicketBookNumber>예매번호</TicketBookNumber>
              <EmphNumber>3396467</EmphNumber>
            </BoxReservation>
            <TxtReservation>
              위의 예매번호로 해당 극장에서
              <br />
              티켓을 찾으세요.
            </TxtReservation>
          </TicketBookAnne>
        </TicketBook>
        <TicketDetail>
          <TicketBox>
            <TitTicket>영화제목 : </TitTicket>
            <TxtTicket>더 퍼스트 슬램덩크</TxtTicket>
          </TicketBox>
          <TicketBox>
            <TitTicket>극장이름 : </TitTicket>
            <TxtTicket>CGV 강남</TxtTicket>
          </TicketBox>
          <TicketBox>
            <TitTicket>관람일시 : </TitTicket>
            <TxtTicket>2023.3.31(금)11:00</TxtTicket>
          </TicketBox>
          <TicketBox>
            <TitTicket>관람인원 : </TitTicket>
            <TxtTicket>2명</TxtTicket>
          </TicketBox>
          <TicketBox>
            <TitTicket>관람좌석 : </TitTicket>
            <TxtTicket>G3, G4</TxtTicket>
          </TicketBox>
        </TicketDetail>
        <BtnClose
          type="button"
          onClick={() => {
            setIsOpenModal(prev => !prev);
          }}
        >
          <IcoMovie
            height="16px"
            width="18px"
            backgroundPosition="-209px 0px"
            margin="20px"
          />
        </BtnClose>
      </MovieDetail>
    </DetailBg>
  );
};

const ImgWrap = styled.div`
  width: 140px;
  display: flex;
  img {
    width: 100%;
    border-radius: 5px;
  }
`;
const TicketBook = styled.div`
  padding: 35px 35px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const TicketImg = styled.img``;

const TicketBookNumber = styled.div`
  font-size: 13px;
  text-align: center;
`;

const TxtReservation = styled.p`
  padding-top: 20px;
  font-size: 14px;
  line-height: 23px;
`;

const TicketBookAnne = styled.div`
  width: 260px;
  padding: 30px 0;
  margin-top: 20px;
  text-align: center;
`;

const BoxReservation = styled.div`
  background-color: #f6f6f6;
  padding: 15px 0;
  border-radius: 10px;
`;

const EmphNumber = styled.em`
  display: block;
  padding-top: 10px;
  color: rgb(251, 67, 87);
`;

const TicketDetail = styled.div`
  padding: 25px 35px 35px;
  font-size: 15px;
  font-weight: normal;
  text-align: center;
`;

const TicketBox = styled.div`
  display: flex;
  line-height: 20px;
`;

const TitTicket = styled.div`
  font-weight: bold;
  padding-right: 15px;
  line-height: 35px;
`;
const TxtTicket = styled.div`
  line-height: 35px;
`;
const TicketWrap = styled.div`
  background-color: #f6f6f6;
  padding: 10px 0px;
`;

const DetailBg = styled.div`
  z-index: 11000;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: fixed;
  inset: 0px;
  background: rgba(0, 0, 0, 0.4);
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`;

const MovieDetail = styled.aside`
  position: relative;
  overflow-y: auto;
  box-sizing: border-box;
  width: 500px;
  height: 485px;
  border-radius: 25px;
  background: #fff;
  overscroll-behavior-y: contain;
`;

const BtnClose = styled.button`
  position: absolute;
  right: 10px;
  top: 10px;
`;

export default MyTicket;
