import React, { useEffect } from 'react';
import { useState } from 'react';
import SelectOption from '../../components/SelectOption/SelectOption';
import CardMovie from '../../components/Movie/Movie';
import Detail from '../../components/Detail/Detail';
import styled from 'styled-components';
import Common from '../../components/Common/Common';

const Movies = () => {
  const { IcoMovie } = Common;
  const [movieList, setMovieList] = useState([]);
  const [isChecked, setIsChecked] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handelCheck = e => {
    setIsChecked(e.target.checked);
  };

  const handleModal = () => {
    setIsOpenModal(prev => !prev);
  };

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/albums', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setMovieList(data);
      });
  }, []);

  return (
    <>
      <SubContents>
        <WrapTitle>
          <TitGlobal>무비차트</TitGlobal>
          <GroupTab role="tablist">
            <BtnMovies type="button" role="tab" aria-selected="true">
              무비차트
            </BtnMovies>
            <BtnMovies type="button" role="tab" aria-selected="false">
              상영예정작
            </BtnMovies>
          </GroupTab>
        </WrapTitle>
        <WrapUtil>
          <CheckBox>
            <InpCheck type="checkbox" id="check" onChange={handelCheck} />
            <label htmlFor="check">
              <IcoMovie
                width="22px"
                height="22px"
                backgroundPosition={
                  isChecked ? '-170px -70px;' : '-140px -70px;'
                }
              />
            </label>
            <TxtMovie>현재 상영작만 보기</TxtMovie>
          </CheckBox>
          <GroupSelect>
            <SelectOption list={SELECT_LIST} />
          </GroupSelect>
        </WrapUtil>
        <WrapMovie>
          {movieList.map(({ id, title }) => {
            return (
              <Li key={id}>
                <CardMovie title={title} handleModal={handleModal} />
              </Li>
            );
          })}
        </WrapMovie>
      </SubContents>
      {isOpenModal && <Detail setIsOpenModal={setIsOpenModal} />}
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

const CheckBox = styled.div``;

const InpCheck = styled.input`
  position: absolute;
  left: 0;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  border: 0 none;
  background: none;
  -webkit-appearance: none;
  opacity: 0.01;
`;

const TxtMovie = styled.span`
  display: inline-block;
  vertical-align: top;
  font-size: 15px;
  color: #222;
  line-height: 25px;
  padding-left: 10px;
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
  { id: 1, value: '예매율순' },
  { id: 2, value: '평점순' },
  { id: 3, value: '관람객순' },
];

export default Movies;
