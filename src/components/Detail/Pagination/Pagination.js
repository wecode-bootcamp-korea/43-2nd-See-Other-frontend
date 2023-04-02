import React from 'react';
import styled from 'styled-components';
import ReactPaginate from 'react-paginate';

function Pagination({ pageCount, setCurrentPage }) {
  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected + 1);
  };

  return (
    <ReviewPagination>
      <ReactPaginate
        previousLabel="이전"
        nextLabel="다음"
        pageCount={pageCount} // 전체 페이지 수
        marginPagesDisplayed={2} // 좌우로 몇 개의 페이지 버튼을 보여줄 것인지
        pageRangeDisplayed={5} // 현재 페이지를 중심으로 좌우로 몇 개의 페이지 버튼을 보여줄 것인지
        onPageChange={handlePageChange} // 페이지 클릭 시 호출될 콜백 함수
        containerClassName="pagination"
        subContainerClassName="pages pagination"
        activeClassName="active"
      />
    </ReviewPagination>
  );
}

const ReviewPagination = styled.div`
  .pagination {
    display: flex;
    justify-content: center;
  }
  a {
    display: block;
    width: 30px;
    height: 30px;
    margin: 0 3px;
    line-height: 30px;
    font-size: 1px;
    border: 1px solid #dedede;
    text-align: center;
    cursor: pointer;
  }
  li.active a {
    border-color: rgb(251, 67, 87);
    color: rgb(251, 67, 87);
    font-weight: bold;
  }
`;

export default Pagination;
