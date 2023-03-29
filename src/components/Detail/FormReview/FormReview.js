import React, { useState } from 'react';
import styled from 'styled-components';
import Common from '../../Common/Common';

const FormReview = ({ onSubmit }) => {
  const { IcoMovie } = Common;
  const [content, setContent] = useState(''); // 댓글내용
  const [author, setAuthor] = useState(''); // 유저아이디
  const [rating, setRating] = useState(0); // 별점

  // 별점 버튼 클릭 시 rating state를 업데이트한다.
  const handleRatingClick = value => {
    setRating(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ content, author });
    setContent('');
    setRating(0);
  };

  return (
    <ReviewFrom onClick={e => e.stopPropagation()} onSubmit={handleSubmit}>
      <ReviewTitle>
        관람일 포함 7일 이내 관람평을 남기시면 CJ ONE 20P가 적립됩니다.
      </ReviewTitle>
      <Test>
        {[1, 2, 3, 4, 5].map(value => (
          <button
            type="button"
            key={value}
            value={value}
            onClick={() => handleRatingClick(value)}
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
          placeholder="댓글과 평점을 입력해주세요"
          id="content"
          value={content}
          onChange={e => setContent(e.target.value)}
        />
        <ReviewBtn type="submit">등록</ReviewBtn>
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
  padding-top: 40px;
  display: flex;
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
  padding: 5px;
  background: rgba(0, 0, 0, 0);
  border: 0;
  font-size: 110%;
  margin-left: auto;
`;
