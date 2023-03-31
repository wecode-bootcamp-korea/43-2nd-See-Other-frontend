import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { APIS } from '../../../config';
import Modal from '../../../components/Modal/Modal';
import AccountData from './AccountData';

const Kakao = () => {
  const { KAKAO_OAUTH_URL } = AccountData;
  const navigate = useNavigate('');
  const [isAccess, setIsAccess] = useState(true);

  useEffect(() => {
    fetch(`${KAKAO_OAUTH_URL}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        fetch(APIS.signup, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json;charset=utf-8',
            authorization: data.access_token,
          },
        })
          .then(res => res.json())
          .then(list => {
            if (list.accessToken) {
              localStorage.setItem('token', list.accessToken);
              // localStorage.setItem('nickname', list.accessToken);
              navigate('/');
            } else {
              setIsAccess(!isAccess);
            }
          });
      });
  }, [KAKAO_OAUTH_URL, navigate, isAccess]);
  return (
    <Loading>
      <LoadingTitle>Loading</LoadingTitle>
      <CircleBox>
        <Circle />
        <Circle />
        <Circle />
        <Circle />
      </CircleBox>
      {!isAccess && (
        <Modal
          title="로그인 실패"
          contents="다시 한번 확인해주세요"
          btnContents={['확인']}
        />
      )}
    </Loading>
  );
};

export default Kakao;

const MovingLoading = keyframes`
0%{
  opacity: 0;
}
50%{
  opacity: 1;
}
100%{
  opacity: 0;
}`;

const Loading = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background-color: #fff;
  z-index: 1;
`;

const LoadingTitle = styled.h3`
  font-size: 120%;
  margin-bottom: 15px;
  color: #333;
`;

const CircleBox = styled.div`
  display: flex;
`;

const Circle = styled.div`
  background-color: #ed3124;
  width: 20px;
  height: 20px;
  border-radius: 30px;
  margin: 10px;
  opacity: 0;
  animation: ${MovingLoading} 2.5s linear infinite alternate;

  &:nth-child(2) {
    animation-delay: 0.2s;
  }
  &:nth-child(3) {
    animation-delay: 0.4s;
  }
  &:nth-child(4) {
    animation-delay: 0.6s;
  }
`;
