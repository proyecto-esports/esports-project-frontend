import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const TableProps = ({
  tableLayout,
  padding,
  fontSize,
  fontWeight,
  border,
  borderCollapse,
}) => css`
  table-layout: ${tableLayout}
  padding: ${padding};
  font-size: ${fontSize};
  font-weight: ${fontWeight};
  border: ${border};
  border-collapse: ${borderCollapse};
`;

export const TableUI = styled.table`
  ${() => TableProps}
`;

export const THead = styled.thead`
  ${() => TableProps}
`;

export const TBody = styled.tbody`
  ${() => TableProps}
`;

export const TH = styled.th`
  ${() => TableProps}
`;

export const TR = styled.tr`
  ${() => TableProps}
`;

export const TD = styled.td`
  ${() => TableProps}
`;

export const Caption = styled.caption`
  ${() => TableProps}
`;
