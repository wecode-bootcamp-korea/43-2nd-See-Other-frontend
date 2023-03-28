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
  padding: 10px 20px;
  font-size: 14px;
  text-decoration: none;
  color: #888;
  border: 1px solid #dedede;
  border-radius: 20px;
`;

export default MainMore;
