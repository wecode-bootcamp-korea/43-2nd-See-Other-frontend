import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Common from '../../components/Common/Common';

const MainMore = () => {
  const { IcoMovie } = Common;
  return (
    <LinkMore>
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
  padding: 10px;
  font-size: 14px;
  text-decoration: none;
  color: #888;
`;

export default MainMore;
