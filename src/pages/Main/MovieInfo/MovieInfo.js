import React, { useState } from 'react';
import MainTitle from '../MainTitle/MainTitle';
import MainMore from '../MainMore/MainMore';
import Movie from '../../../components/Movie/Movie';
import styled from 'styled-components';

const MovieInfo = () => {
  const [movieList, setMovieList] = useState([]);

  return (
    <WrapMovieList>
      <InnerMovieList>
        <MainTitle />
        {movieList.map((list, index) => {
          return <Movie {...list} index={index} key={list.id} />;
        })}
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
