import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MainMore from '../MainMore/MainMore';
import Common from '../../../components/Common/Common';
import styled from 'styled-components';

const SpecialTheater = () => {
  const { ImgGobal } = Common;
  const [over, setOver] = useState(1);

  const info = THEATER.filter(list => list.id === over)[0];

  return (
    <TheaterBox>
      <TitleTheater>특별관</TitleTheater>
      <TheaterWrap>
        <TheaterLink to="">
          <ImgWidth>
            <ImgGobal src={info.src} alt="" />
          </ImgWidth>
          <WrapText>
            <TitleExplan>{info.name}</TitleExplan>
            <SubExplan>{info.hasutag}</SubExplan>
          </WrapText>
        </TheaterLink>

        <TheaterList>
          {THEATER.map(({ id, name, hasutag }) => (
            <TheaterEach key={id}>
              <EachLink
                to=""
                onMouseOver={() => {
                  setOver(id);
                }}
              >
                <TheaterName>{name}</TheaterName>
                <TheaterHasuTag>{hasutag}</TheaterHasuTag>
              </EachLink>
            </TheaterEach>
          ))}
        </TheaterList>
      </TheaterWrap>
      <MainMore />
    </TheaterBox>
  );
};
const TheaterBox = styled.div`
  position: relative;
  width: 980px;
  margin: 50px auto;
`;
const TitleTheater = styled.h3`
  font-size: 26px;
  line-height: 35px;
  color: #222;
`;
const TheaterWrap = styled.div`
  display: flex;
  margin-top: 19px;
  justify-content: space-between;
`;

const TheaterLink = styled(Link)`
  position: relative;
  border-radius: 10px;
  width: 500px;
  overflow: hidden;
  &:before {
    content: '';
    position: absolute;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.4);
  }
`;
const ImgWidth = styled.div`
  overflow: hidden;
  width: 500px;
  height: 310px;
`;
const WrapText = styled.div`
  position: absolute;
  bottom: 30px;
  left: 30px;
`;
const TitleExplan = styled.strong`
  font-size: 40px;
  color: #fff;
  line-height: 45px;
  font-weight: bold;
  display: block;
  padding-bottom: 10px;
  letter-spacing: 0.035em;
`;
const SubExplan = styled.div`
  font-size: 17px;
  color: #fff;
`;
const TheaterList = styled.ul`
  width: 440px;
`;
const TheaterEach = styled.li`
  height: 33.33%;
  border-bottom: 1px solid #dedede;
  box-sizing: border-box;
`;
const EachLink = styled(Link)`
  display: flex;
  padding: 0 25px;
  justify-content: space-between;
  align-items: center;
  text-decoration: none;
  color: #222;
  height: 100%;
  border: 1px solid transparent;
  &:hover {
    border-color: #000;
    border-radius: 10px;
    font-weight: bold;
  }
`;
const TheaterName = styled.strong`
  font-weight: 700px;
  font-size: 18px;
  line-height: 1.444em;
`;
const TheaterHasuTag = styled.span`
  border-radius: 10px;
  font-size: 14px;
  font-weight: 400;
  padding: 2px 7px;
  color: #666;
  line-height: 1.429em;
  background-color: #f6f6f6;
  word-break: break-all;
`;

export default SpecialTheater;

const THEATER = [
  {
    id: 1,
    name: 'SUITE CINEMA',
    hasutag: '#호텔 컨셉의 프리미엄관',
    src: '../../images/theater.jpg',
  },
  {
    id: 2,
    name: 'CINE & LIVINGROOM',
    hasutag: '#신개념 소셜 상영관',
    src: '../../images/movie01.jpg',
  },
  {
    id: 3,
    name: '4DX',
    hasutag: '#모션시트 #오감체험',
    src: '../../images/theater.jpg',
  },
];
