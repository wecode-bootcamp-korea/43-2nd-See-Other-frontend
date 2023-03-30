import React, { useState } from 'react';
import styled from 'styled-components';
import Common from '../Common/Common';

const Detail = () => {
  const { IcoMovie, ScreenOut } = Common;

  const rating = 4;

  const ratingStar = new Array(5).fill(1);
  const [score, setScore] = useState(0);

  return (
    <DetailBg>
      <MovieDetail>
        <MovieInfo>
          <ImgWrap>
            <img src="images/movie01.jpg" alt="포스터" />
          </ImgWrap>
          <DetailWrap>
            <Title>더 퍼스트 슬램덩크</Title>
            <EngTitle>The First Slam Dunk</EngTitle>
            <RateGroup>
              <p>예매율 : 98%</p>
              <div>
                {ratingStar.map((el, idx) => {
                  return (
                    <IcoMovie
                      key={idx}
                      height="18px"
                      width="18px"
                      backgroundPosition={
                        el + idx <= rating ? '-60px 0px' : '-80px 0px'
                      }
                    />
                  );
                })}
              </div>
            </RateGroup>
            <Summary>
              <dt>
                <ScreenOut>줄거리</ScreenOut>
              </dt>
              <dd>
                전국 제패를 꿈꾸는 북산고 농구부 5인방의 꿈과 열정, 멈추지 않는
                도전을 그린 영화
              </dd>
            </Summary>
          </DetailWrap>
          <IcoMovie
            height="16px"
            width="18px"
            backgroundPosition="-209px 0px"
          />
        </MovieInfo>
        <section>
          <ReviewFrom>
            <ReviewTitle>
              관람일 포함 7일 이내 관람평을 남기시면 CJ ONE 20P가 적립됩니다.
            </ReviewTitle>
            <Test>
              {ratingStar.map((el, idx) => {
                return (
                  <IcoMovie
                    key={idx}
                    height="18px"
                    width="18px"
                    backgroundPosition={
                      el + idx <= score ? '-60px 0px' : '-80px 0px'
                    }
                    onClick={() => {
                      setScore(el + idx);
                    }}
                  />
                );
              })}
              <ReviewInput
                type="text"
                placeholder="댓글과 평점을 입력해주세요"
              />
              <ReviewBtn type="button">등록</ReviewBtn>
            </Test>
          </ReviewFrom>
        </section>
        <section>
          <ul>
            <ReviewList>
              <UserId>some100696</UserId>
              <ViewiDay>관람일: 2023.03.27(월)</ViewiDay>
              <Review>
                농구에는 전혀 전혀 전혀 관심 없었는데.. 이거 보고 관심이
                생겼어요! 강백호 최고!ㅎㅎ 근데 애니메이션 말고 실사 버전도
                궁금하긴 하네요! 인기몰이 중인데 만들어줄 생각 없나 hoxy..?
              </Review>
            </ReviewList>
          </ul>
        </section>
      </MovieDetail>
    </DetailBg>
  );
};

export default Detail;

const DetailBg = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 1000vh;
  background-color: rgba(0, 0, 0, 0.5);
  font-size: 85%;
`;

const MovieDetail = styled.aside`
  box-sizing: border-box;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 30%;
  min-width: 500px;
  height: 90vh;
  padding: 3% 2%;
  border-radius: 25px;
  background: #fff;
`;

const MovieInfo = styled.section`
  display: flex;
  justify-content: space-between;
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

const Title = styled.h3`
  font-size: 150%;
  font-weight: 500;
`;

const EngTitle = styled.h4`
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
  margin-top: 10px;
  border-top: 1px solid #eee;
  line-height: 1.5;
  color: #555;
`;

const ReviewFrom = styled.form`
  margin-bottom: 30px;
  padding-bottom: 17px;
  border-bottom: 1px solid #eee;
`;

const ReviewTitle = styled.legend`
  margin: 20px 0;
  padding: 17px 0 15px;
  background-color: #f6f6f6;
  text-align: center;
`;

const ReviewInput = styled.input`
  box-sizing: border-box;
  width: 70%;
  margin-left: 27px;
  padding-right: 20px;
  border: none;
  font-size: 110%;

  &:focus {
    outline: none;
  }
`;

const ReviewBtn = styled.button`
  padding: 0;
  background: rgba(0, 0, 0, 0);
  border: 0;
  font-size: 110%;
`;

const ReviewList = styled.li`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto;
  grid-template-areas:
    'id date'
    'review review';
  padding: 0 5px 30px 5px;
`;

const UserId = styled.span`
  grid-area: id;
  margin-bottom: 10px;
  font-size: 110%;
  font-weight: bold;
`;

const ViewiDay = styled.span`
  grid-area: date;
  justify-self: end;
  color: #888;
`;

const Review = styled.span`
  grid-area: review;
  line-height: 1.5;
`;

const Test = styled.div`
  display: flex;
`;
