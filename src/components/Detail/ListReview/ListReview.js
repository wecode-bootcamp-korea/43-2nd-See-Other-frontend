import React from 'react';
import Review from '../Review/Review';

const ListReview = ({ comments }) => {
  return (
    <ul>
      {/* comments 배열을 map 함수로 순회하며 Comment 컴포넌트를 렌더링 */}
      {comments.map((comment, idx) => (
        <Review key={idx} comment={comment} />
      ))}
    </ul>
  );
};

export default ListReview;
