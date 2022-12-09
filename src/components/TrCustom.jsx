import { Td, Th, Tr } from '@chakra-ui/react';
import React from 'react';

const TrCustom = ({ pos, name, points, value, fSize, color, bBottom }) => {
  return (
    <Tr backgroundColor={color} borderBottom={bBottom}>
      <Th fontSize={fSize} padding="0.4rem 0.4rem 0.2rem 1.2rem">
        {pos}
      </Th>
      <Td padding="0.2rem 0.4rem 0.2rem 0rem">{name}</Td>
      <Td
        isNumeric
        padding="0.2rem 0.4rem 0.2rem 1.4rem"
        display="flex"
        justifyContent="center"
      >
        {points}
      </Td>
      <Td isNumeric padding="0.2rem 1rem 0.2rem 0rem">
        {value}
      </Td>
    </Tr>
  );
};

export default TrCustom;
