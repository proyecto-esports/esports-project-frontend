import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const TableProps = ({
  tableLayout,
  padding,
  margin,
  fontSize,
  fontWeight,
  border,
  borderRadius,
  borderCollapse,
  color,
  backgroundColor,
}) => css`
  table-layout: ${tableLayout};
  padding: ${padding};
  margin: ${margin};
  font-size: ${fontSize};
  font-weight: ${fontWeight};
  border: ${border};
  border-radius: ${borderRadius};
  border-collapse: ${borderCollapse};
  color: ${color};
  background-color: ${backgroundColor};
`;

export const TableUI = styled.table`
  ${(props) => TableProps(props)}
`;

export const THead = styled.thead`
  ${(props) => TableProps(props)}
`;

export const TBody = styled.tbody`
  ${(props) => TableProps(props)}
`;

export const TH = styled.th`
  ${(props) => TableProps(props)}
`;

export const TR = styled.tr`
  ${(props) => TableProps(props)}
`;

export const TD = styled.td`
  ${(props) => TableProps(props)}
`;

export const Caption = styled.caption`
  ${(props) => TableProps(props)}
`;
