import { Caption, TableUI, TBody, TD, TH, THead, TR } from './UI/TableUI.jsx';

const Table = ({ headers, rows, caption }) => {
  console.log('headers', headers);
  console.log('rows', rows);
  return (
    <TableUI tableLayout="auto" border="2px solid black" borderCollapse="collapse">
      <THead>
        <TR>
          {headers.map((header, i) => (
            <TH key={`header${i}`}>{header}</TH>
          ))}
        </TR>
      </THead>
      <TBody>
        {rows.map((row, i) => (
          <TR key={`row${i}`}>
            {row.map((data, i) => (
              <TD key={`data${i}`}>{data}</TD>
            ))}
          </TR>
        ))}
      </TBody>
      {caption && <Caption>{caption}</Caption>}
    </TableUI>
  );
};

export default Table;
