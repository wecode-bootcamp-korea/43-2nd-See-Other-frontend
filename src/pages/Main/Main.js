import React from 'react';
import Modal from '../../components/Modal/Modal';

const Main = () => {
  return (
    <Modal
      title="로그인 팝업"
      contents={`로그인이 필요한 서비스 입니다. \n 로그인페이지로 이동하시겠습니까?`}
      btnContents={['취소', '확인']}
    />
  );
};

export default Main;
