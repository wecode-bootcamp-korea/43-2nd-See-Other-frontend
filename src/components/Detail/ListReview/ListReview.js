import React, { useState } from 'react';
import styled from 'styled-components';
import Pagination from '../Pagination/Pagination';
import { APIS } from '../../../config';
import Review from '../Review/Review';

const ListReview = ({ comments, setContent, id, setComments }) => {
  const [perPage, setPerPage] = useState(3);
  const [currentPage, setCurrentPage] = useState(1);

  const tokenReviewDelete = localStorage.getItem('token');
  const handleDelete = commentId => {
    fetch(APIS.delete, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        authorization: tokenReviewDelete,
      },
      body: JSON.stringify({
        movieId: id, // 무비아이디
      }),
    }).then(response => {
      // console.log(response);
      if (response.ok) {
        const updatedComments = comments.filter(
          comment => comment.id !== commentId
        );
        setComments(updatedComments);
      }
    });
  };

  const pageCount = Math.ceil(comments.length / perPage);
  const offset = (currentPage - 1) * perPage;
  const currentComments = comments.slice(offset, offset + perPage);

  return (
    <>
      <ListComment>
        {/* comments 배열을 map 함수로 순회하며 Comment 컴포넌트를 렌더링 */}
        {currentComments.map(({ comment, rating, nickname, date, id }) => (
          <Review
            key={id}
            id={id}
            comment={comment}
            onDelete={handleDelete}
            rating={rating}
            nickname={nickname}
            date={date}
            setContent={setContent}
          />
        ))}
      </ListComment>
      <Pagination pageCount={pageCount} setCurrentPage={setCurrentPage} />
    </>
  );
};

const ListComment = styled.ul`
  overflow-y: auto;
  padding: 0 35px;
  height: 272px;
  overscroll-behavior-y: contain;
`;

export default ListReview;
