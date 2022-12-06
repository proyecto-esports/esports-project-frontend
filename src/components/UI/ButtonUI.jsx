import styled, { css } from 'styled-components';

import theme from '../src/theme';

const ButtonVariants = {
  regular: css`
    color: ${theme.highlight};
    background-color: ${theme.background};
    border: 1px solid ${theme.highlight};
  `,
  highlight: css`
    color: ${theme.background};
    background-color: ${theme.highlight};
    border: 1px solid ${theme.highlight};
  `,
};

const ButtonUI = styled.button`
  width: fit-content;
  height: 3rem;
  border-radius: 1.5rem;
  padding: 0 1.5rem;

  ${({ width, height, borderRadius, padding }) => css`
    width: ${width};
    height: ${height};
    borderradius: ${borderRadius};
    padding: ${padding};
  `}

  ${({ variant }) => ButtonVariants[variant]}
`;

export default ButtonUI;
