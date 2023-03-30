import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Common from '../../../components/Common/Common';

const MainTitle = () => {
  const { ScreenOut } = Common;
  return (
    <>
      <ScreenOut as="h3">카테고리 선택</ScreenOut>
      <ListTab role="tablist">
        <Li>
          <LinkTab role="tab" aria-selected="true">
            무비차트
          </LinkTab>
        </Li>
        <Li>
          <LinkTab role="tab" aria-selected="false">
            상영예정작
          </LinkTab>
        </Li>
      </ListTab>
    </>
  );
};

const ListTab = styled.ul`
  display: flex;
  width: 980px;
  margin: 0 auto 20px;
`;

const LinkTab = styled(Link)`
  position: relative;
  margin-right: 40px;
  font-size: 26px;
  line-height: 35px;
  color: #666;
  text-decoration: none;

  &[aria-selected='true'] {
    display: block;
    font-weight: bold;
    color: #222;
  }
`;

const Li = styled.li`
  & + li ${LinkTab} {
    &::after {
      position: absolute;
      left: -19px;
      top: 0;
      bottom: 0;
      width: 1px;
      background-color: #dedede;
      content: '';
    }
  }
`;
export default MainTitle;
