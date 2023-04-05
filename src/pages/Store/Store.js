import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Common from '../../components/Common/Common';
import { LIST_STORE } from './LIST_STORE.js';

const Store = () => {
  const { ScreenOut } = Common;

  return (
    <WrapStore>
      <WrapTitle>
        <TitGlobal>스토어</TitGlobal>
      </WrapTitle>
      <ListStore>
        {LIST_STORE.map(({ id, img_url, name, price, list_price }) => (
          <Li key={id}>
            <LinkStore>
              <AreaThumb>
                <ThumbGlobal src={img_url} alt="" />
              </AreaThumb>
              <TitName>
                <ScreenOut>상품 명 : </ScreenOut>
                {name}
              </TitName>
              <GroupPrice>
                <EmphPrice>
                  <ScreenOut as="span">판매가격 : </ScreenOut>
                  {price}
                </EmphPrice>
                <NumPrice>
                  <ScreenOut as="span">정가 : </ScreenOut>
                  {list_price}
                </NumPrice>
              </GroupPrice>
            </LinkStore>
          </Li>
        ))}
      </ListStore>
    </WrapStore>
  );
};

const WrapStore = styled.div`
  width: 980px;
  margin: 0 auto;
`;

const WrapTitle = styled.div`
  display: flex;
  height: 80px;
  padding-top: 50px;
  align-items: center;
  border-bottom: 3px solid #222;
`;

const TitGlobal = styled.h3`
  font-weight: 500;
  font-size: 36px;
  line-height: 45px;
  color: #222;
`;

const ListStore = styled.ul`
  padding-top: 50px;
  margin-left: -33px;
  font-size: 0;
`;

const Li = styled.li`
  display: inline-block;
  width: 220px;
  vertical-align: top;
  padding: 0 0 50px 33px;
`;

const LinkStore = styled(Link)`
  display: block;
  text-decoration: none;
`;

const AreaThumb = styled.span`
  position: relative;
  overflow: hidden;
  display: block;
  border: 1px solid #dedede;
  border-radius: 10px;
  height: 220px;
  box-sizing: border-box;

  &::after {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    padding-top: 100%;
    background-color: rgba(0, 0, 0, 0.1);
    content: '';
  }
`;

const ThumbGlobal = styled.img`
  width: 220px;
  height: 220px;
  object-fit: cover;
`;

const TitName = styled.strong`
  display: block;
  font-weight: normal;
  font-size: 17px;
  line-height: 20px;
  color: #555;
  padding-top: 15px;
`;

const GroupPrice = styled.div`
  display: flex;
  padding-top: 5px;
`;

const EmphPrice = styled.em`
  font-size: 18px;
  line-height: 25px;
  font-weight: 500;
  color: #222;
`;

const NumPrice = styled.div`
  padding-left: 5px;
  font-size: 14px;
  line-height: 25px;
  color: #888;
  text-decoration: line-through;
`;

export default Store;
