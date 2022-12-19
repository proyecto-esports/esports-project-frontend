import { useAuth } from '../hooks/AuthContext';
import theme from './../theme';
import { Caption, TableUI, TBody, TD, TH, THead, TR } from './UI/TableUI.jsx';

const Table = ({ headers, rows, caption }) => {
  const { user } = useAuth();

  return (
    <TableUI
      tableLayout="auto"
      borderCollapse="collapse"
      borderRadius="1rem"
      backgroundColor="white"
    >
      <THead>
        <TR>
          {headers.map((header, i) => (
            <TH key={`header${i}`} padding="1rem" fontWeight="600" >
              {header}
            </TH>
          ))}
        </TR>
      </THead>
      <TBody>
        {rows.map((row, i) => (
          <TR
            key={`row${i}`}
            border={row[1] === user.username && `0.3rem solid ${theme.dark.accent1}`}
          >
            {row.map((data, i) => (
              <TD key={`data${i}`} padding="1rem">
                {data}
              </TD>
            ))}
          </TR>
        ))}
      </TBody>
      {caption && (
        <Caption margin="1rem" color={theme.dark.primary}>
          {caption}
        </Caption>
      )}
    </TableUI>
  );
};

export default Table;
