import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Common from '../Common/Common';

const Movie = ({
  id,
  koreanName,
  averageRate,
  handleModal,
  setSaveId,
  grade,
  reservationRate,
  hallTypes,
  index,
}) => {
  const { ImgGobal, ScreenOut, IcoMovie } = Common;
  const [bradebackgroundPosition, setBradebackgroundPosition] = useState('');

  useEffect(() => {
    if (grade >= 19) {
      setBradebackgroundPosition('-60px -60px');
    } else if (grade === 15) {
      setBradebackgroundPosition('-30px -60px');
    } else {
      setBradebackgroundPosition('0px -60px');
    }
  }, [grade]);

  return (
    <CardMovie>
      <WrapMovie>
        <BunchThumb>
          <BadgeGrade>
            <IcoMovie
              width="20px"
              height="20px"
              backgroundPosition={bradebackgroundPosition}
            />
          </BadgeGrade>
          <ImgGobal
            src="../../../images/@movie_600x855.jpg"
            alt="영화 포스터 이미지"
          />
        </BunchThumb>
        <EmphMovie>
          {index + 1}
          <ScreenOut>위</ScreenOut>
        </EmphMovie>
        <GroupMovie>
          <BtnMovie
            as="button"
            backgroundcolor="#fff"
            color="#222"
            onClick={() => {
              handleModal();
              setSaveId(id);
            }}
          >
            상세보기
          </BtnMovie>
          <BtnMovie to="/Ticket" backgroundcolor="#FA4357" color="#fff">
            예매하기
          </BtnMovie>
        </GroupMovie>
      </WrapMovie>
      <TitName>
        <ScreenOut as="span">영화 명 : </ScreenOut>
        {koreanName}
      </TitName>
      <WrapInfo>
        <TxtScore>
          <IcoMovie
            width="16px"
            height="16px"
            backgroundPosition="-100px -40px"
            margin="1px 4px 0 0"
          >
            평점 :
          </IcoMovie>
          {averageRate}
        </TxtScore>
        <TxtRating>예매율 {reservationRate}%</TxtRating>
      </WrapInfo>
      <WrapBadge>
        {hallTypes.map((hallTypes, idx) => {
          return <BadgeMovie key={idx}>{hallTypes}</BadgeMovie>;
        })}
      </WrapBadge>
    </CardMovie>
  );
};

const BunchThumb = styled.span`
  display: block;
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  &::after {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.09) 35%,
      rgba(0, 0, 0, 0.85)
    );
    content: '';
  }
`;

const BadgeGrade = styled.span`
  position: absolute;
  top: 10px;
  right: 10px;
`;

const GroupMovie = styled.div`
  display: none;
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);
  flex-direction: column;
  justify-content: center;
  border-radius: 10px;
`;

const EmphMovie = styled.em`
  position: absolute;
  left: 9px;
  bottom: -5px;
  z-index: 10;
  font-weight: 500;
  font-size: 50px;
  line-height: 60px;
  color: #fff;
  font-style: italic;
`;

const CardMovie = styled.div`
  width: 100%;
  &:hover ${BunchThumb} {
    box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.3);
    &::after {
      background-color: rgba(0, 0, 0, 0.5);
    }
  }
  &:hover ${GroupMovie} {
    display: flex;
  }
  &:hover ${EmphMovie} {
    display: none;
  }
`;

const WrapMovie = styled.div`
  position: relative;
`;

const BtnMovie = styled(Link)`
  display: block;
  width: 140px;
  margin: 5px auto;
  font-size: 13px;
  line-height: 35px;
  background-color: ${props => props.backgroundcolor};
  text-align: center;
  text-decoration: none;
  color: ${props => props.color};
  border-radius: 4px;
  &:hover {
    opacity: 0.8;
  }
`;

const TitName = styled.strong`
  overflow: hidden;
  display: block;
  margin-top: 15px;
  font-size: 16px;
  color: #222;
  line-height: 25px;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-break: break-all;
`;

const WrapInfo = styled.div`
  display: flex;
  padding-top: 3px;
`;

const TxtScore = styled.span`
  font-size: 14px;
  line-height: 20px;
  color: #888;
`;

const TxtRating = styled.span`
  position: relative;
  padding-left: 15px;
  font-size: 14px;
  line-height: 20px;
  color: #888;
  &::after {
    position: absolute;
    top: 5px;
    bottom: 5px;
    left: 7px;
    width: 1px;
    background-color: #dedede;
    content: '';
  }
`;

const WrapBadge = styled.span`
  margin: 7px 0 0 -2px;
  display: flex;
`;

const BadgeMovie = styled.span`
  display: block;
  margin: 0 2px;
  padding: 3px 6px;
  font-size: 11px;
  color: #222;
  border: 1px solid #ddd;
  border-radius: 2px;
`;

export default Movie;
