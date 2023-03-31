import React from 'react';
import styled from 'styled-components';
import Common from '../../Common/Common';

const Movie = ({ koreanName, averageRate, name, summary }) => {
  const { IcoMovie, ScreenOut } = Common;
  return (
    <MovieInfo onClick={e => e.stopPropagation()}>
      <ImgWrap>
        <img src="images/movie01.jpg" alt="포스터" />
      </ImgWrap>
      <DetailWrap>
        <Title>{koreanName}</Title>
        <EngTitle>{name}</EngTitle>
        <RateGroup>
          <p>예매율 : 98%</p>
          <div>
            <IcoMovie
              height="18px"
              width="18px"
              backgroundPosition="-100px -40px"
            />
            <ScreenOut>평점 : </ScreenOut>
            {Number(averageRate)}점
          </div>
        </RateGroup>
        <Summary>
          <dt>
            <ScreenOut>줄거리</ScreenOut>
          </dt>
          <dd>{summary}</dd>
        </Summary>
      </DetailWrap>
    </MovieInfo>
  );
};

const MovieInfo = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 35px 35px 0;
`;

const ImgWrap = styled.div`
  width: 25%;
  img {
    width: 100%;
    border-radius: 5px;
  }
`;

const DetailWrap = styled.div`
  width: 70%;
  padding: 10px 0 0 25px;
`;

const Title = styled.strong`
  font-size: 150%;
  font-weight: 500;
`;

const EngTitle = styled.div`
  margin: 10px 0 20px;
`;

const RateGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
`;

const Summary = styled.dl`
  width: 100%;
  padding-top: 15px;
  margin-top: 20px;
  border-top: 1px solid #eee;
  line-height: 1.5;
  color: #555;
`;

export default Movie;
