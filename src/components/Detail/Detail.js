import React, { useState } from 'react';
import Movie from './Movie/Movie';
import FormReview from './FormReview/FormReview';
import ListReview from './ListReview/ListReview';
import styled from 'styled-components';
import Common from '../Common/Common';

const Detail = ({ setIsOpenModal }) => {
  const { IcoMovie } = Common;

  const rating = 4;

  const ratingStar = new Array(5).fill(1);
  const [score, setScore] = useState(0);

  return (
    <DetailBg
      onClick={() => {
        setIsOpenModal(prev => !prev);
      }}
    >
      <MovieDetail>
        <Movie ratingStar={ratingStar} rating={rating} />
        <FormReview ratingStar={ratingStar} setScore={setScore} score={score} />
        <ListReview />
        <BtnClose type="button">
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
  height: 90vh;
  padding: 35px;
  border-radius: 25px;
  background: #fff;
  overscroll-behavior-y: contain;
`;

const BtnClose = styled.button`
  position: absolute;
  right: 10px;
  top: 10px;
`;
