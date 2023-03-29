import React, { useState } from 'react';
import Movie from './Movie/Movie';
import FormReview from './FormReview/FormReview';
import ListReview from './ListReview/ListReview';
import styled from 'styled-components';
import Common from '../Common/Common';

const Detail = ({ setIsOpenModal }) => {
  const { IcoMovie } = Common;
  const [comments, setComments] = useState([]);
  const handleSubmit = newComment => {
    // 새로운 댓글을 추가
    setComments([...comments, newComment]);
  };
  return (
    <DetailBg
      onClick={() => {
        setIsOpenModal(prev => !prev);
      }}
    >
      <MovieDetail onClick={e => e.stopPropagation()}>
        <Movie />
        <FormReview onSubmit={handleSubmit} />
        <ListReview comments={comments} />
        <BtnClose
          type="button"
          onClick={() => {
            setIsOpenModal(prev => !prev);
          }}
        >
          <IcoMovie
            height="16px"
            width="18px"
            backgroundPosition="-209px 0px"
            margin="20px"
          />
        </BtnClose>
      </MovieDetail>
    </DetailBg>
  );
};

export default Detail;

const DetailBg = styled.div`
  z-index: 11000;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: fixed;
  inset: 0px;
  background: rgba(0, 0, 0, 0.4);
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`;

const MovieDetail = styled.aside`
  position: relative;
  overflow-y: auto;
  box-sizing: border-box;
  width: 700px;
  height: 820px;
  border-radius: 25px;
  background: #fff;
  overscroll-behavior-y: contain;
`;

const BtnClose = styled.button`
  position: absolute;
  right: 10px;
  top: 10px;
`;
