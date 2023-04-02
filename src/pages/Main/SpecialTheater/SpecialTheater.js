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
  justify-content: space-between;
  margin-top: 19px;
`;

const TheaterLink = styled(Link)`
  position: relative;
  width: 500px;
  border-radius: 10px;
  overflow: hidden;
  &:before {
    position: absolute;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.4);
    content: '';
  }
`;

const ImgWidth = styled.div`
  width: 500px;
  height: 310px;
  overflow: hidden;
`;

const WrapText = styled.div`
  position: absolute;
  bottom: 30px;
  left: 30px;
`;

const TitleExplan = styled.strong`
  display: block;
  padding-bottom: 10px;
  color: #fff;
  font-size: 40px;
  line-height: 45px;
  font-weight: bold;
  letter-spacing: 0.035em;
`;

const SubExplan = styled.div`
  color: #fff;
  font-size: 17px;
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
  justify-content: space-between;
  align-items: center;
  height: 100%;
  padding: 0 25px;
  color: #222;
  border: 1px solid transparent;
  text-decoration: none;
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
  padding: 2px 7px;
  color: #666;
  background-color: #f6f6f6;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.429em;
  word-break: break-all;
`;

export default SpecialTheater;

const THEATER = [
  {
    id: 1,
    name: 'SUITE CINEMA',
    hasutag: '#호텔 컨셉의 프리미엄관',
    src: '../../images/movieseat3.jpg',
  },
  {
    id: 2,
    name: 'CINE & LIVINGROOM',
    hasutag: '#신개념 소셜 상영관',
    src: '../../images/movieseat2.jpg',
  },
  {
    id: 3,
    name: '4DX',
    hasutag: '#모션시트 #오감체험',
    src: '../../images/movieseat1.jpg',
  },
];
