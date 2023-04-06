import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { APIS } from '../../../config';
import Common from '../../Common/Common';

const FormReview = ({ onSubmit, setContent, comment, id }) => {
  const { IcoMovie } = Common;
  const [rating, setRating] = useState(0); // 별점
  const [disabled, setDisabled] = useState(false);
  const tokenReview = localStorage.getItem('token');
  // 별점 버튼 클릭 시 rating state를 업데이트한다.
  const handleRatingClick = value => {
    setRating(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ comment, rating });

    fetch(APIS.review, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        authorization: tokenReview,
      },
      body: JSON.stringify({
        comment: comment, // 코멘트
        rating: rating, //평점
        movieId: id, // 무비아이디
      }),
    }).then(response => response.json());
    setContent('');
    setRating(0);
  };

  useEffect(() => {
    if (tokenReview === null) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [tokenReview]);

  return (
    <ReviewFrom onClick={e => e.stopPropagation()} onSubmit={handleSubmit}>
      <ReviewTitle>
        관람일 포함 7일 이내 관람평을 남기시면 CJ ONE 20P가 적립됩니다.
      </ReviewTitle>
      <Test className={`${disabled && 'disabled'} `}>
        {[1, 2, 3, 4, 5].map(value => (
          <button
            type="button"
            key={value}
            value={value}
            onClick={() => handleRatingClick(value)}
            disabled={disabled}
          >
            <IcoMovie
              height="18px"
              width="18px"
              backgroundPosition={rating >= value ? '-60px 0' : '-80px 0'}
            />
          </button>
        ))}

        <ReviewInput
          type="text"
          placeholder={
            disabled
              ? '예매한 회원만 이용이 가능합니다.'
              : '댓글과 평점을 입력해주세요'
          }
          id="content"
          value={comment}
          onChange={e => setContent(e.target.value)}
          disabled={disabled}
        />

        <ReviewBtn type="submit" disabled={disabled}>
          등록
        </ReviewBtn>
      </Test>
    </ReviewFrom>
  );
};

export default FormReview;

const ReviewFrom = styled.form`
  margin: 0 35px 30px;
  padding-bottom: 20px;
  border-bottom: 1px solid #eee;
`;

const ReviewTitle = styled.legend`
  margin-top: 20px;
  padding: 17px 0 15px;
  background-color: #f6f6f6;
  text-align: center;
`;

const Test = styled.div`
  position: relative;
  margin-top: 40px;
  display: flex;
  &.disabled {
    opacity: 0.3;
    content: '';
  }
`;

const ReviewInput = styled.input`
  box-sizing: border-box;
  width: 70%;
  margin-left: 27px;
  padding-right: 20px;
  border: none;
  font-size: 110%;
`;

const ReviewBtn = styled.button`
  padding: 5px;
  background: rgba(0, 0, 0, 0);
  border: 0;
  font-size: 110%;
  margin-left: auto;
`;
