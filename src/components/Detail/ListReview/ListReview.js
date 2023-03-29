import React from 'react';
import Review from '../Review/Review';
import styled from 'styled-components';

const ListReview = ({ comments }) => {
  return (
    <ListComment>
      {/* comments 배열을 map 함수로 순회하며 Comment 컴포넌트를 렌더링 */}
      {comments.map((comment, idx) => (
        <Review key={idx} comment={comment} />
      ))}
    </ListComment>
  );
};

const ListComment = styled.ul`
  overflow-y: auto;
  padding: 0 35px;
  height: 304px;
  overscroll-behavior-y: contain;
`;

export default ListReview;
