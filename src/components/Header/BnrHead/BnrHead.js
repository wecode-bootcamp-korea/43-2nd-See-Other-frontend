import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Common from '../../../components/Common/Common';

const SeoBnrHead = () => {
  const { IcoMovie, ImgGobal, IrPm } = Common;
  const closeBnr = useRef(null);
  const handleBnr = () => {
    closeBnr.current.style.marginTop = '-80px';
  };
  return (
    <BnrHead ref={closeBnr}>
      <InnerBnr>
        <LinkBnr to="#">
          <ImgGobal
            src="../../images/@bnr_980x80.jpg"
            alt="15세 이상 관람가, 웅남이, 절찬 상영중"
          />
          <IrPm as="span">15세 이상 관람가</IrPm>
        </LinkBnr>
        <BtnBnr type="button" onClick={handleBnr}>
          <IcoMovie
            width="15px"
            height="15px"
            margin="8px"
            backgroundPosition="-210px 0"
          >
            닫기
          </IcoMovie>
        </BtnBnr>
      </InnerBnr>
    </BnrHead>
  );
};

const BnrHead = styled.div`
  width: 100%;
  height: 80px;
  margin: 0 auto;
  background-color: #ffde00;
  transition: all 0.25s ease-out;
`;

const InnerBnr = styled.div`
  position: relative;
  width: 980px;
  margin: 0 auto;
`;

const LinkBnr = styled(Link)`
  display: block;
  width: 980px;
  margin: 0 auto;
`;

const BtnBnr = styled.button`
  position: absolute;
  right: -10px;
  top: 3px;
`;

export default SeoBnrHead;
