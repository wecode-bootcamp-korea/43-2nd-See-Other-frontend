import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Common from '../../../components/Common/Common';
import { CATE_MENU } from './CATE_MENU.js';
import MyTicket from '../../../components/MyTicket/MyTicket';

const SeoGroupHead = ({
  isFixed,
  userToken,
  isOpenModal,
  setIsOpenModal,
  ticketInfo,
  endTime,
}) => {
  const { IcoMovie, ScreenOut } = Common;
  const { movieName, cinemaName, seatNumber, date, roomNumber, startTime } =
    ticketInfo;
  const seatList = seatNumber?.replace(/[[\]"]/g, '');

  return (
    <>
      <GroupHead className={isFixed && 'fixed'}>
        <BunchHead isFixed={isFixed}>
          <IcoMovie
            width={isFixed ? '50px' : '0'}
            height="21px"
            margin={isFixed ? '0 25px 0 0' : '0'}
            backgroundPosition="-150px 0"
          >
            나의 예매정보 더보러가기
          </IcoMovie>
          <ScreenOut as="h2">see other 메인 메뉴</ScreenOut>
          <ListMenu>
            {CATE_MENU.map(({ id, link, menu }) => (
              <li key={id}>
                <LinkMenu to={link}>
                  {menu === '예매' ? (
                    <EmphMenu isFixed={isFixed}>예매</EmphMenu>
                  ) : (
                    menu
                  )}
                </LinkMenu>
              </li>
            ))}
          </ListMenu>
          <LinkMyTicket
            onClick={() => {
              setIsOpenModal(true);
            }}
          >
            {userToken ? (
              <>
                <ScreenOut>나의 예매정보 : </ScreenOut>
                <ScreenOut>관람 영화 : </ScreenOut> {movieName}&nbsp;
                <ScreenOut>관람 극장 : </ScreenOut> / {cinemaName} {roomNumber}
                관 <ScreenOut>관람 좌석 : </ScreenOut>
                &nbsp;{seatList}&nbsp;
                <ScreenOut>관람 일시 : </ScreenOut> / {date} &#40;일&#41;{' '}
                {startTime}
                <IcoMovie
                  width="6px"
                  height="9px"
                  backgroundPosition={isFixed ? '-240px 0' : '-230px 0'}
                  margin="12px"
                >
                  나의 예매정보 더보러가기
                </IcoMovie>
              </>
            ) : (
              '예매정보는 로그인 후 확인 가능합니다.'
            )}
          </LinkMyTicket>
        </BunchHead>
      </GroupHead>
      {isOpenModal && (
        <MyTicket
          setIsOpenModal={setIsOpenModal}
          ticketInfo={ticketInfo}
          endTime={endTime}
        />
      )}
      {/* {userToken === null && (
        <Modal
          title="로그인안내"
          contents="로그인 후 이용해주세요."
          btnContents={['취소']}
        />
      )} */}
    </>
  );
};
const GroupHead = styled.div`
  display: flex;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  align-content: center;
  flex-wrap: wrap;
  border-top: 1px solid #dedede;
  border-bottom: 2px solid #fb4357;
  background-image: #fff;
  height: 50px;
  margin: 0 auto;
  &.fixed {
    z-index: 20;
    border-color: #fb4357;
    background-image: linear-gradient(
      to right,
      rgb(215, 67, 87),
      rgb(241, 79, 58) 59%,
      rgb(239, 100, 47)
    );
  }
`;

const BunchHead = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 980px;
  min-width: 980px;
  margin: 0 auto;
  color: ${props => (props.isFixed ? '#fff' : '#222')};
`;
const ListMenu = styled.ul`
  display: flex;
  margin-left: -15px;
`;

const LinkMenu = styled(Link)`
  display: block;
  padding: 7px 15px;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: inherit;
  text-decoration: none;
`;

const EmphMenu = styled.em`
  font-weight: bold;
  color: ${props => (props.isFixed ? '#fff' : '#fb4357')};
`;

const LinkMyTicket = styled(Link)`
  display: flex;
  align-items: center;
  margin: 0 -12px 0 auto;
  font-size: 14px;
  line-height: 20px;
  color: inherit;
  text-decoration: none;
`;

export default SeoGroupHead;
