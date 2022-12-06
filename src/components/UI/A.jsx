import styled, { css } from 'styled-components';

import theme from '../src/theme';

const A = styled.a`
  all: unset;

  ${({ color, hoverColor, font, borderBottom, size }) =>
    css`
      color: ${color};
      font-family: ${font};
      border-bottom: ${borderBottom};
      font-size: ${size};

      &:hover {
        cursor: pointer;
        color: ${hoverColor || theme.highlight};
      }
    `}
`;

export default A;
