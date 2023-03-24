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
`;

export default GlobalStyle;
