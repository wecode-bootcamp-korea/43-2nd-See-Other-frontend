import styled from 'styled-components';

const IcoMovie = styled.span`
  display: inline-block;
  overflow: hidden;
  font-size: 0;
  line-height: 0;
  background: url(../../public/images/IcoMovie.svg) no-repeat;
  text-indent: -9999px;
  vertical-align: top;
`;
const ScreenOut = styled.strong`
  overflow: hidden;
  position: absolute;
  width: 0;
  height: 0;
  line-height: 0;
  text-indent: -9999px;
`;

const Common = {
  IcoMovie,
  ScreenOut,
};

export default Common;
