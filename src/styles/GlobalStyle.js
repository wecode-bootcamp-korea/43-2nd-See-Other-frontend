import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;700&family=Roboto:wght@400;500;700&display=swap');
	html,
  body {
  min-width: 1040px;
  min-height: 100%;
  font-family: 'Roboto', 'Noto Sans KR', sans-serif;
}
.screenOut {
  overflow: hidden;
  position: absolute;
  width: 0;
  height: 0;
  line-height: 0;
  text-indent: -9999px;
}
.icoMovie {
  display: inline-block;
  overflow: hidden;
  font-size: 0;
  line-height: 0;
  background: url(../../images/icoMovie.svg) no-repeat;
  text-indent: -9999px;
  vertical-align: top;
}
`;

export default GlobalStyle;
