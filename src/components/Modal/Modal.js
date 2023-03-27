import React from 'react';
import styled from 'styled-components';
import Common from '../../components/Common/Common';

const Modal = props => {
  const { ScreenOut } = Common;
  const { title, contents, btnContents } = props;

  return (
    <CommLayer>
      {/*
       * 본문에의제목을
       * 부모컴포넌트 title에넣어주시면 됩니다
       */}
      <ScreenOut>{title}</ScreenOut>
      <InnerLayer>
        {/*
         * 본문에 나올 내용을
         * 부모컴포넌트 contents에넣어주시면 됩니다
         */}
        <BodyLayer>{contents}</BodyLayer>
        <FooterLayer>
          {/*
           * 버튼의 경우 부모 컴포넌트에
           * 아래 예시처럼 넣어주시면 됩니다.
           * btnContents={['취소', '확인']}
           */}
          {btnContents.map((value, index) => (
            <BtnComm key={index} type="button">
              {value}
            </BtnComm>
          ))}
        </FooterLayer>
      </InnerLayer>
    </CommLayer>
  );
};

const CommLayer = styled.div`
  z-index: 11000;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow-y: auto;
  overscroll-behavior-y: contain;
  position: fixed;
  inset: 0px;
  background: rgba(0, 0, 0, 0.4);
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`;

const InnerLayer = styled.div`
  width: 300px;
  background-color: #fff;
  text-align: left;
`;

const BodyLayer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 15px 20px 15px 30px;
  min-height: 80px;
  font-size: 15px;
  line-height: 25px;
  color: #555;
  white-space: pre-line;
  word-break: break-all;
`;

const FooterLayer = styled.div`
  display: flex;
`;

const BtnComm = styled.button`
  width: 100%;
  height: 45px;
  font-size: 15px;
  color: #555;
  border-top: 1px solid #dedede;
`;

export default Modal;
