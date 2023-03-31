import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Common from '../../../components/Common/Common';

const SeoWrapHead = () => {
  const { IcoMovie } = Common;
  const navigator = useNavigate();
  const userToken = localStorage.getItem('token');

  const handleAccount = () => {
    if (userToken === null) {
      console.log('로그아웃 상태');
      navigator('/account');
    } else {
      console.log('로그인 상태');
      localStorage.removeItem('token');
      localStorage.removeItem('nickname');
      navigator('/');
      alert('로그아웃 되었습니다.');
    }
  };

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
        <LinkUtil onClick={handleAccount}>
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
        <LinkUtil>
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
