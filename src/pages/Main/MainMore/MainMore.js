import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Common from '../../../components/Common/Common';

const MainMore = ({ more }) => {
  const { IcoMovie } = Common;
  return (
    <LinkMore to={more}>
      {/*
       * 받아야할 링크를 부모 컴포넌트에 넣어주세요
       * ex ) more="/movies"
       */}
      전체보기
      <IcoMovie
        width="7px"
        height="10px"
        margin="2px  0 0 5px"
        backgroundPosition="-230px 0"
      />
    </LinkMore>
  );
};

const LinkMore = styled(Link)`
  position: absolute;
  top: 0;
  right: 0;
  padding: 10px 20px;
  font-size: 14px;
  text-decoration: none;
  color: #888;
  border: 1px solid #dedede;
  border-radius: 20px;
`;

export default MainMore;
