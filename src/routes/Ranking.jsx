import {
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import React from 'react';

import BoxFlex from '../components/UI/BoxFlex';

const Ranking = () => {
  return (
    <BoxFlex>
      <TableContainer m="2rem" borderRadius="2rem">
        <Table variant="simple" backgroundColor="#e0e5e4" borderRadius="2rem">
          <TableCaption>Season Current Ranking</TableCaption>
          <Thead backgroundColor="#D2D2CF">
            <Tr>
              <Th>Nº</Th>
              <Th>RANKING</Th>
              <Th isNumeric>TOTAL POINTS</Th>
              <Th isNumeric>TEAM VALUE</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr backgroundColor="#cefad0">
              <Th fontSize="2rem">1º</Th>
              <Td>LosChechos</Td>
              <Td isNumeric>92.834.973.765</Td>
              <Td isNumeric>25m.e</Td>
            </Tr>
            <Tr>
              <Th fontSize="1.5rem">2º</Th>
              <Td>feetTeam</Td>
              <Td isNumeric>923649736</Td>
              <Td isNumeric>500k.e</Td>
            </Tr>
            <Tr>
              <Th fontSize="1.2rem">3º</Th>
              <Td>Churros</Td>
              <Td isNumeric>67,6 million</Td>
              <Td isNumeric>0.91444</Td>
            </Tr>
            <Tr>
              <Th>4º</Th>
              <Td>inches</Td>
              <Td isNumeric>many points</Td>
              <Td isNumeric>25.4 M</Td>
            </Tr>
            <Tr>
              <Th>5º</Th>
              <Td>Tities</Td>
              <Td isNumeric>not enough</Td>
              <Td isNumeric>30.48 m</Td>
            </Tr>
            <Tr borderBottom="hidden">
              <Th>6º</Th>
              <Td>Rubik</Td>
              <Td isNumeric>Clearly loosing</Td>
              <Td isNumeric>0.91444</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </BoxFlex>
  );
};

export default Ranking;
