import React, { useEffect } from 'react';
import { useState } from 'react';
import { BASE_URL } from '../../config';
import SelectOption from '../../components/SelectOption/SelectOption';
import CardMovie from '../../components/Movie/Movie';
// TODO: feature/Moive branc가 main에 rebase/merge되면 추가될 부분
// import Detail from '../../components/Detail/Detail';
// import DetaiModal from '../Detailmodal/detaiModal';
import styled from 'styled-components';

const Movies = () => {
  const [movieList, setMovieList] = useState([]);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [optionValue, setOptionValue] = useState('reservationRate');
  const [onScreen, setOnScreen] = useState('2');

  const handelOnScreen = e => {
    setOnScreen(e.target.value);
  };

  const handleModal = () => {
    setIsOpenModal(prev => !prev);
  };

  const filterAPI = `${BASE_URL}/movies?movieStatusesId=${onScreen}&filter=${optionValue}`;

  useEffect(() => {
    fetch(filterAPI, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8', //필수로 넣어야함
      },
    })
      .then(res => res.json())
      .then(data => {
        setMovieList(data.movieList);
      });
  }, [filterAPI]);

  return (
    <>
      <SubContents>
        <WrapTitle>
          <TitGlobal>무비차트</TitGlobal>
          <GroupTab role="tablist">
            <BtnMovies
              type="button"
              role="tab"
              aria-selected={onScreen === '2'}
              onClick={handelOnScreen}
              value="2"
            >
              무비차트
            </BtnMovies>
            <BtnMovies
              type="button"
              role="tab"
              aria-selected={onScreen === '3'}
              onClick={handelOnScreen}
              value="3"
            >
              상영예정작
            </BtnMovies>
          </GroupTab>
        </WrapTitle>
        <WrapUtil>
          <GroupSelect>
            <SelectOption
              list={SELECT_LIST}
              movieList={movieList}
              setMovieList={setMovieList}
              setOptionValue={setOptionValue}
            />
          </GroupSelect>
        </WrapUtil>
        <WrapMovie>
          {movieList.map((list, index) => {
            return (
              <Li key={list.id}>
                <CardMovie {...list} index={index} handleModal={handleModal} />
              </Li>
            );
          })}
        </WrapMovie>
      </SubContents>
      {/* TODO: feature/Moive branc가 main에 rebase/merge되면 추가될 부분 */}
      {/* {movieList.map(modal => {
        return (
          modal.id === saveId && (
            <DetaiModal
              setIsOpenModal={setIsOpenModal}
              isOpenModal={isOpenModal}
              id={modal.id}
              key={modal.id}
              {...modal}
            />
          )
        );
      })} */}
    </>
  );
};

const SubContents = styled.div`
  width: 980px;
  margin: 0 auto;
`;

const WrapTitle = styled.div`
  display: flex;
  height: 80px;
  padding-top: 50px;
  align-items: center;
  border-bottom: 3px solid #222;
`;

const TitGlobal = styled.h3`
  font-weight: 500;
  font-size: 36px;
  line-height: 45px;
  color: #222;
`;

const GroupTab = styled.div`
  margin-left: auto;
  margin-right: -18px;
`;

const BtnMovies = styled.button`
  position: relative;
  padding: 6px 18px;
  text-decoration: none;
  font-size: 16px;
  line-height: 20px;
  color: #222;
  &[aria-selected='true'] {
    color: #fb4357;

    &::after {
      position: absolute;
      left: -5px;
      top: 11px;
      width: 0px;
      height: 0px;
      border-bottom: 10px solid #fb4357;
      border-left: 7px solid transparent;
      border-right: 7px solid transparent;
      content: '';
      transform: rotate(90deg);
    }
  }
`;

const WrapUtil = styled.div`
  display: flex;
  padding-top: 30px;
`;
const GroupSelect = styled.div`
  margin-left: auto;
`;

const WrapMovie = styled.ul`
  margin-left: -20px;
  font-size: 0;
`;

const Li = styled.li`
  display: inline-block;
  width: 230px;
  padding: 50px 0 50px 20px;
  vertical-align: top;
`;

const SELECT_LIST = [
  { id: 1, value: '예매율순', filter: 'reservationRate' },
  { id: 2, value: '평점순', filter: 'averageRate' },
];

export default Movies;
