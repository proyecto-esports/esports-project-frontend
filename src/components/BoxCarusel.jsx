import { Box } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

import theme from '../theme';
import { Carusel0, Carusel1, Carusel2, Carusel3, Carusel4, Carusel5 } from './Carusel';

const BoxCarrusel = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {}, [count]);

  return (
    <Box
      display="flex"
      maxWidth="90%"
      background={theme.dark.popUpBackground}
      overflow="hidden"
      borderRadius="8px"
    >
      <Box
        width="3rem"
        display="flex"
        justify="center"
        alignItems="center"
        zIndex="2"
        onClick={() => setCount(count - 1)}
      >
        <svg
          width="3rem"
          height="48"
          viewBox="12 12 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M21.2 23.4a.998.998 0 0 0 0 1.2l3 4a.999.999 0 1 0 1.6-1.199L23.25 24l2.55-3.402a.997.997 0 0 0-.2-1.399 1 1 0 0 0-1.4.2l-3 4z"></path>
        </svg>
      </Box>
      <Box display="flex" overflowY="hidden" overflowX="auto" width="auto">
        {count <= 0 && <Carusel0 />}
        {count === 1 && <Carusel1 />}
        {count === 2 && <Carusel2 />}
        {count === 3 && <Carusel3 />}
        {count === 4 && <Carusel4 />}
        {count <= 5 && <Carusel5 />}
      </Box>
      <Box
        width="3rem"
        display="flex"
        justify="center"
        alignItems="center"
        zIndex="2"
        onClick={() => setCount(count + 1)}
      >
        <svg
          width="3rem"
          height="48"
          viewBox="12 12 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M26.8 24.6a.998.998 0 0 0 0-1.2l-3-4a.999.999 0 1 0-1.6 1.199l2.55 3.4-2.55 3.402a.997.997 0 0 0 .2 1.399 1 1 0 0 0 1.4-.2l3-4z"></path>
        </svg>
      </Box>
    </Box>
  );
};
export default BoxCarrusel;
