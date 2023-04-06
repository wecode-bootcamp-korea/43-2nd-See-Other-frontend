import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Common from '../../../components/Common/Common';
import MyTicket from '../../MyTicket/MyTicket';
import Modal from '../../Modal/Modal';

const SeoWrapHead = ({
  userToken,
  handleAccount,
  handleModalConfirm,
  isOpenModal,
  setIsOpenModal,
  isAccount,
  ticketInfo,
  endTime,
}) => {
  const { IcoMovie } = Common;

  return (
    <>
      <WrapHead>
        <TitLogo>
          <LinkLogo to="/">
            <IcoMovie width="135px" height="44px" backgroundPosition="0 -80px">
              see other
            </IcoMovie>
          </LinkLogo>
        </TitLogo>
        <MenuUtil>
          <LinkUtil onClick={handleAccount} type="button">
            <IcoMovie
              width="40px"
              height="40px"
              backgroundPosition={userToken ? '-230px -200px' : '-140px -30px'}
            />
            <TxtUtil>{userToken ? '로그아웃' : '로그인'}</TxtUtil>
          </LinkUtil>
          <LinkUtil>
            <IcoMovie
              width="40px"
              height="40px"
              backgroundPosition="-180px -30px"
            />
            <TxtUtil>회원가입</TxtUtil>
          </LinkUtil>
          <LinkUtil
            role="button"
            onClick={() => {
              setIsOpenModal(true);
            }}
          >
            <IcoMovie
              width="40px"
              height="40px"
              backgroundPosition="-220px -30px"
            />
            <TxtUtil>마이티켓</TxtUtil>
          </LinkUtil>
        </MenuUtil>
      </WrapHead>
      {isOpenModal && (
        <MyTicket
          setIsOpenModal={setIsOpenModal}
          ticketInfo={ticketInfo}
          endTime={endTime}
        />
      )}
      {isAccount && (
        <Modal
          title="로그인, 로그아웃"
          contents="로그아웃 하시겠습니까?"
          btnContents={['취소', '확인']}
          onConfirm={handleModalConfirm}
        />
      )}
    </>
  );
};

const WrapHead = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  width: 980px;
  height: 113px;
  margin: 0 auto;
`;

const TitLogo = styled.h1`
  height: 44px;
`;

const LinkLogo = styled(Link)`
  display: block;
`;

const MenuUtil = styled.div`
  margin: 0 -20px 0 auto;
`;

const LinkUtil = styled.button`
  display: inline-block;
  margin: 0 20px;
  vertical-align: top;
  text-align: center;
  text-decoration: none;
`;

const TxtUtil = styled.span`
  display: block;
  padding-top: 5px;
  font-size: 13px;
  line-height: 18px;
  color: #555;
`;

export default SeoWrapHead;
