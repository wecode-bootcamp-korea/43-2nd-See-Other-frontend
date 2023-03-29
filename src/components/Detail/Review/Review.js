import React from 'react';
import styled from 'styled-components';
import Common from '../../Common/Common';

function Review({ comment }) {
  const { ScreenOut } = Common;
  return (
    <ReviewList>
      <WrapComment>
        <UserId>some100696 </UserId>
        <ViewiDay>
          <ScreenOut>관람일: </ScreenOut>2023.03.27(월)
        </ViewiDay>
        {/* comment 객체의 내용을 출력 */}
        <TxtComment>{comment.content}</TxtComment>
      </WrapComment>
      <WrapButton>
        <BtnComment type="button">수정</BtnComment>
        <BtnComment type="button">삭제</BtnComment>
      </WrapButton>
    </ReviewList>
  );
}

const ReviewList = styled.li`
  position: relative;
  padding: 0 5px 30px 5px;
`;

const WrapComment = styled.div``;

const TxtComment = styled.div`
  word-break: break-all;
`;

const UserId = styled.span`
  display: inline-block;
  margin-bottom: 10px;
  font-weight: bold;
  font-size: 15px;
  line-height: 20px;
  font-weight: bold;
  vertical-align: top;
`;

const ViewiDay = styled.span`
  display: inline-block;
  padding-left: 10px;
  color: #888;
  font-size: 12px;
  line-height: 20px;
  color: #888;
  vertical-align: top;
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

export default Review;
