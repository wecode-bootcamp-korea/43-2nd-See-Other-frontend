import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
const GlobalStyle = createGlobalStyle`
  ${reset}
  html,
  body {
    min-width: 1040px;
    min-height: 100%;
    font-family: 'Roboto', 'Noto Sans KR', sans-serif;
  }
  button {
    margin: 0;
    padding: 0;
    vertical-align: middle;
    border: 0 none;
    background-color: transparent;
    cursor: pointer;
  }
`;
export default GlobalStyle;
