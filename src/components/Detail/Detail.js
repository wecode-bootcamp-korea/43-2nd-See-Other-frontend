import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Movie from './Movie/Movie';
import FormReview from './FormReview/FormReview';
import ListReview from './ListReview/ListReview';
import Common from '../Common/Common';
import { APIS } from '../../config';

const Detail = ({ setIsOpenModal, id }) => {
  const { IcoMovie } = Common;
  const [content, setContent] = useState(''); // 댓글내용
  const [comments, setComments] = useState([]); // 댓글내용
  const [detail, setDetail] = useState([]);
  const tokenNickName = localStorage.getItem('nickname');
  const handleSubmit = newComment => {
    // 새로운 댓글을 추가
    setComments([...comments, { ...newComment, nickname: tokenNickName }]);
  };

  useEffect(() => {
    fetch(`${APIS.movies}/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8', //필수로 넣어야함
      },
    })
      .then(res => res.json())
      .then(data => {
        setDetail(data.movieList[0]);
      });
  }, [id]);

  useEffect(() => {
    fetch(`${APIS.review}/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
    })
      .then(response => response.json())
      .then(data => {
        setComments(data.result);
      });
  }, [id]);

  return (
    <DetailBg
      onClick={() => {
        setIsOpenModal(prev => !prev);
      }}
    >
      <MovieDetail onClick={e => e.stopPropagation()} key={id}>
        <Movie {...detail} />
        <FormReview
          onSubmit={handleSubmit}
          setContent={setContent}
          comment={content}
          comments={comments}
          id={id}
        />
        <ListReview
          comments={comments}
          setComments={setComments}
          setContent={setContent}
          id={id}
        />
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
