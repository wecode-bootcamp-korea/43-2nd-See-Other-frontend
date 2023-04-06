import React, { useState } from 'react';
import styled from 'styled-components';
import { APIS } from '../../../config';
import Common from '../../Common/Common';

function Review({ rating, nickname, comment, onDelete, id, setContent }) {
  const { ScreenOut, IcoMovie } = Common;
  const [modify, setModify] = useState(false);
  const [editedTitle, setEditedTitle] = useState(''); // 수정된 댓글 내용
  const tokenReviewModify = localStorage.getItem('token');

  const handleModifyClick = () => {
    setModify(!modify);
  };

  const handleDeleteClick = () => {
    onDelete(id);
  };

  const handleEditChange = e => {
    setEditedTitle(e.target.value);
  };

  const handleCancel = () => {
    setModify(false);
    setEditedTitle('');
  };

  const handleSubmit = e => {
    e.preventDefault();

    fetch(APIS.review, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        authorization: tokenReviewModify,
      },
      body: JSON.stringify({
        movieId: id, // 무비아이디
        comment: editedTitle, // 코멘트
      }),
    }).then(response => {
      if (response.ok) {
        fetch(`${APIS.review}/${id}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json;charset=utf-8',
          },
        })
          .then(response => response.json())
          .then(data => {
            alert('수정이 완료되었습니다');
            setModify(false);
            setEditedTitle('');
            setEditedTitle(data.result[0].comment);
          });
      }
    });
  };

  return (
    <ReviewList key={id}>
      <GroupInfo>
        <UserId>{nickname}</UserId>
        <WrapScore>
          {[1, 2, 3, 4, 5].map((value, idx) => (
            <IcoMovie
              key={idx}
              height="18px"
              width="18px"
              backgroundPosition={rating >= value ? '-60px 0' : '-80px 0'}
            />
          ))}
          <ScreenOut>평점: </ScreenOut>
          <TxtRating>{rating} 점</TxtRating>
        </WrapScore>
      </GroupInfo>
      <TxtComment>{comment}</TxtComment>
      <WrapButton>
        <BtnComment type="button" onClick={handleModifyClick}>
          수정
        </BtnComment>
        <BtnComment type="button" onClick={handleDeleteClick}>
          삭제
        </BtnComment>
      </WrapButton>
      {modify && (
        <WrapModify onSubmit={handleSubmit}>
          <InpComment
            type="text"
            placeholder="수정할 내용을 입력해주세요"
            value={editedTitle}
            onChange={handleEditChange}
          />
          <GroupBtn>
            <BtnModify type="submit" onClick={handleSubmit}>
              수정
            </BtnModify>
            <BtnModify onClick={handleCancel}>취소</BtnModify>
          </GroupBtn>
        </WrapModify>
      )}
    </ReviewList>
  );
}

const ReviewList = styled.li`
  position: relative;
  padding: 0 0 30px;
`;

const GroupInfo = styled.div`
  font-size: 0;
  padding-bottom: 15px;
`;

const WrapScore = styled.div`
  display: inline-block;
  padding-bottom: 3px;
  font-size: 0;
  vertical-align: top;
`;

const TxtRating = styled.span`
  position: relative;
  display: inline-block;
  padding-left: 15px;
  font-size: 14px;
  line-height: 21px;
  font-weight: bold;
  vertical-align: top;
  color: #222;

  &::after {
    position: absolute;
    width: 1px;
    background-color: #dedede;
    top: 5px;
    bottom: 5px;
    left: 7px;
    content: '';
  }
`;

const TxtComment = styled.div`
  word-break: break-all;
  font-size: 15px;
  color: #555;
  line-height: 22px;
`;

const UserId = styled.span`
  position: relative;
  display: inline-block;
  font-size: 14px;
  line-height: 21px;
  vertical-align: top;
  color: #888;
  padding-right: 15px;

  &::after {
    position: absolute;
    width: 1px;
    background-color: #dedede;
    top: 5px;
    bottom: 5px;
    right: 7px;
    content: '';
  }
`;

const WrapButton = styled.div`
  position: absolute;
  right: -3px;
  top: 0;
`;

const BtnComment = styled.button`
  padding: 7px 10px;
  margin: 0 3px;
  border: 1px solid #dedede;
  border-radius: 5px;
  font-size: 12px;
  color: #222;
`;

const InpComment = styled.input`
  width: 100%;
  padding: 15px 110px 15px 20px;
  box-sizing: border-box;
  border: 1px solid #dedede;
  border-radius: 5px;
  font-size: 15px;
  color: #555;
`;

const WrapModify = styled.form`
  margin-top: 20px;
  position: relative;
`;

const GroupBtn = styled.div`
  position: absolute;
  top: 6px;
  right: 10px;
`;

const BtnModify = styled.button`
  padding: 10px;
  border-radius: 5px;
  font-size: 13px;
  color: #888;
  box-sizing: border-box;
`;

export default Review;
