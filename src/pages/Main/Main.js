import React from 'react';
import MainSlide from './MainSlide/MainSlide';
import SpecialTheater from './SpecialTheater/SpecialTheater';
import CsCenter from './CsCenter/CsCenter';
import MovieInfo from './MovieInfo/MovieInfo';

const Main = () => {
  return (
    <>
      <MainSlide />
      <MovieInfo />
      <SpecialTheater />
      <CsCenter />
    </>
  );
};
export default Main;
