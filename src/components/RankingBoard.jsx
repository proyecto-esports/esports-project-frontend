import {
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import React from 'react';

import TrCustom from './TrCustom';

const RankingBoard = () => {
  return (
    <TableContainer m="2rem" borderRadius="2rem">
      <Table variant="simple" backgroundColor="#e0e5e4" borderRadius="2rem">
        <TableCaption>
          Here will be a description of how the value is calculated
        </TableCaption>
        <Thead backgroundColor="#D2D2CF">
          <Tr>
            <Th>Nº</Th>
            <Th>RANKING</Th>
            <Th padding="0.6rem 1.1rem" isNumeric>
              POINTS
            </Th>
            <Th padding="0.6rem 1.1rem" isNumeric>
              TEAM VALUE
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          <TrCustom
            fSize="1.9rem"
            pos="1º"
            color="#cefad0"
            name="LosChurrasquis"
            points="4651654"
            value="8126546"
          />
          <TrCustom
            fSize="1.5rem"
            pos="2º"
            name="LosChurrasquis"
            points="4651654"
            value="8126546"
          />
          <TrCustom
            fSize="1.1rem"
            pos="3º"
            name="LosChurrasquis"
            points="4651654"
            value="8126546"
          />
          <TrCustom pos="4º" name="LosChurrasquis" points="4651654" value="8126546" />
          <TrCustom pos="5º" name="LosChurros" points="465164" value="126546" />
          <TrCustom
            bBottom="hidden"
            pos="6º"
            name="LosChurrasquis"
            points="4651654"
            value="8126546"
          />
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default RankingBoard;
