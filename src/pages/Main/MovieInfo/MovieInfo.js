import React from 'react';
import MainTitle from '../MainTitle/MainTitle';
import MainMore from '../MainMore/MainMore';
import Movie from '../../../components/Movie/Movie';
import styled from 'styled-components';

const MovieInfo = () => {
  return (
    <WrapMovieList>
      <InnerMovieList>
        <MainTitle />
        <Movie />
        <MainMore more="/movies" />
      </InnerMovieList>
    </WrapMovieList>
  );
};

const WrapMovieList = styled.div`
  background-color: #fefefe;
  padding: 50px 0;
`;

const InnerMovieList = styled.div`
  width: 980px;
  margin: 0 auto;
  position: relative;
`;

export default MovieInfo;
