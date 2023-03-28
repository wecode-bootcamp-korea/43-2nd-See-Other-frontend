import React from 'react';
import styled from 'styled-components';
import Common from '../../Common/Common';

const FormReview = ({ ratingStar, setScore, score }) => {
  const { IcoMovie } = Common;
  return (
    <section>
      <ReviewFrom onClick={e => e.stopPropagation()}>
        <ReviewTitle>
          관람일 포함 7일 이내 관람평을 남기시면 CJ ONE 20P가 적립됩니다.
        </ReviewTitle>
        <Test>
          {ratingStar.map((el, idx) => {
            return (
              <button type="button">
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
              </button>
            );
          })}
          <ReviewInput type="text" placeholder="댓글과 평점을 입력해주세요" />
          <ReviewBtn type="button">등록</ReviewBtn>
        </Test>
      </ReviewFrom>
    </section>
  );
};

export default FormReview;

const ReviewFrom = styled.form`
  margin-bottom: 30px;
  padding-bottom: 17px;
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
