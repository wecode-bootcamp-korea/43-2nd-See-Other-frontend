import React from 'react';
import styled from 'styled-components';

const ListReview = () => {
  return (
    <section>
      <ul>
        <ReviewList>
          <UserId>some100696</UserId>
          <ViewiDay>관람일: 2023.03.27(월)</ViewiDay>
          <Review>
            농구에는 전혀 전혀 전혀 관심 없었는데.. 이거 보고 관심이 생겼어요!
            강백호 최고!ㅎㅎ 근데 애니메이션 말고 실사 버전도 궁금하긴 하네요!
            인기몰이 중인데 만들어줄 생각 없나 hoxy..?
          </Review>
        </ReviewList>
      </ul>
    </section>
  );
};

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

export default ListReview;
