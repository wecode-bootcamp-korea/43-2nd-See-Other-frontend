import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Common from '../../../components/Common/Common';

const SeoWrapHead = () => {
  const { IcoMovie } = Common;

  const userToken = localStorage.getItem('token');

  return (
    <WrapHead>
      <TitLogo>
        <LinkLogo to="/">
          <IcoMovie width="135px" height="44px" backgroundPosition="0 -80px">
            see other
          </IcoMovie>
        </LinkLogo>
      </TitLogo>
      <MenuUtil>
        <LinkUtil to="/account">
          <IcoMovie
            width="40px"
            height="40px"
            backgroundPosition={userToken ? '-230px -200px' : '-90px -60px'}
          />
          <TxtUtil>{userToken ? '로그아웃' : '로그인'}</TxtUtil>
        </LinkUtil>
        <LinkUtil to="/account">
          <IcoMovie
            width="40px"
            height="40px"
            backgroundPosition="-180px -30px"
          />
          <TxtUtil>회원가입</TxtUtil>
        </LinkUtil>
        <LinkUtil to="#">
          <IcoMovie
            width="40px"
            height="40px"
            backgroundPosition="-220px -30px"
          />
          <TxtUtil>마이티켓</TxtUtil>
        </LinkUtil>
      </MenuUtil>
    </WrapHead>
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

const LinkUtil = styled(Link)`
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
