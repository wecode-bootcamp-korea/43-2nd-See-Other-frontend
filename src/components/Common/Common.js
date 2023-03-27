import styled, { css } from 'styled-components';

const ImgGobal = styled.img`
  display: block;
  width: 100%;
`;

const IcoMovie = styled.span`
  display: inline-block;
  overflow: hidden;
  font-size: 0;
  line-height: 0;
  background: url(../../images/IcoMovie.svg) no-repeat;
  text-indent: -9999px;
  vertical-align: top;
  width: ${props => props.width};
  height: ${props => props.height};
  margin: ${props => props.margin};
  background-position: ${props => props.backgroundPosition};
`;

const ScreenOutBase = css`
  overflow: hidden;
  position: absolute;
  width: 0;
  height: 0;
  line-height: 0;
  text-indent: -9999px;
`;

const ScreenOut = styled.strong`
  ${({ as }) => {
    switch (as) {
      case 'h2':
        return css`
          ${ScreenOutBase}
        `;
      default:
        return ScreenOutBase;
    }
  }}
`;

const IrPmBase = css`
  display: block;
  overflow: hidden;
  font-size: 0;
  line-height: 0;
  text-indent: -9999px;
`;

const IrPm = styled.strong`
  ${({ as }) => {
    switch (as) {
      case 'p':
        return css`
          ${IrPmBase}
        `;
      case 'span':
        return css`
          ${IrPmBase}
        `;
      default:
        return IrPmBase;
    }
  }}
`;

const Common = {
  ImgGobal,
  IcoMovie,
  ScreenOut,
  IrPm,
};

export default Common;
