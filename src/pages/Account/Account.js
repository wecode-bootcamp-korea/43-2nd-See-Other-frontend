import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Common from '../../components/Common/Common';
import AccountData from './component/AccountData';

const Account = () => {
  const { IcoMovie } = Common;

  const { KAKAO_AUTH_URL } = AccountData;

  return (
    <AccountContainer>
      <AccountWrap>
        <IcoMovie width="135px" height="34px" backgroundPosition="0 -80px">
          see other
        </IcoMovie>
        <AccountTitle>
          간편하게 로그인하고 <br />
          다양한 서비스를 이용해보세요.
        </AccountTitle>
        <Link to={`${KAKAO_AUTH_URL}`}>
          <KakaoBtn
            src="./images/kakao_login_large_wide.png"
            alt="카카오로 시작하기"
          />
        </Link>
        <LinkEmail to="#none">다른 이메일로 시작하기</LinkEmail>
      </AccountWrap>
    </AccountContainer>
  );
};

export default Account;

// FIXME : outlet 적용하면 삭제될 부분
const AccountContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #fff;
  z-index: 1;
`;

const AccountWrap = styled.div`
  box-sizing: border-box;
  width: 20%;
  min-width: 300px;
  padding: 7% 1.5%;
  border: 1px solid #eee;
  box-shadow: rgba(0, 0, 255, 0.1) 1px 1px 23px 1px;
  text-align: center;
`;

const AccountTitle = styled.h3`
  margin-top: 15%;
  color: #555;
  font-size: 90%;
  line-height: 1.5;
`;

const KakaoBtn = styled.img`
  width: 100%;
  margin: 25% 0;
`;

const LinkEmail = styled.a`
  color: #828282;
  font-size: 80%;
  text-decoration: underline;
`;
