import styled, { css } from 'styled-components';

const StyledInput = styled.input.attrs(({ type }) => `type: ${type}`)`
  width: fit-content;
  flex: 1 1 auto;

  ${({
    width,
    color,
    backgroundColor,
    height,
    border,
    borderRadius,
    padding,
    justifySelf,
  }) => css`
    width: ${width};
    color: ${color};
    background-color: ${backgroundColor};
    height: ${height};
    border: ${border};
    border-radius: ${borderRadius};
    padding: ${padding};
    justify-self: ${justifySelf};
  `}}
`;

export default StyledInput;
