import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import { BASE_URL } from '../../../config';
import { newMovie1, newMovie2, newMovie3, newMovie4 } from './NEW_MOVIE';
import MainTitle from '../MainTitle/MainTitle';
import MainMore from '../MainMore/MainMore';
import Movie from '../../../components/Movie/Movie';
import DetailModal from '../../../components/Detail/DetailModal/DetailModal';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const MovieInfo = () => {
  const [movieList, setMovieList] = useState([]);
  const [isOpenModal, setIsOpenModal] = useState(true);
  const [optionValue, setOptionValue] = useState('reservationRate');
  const [saveId, setSaveId] = useState('1');
  const [onScreen, setOnScreen] = useState('2');

  const handleModal = () => {
    setIsOpenModal(prev => !prev);
  };
  const handelOnScreen = e => {
    setOnScreen(e.target.value);
  };
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerPadding: '40px',
  };

  const filterAPI = `${BASE_URL}/movies?movieStatusesId=${onScreen}&filter=${optionValue}`;

  useEffect(() => {
    fetch(filterAPI, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
    })
      .then(res => res.json())
      .then(data => {
        const newMovieList = [
          ...data.movieList,
          newMovie1,
          newMovie2,
          newMovie3,
          newMovie4,
        ];
        setMovieList(newMovieList);
      });
  }, [filterAPI]);

  return (
    <>
      <WrapMovieList>
        <InnerMovieList>
          <MainTitle onScreen={onScreen} handelOnScreen={handelOnScreen} />
          <StyledSlider {...settings}>
            {movieList.map((list, index) => {
              return (
                <SliderMovie key={list.id}>
                  <Movie {...list} index={index} handleModal={handleModal} />
                </SliderMovie>
              );
            })}
          </StyledSlider>
          <MainMore more="/movies" />
        </InnerMovieList>
      </WrapMovieList>
      {movieList.map(modal => {
        return (
          modal.id === saveId && (
            <DetailModal
              setIsOpenModal={setIsOpenModal}
              isOpenModal={isOpenModal}
              id={modal.id}
              key={modal.id}
              {...modal}
            />
          )
        );
      })}
    </>
  );
};

const StyledSlider = styled(Slider)`
  .slick-prev {
    left: -15px !important;
    top: 38%;
    z-index: 1;
  }

  .slick-next {
    right: -5px !important;
    top: 38%;
    z-index: 1;
  }

  .slick-prev::before {
    display: inline-block;
    width: 30px;
    height: 30px;
    background: url(../images/IcoMovie.svg) no-repeat;
    background-position: 0px -23px;
    border-radius: 100%;
    box-shadow: 3px 7px 16px rgba(0, 0, 0, 0.4);
    font-size: 0;
    line-height: 0;
    overflow: hidden;
    text-indent: -9999px;
    vertical-align: top;
  }

  .slick-next::before {
    display: inline-block;
    width: 30px;
    height: 30px;
    background: url(../images/IcoMovie.svg) no-repeat;
    background-position: -30px -23px;
    border-radius: 100%;
    box-shadow: 3px 7px 16px rgba(0, 0, 0, 0.4);
    font-size: 0;
    line-height: 0;
    overflow: hidden;
    text-indent: -9999px;
    vertical-align: top;
  }

  .slick-list {
    margin-right: -20px;
  }
`;

const SliderMovie = styled.div`
  padding-right: 20px;
  box-sizing: border-box;
`;

const WrapMovieList = styled.div`
  padding: 50px 0;
  background-color: #fefefe;
`;

const InnerMovieList = styled.div`
  position: relative;
  width: 980px;
  margin: 0 auto;
`;

export default MovieInfo;
