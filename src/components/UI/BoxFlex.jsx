import { Box } from '@chakra-ui/react';
import React from 'react';

import theme from '../../theme';
const BoxFlex = ({ children }) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      flexDirection="column"
      justifyContent="center"
      bg={theme.dark.background}
      w="100vw"
      h="100vh"
    >
      {children}
    </Box>
  );
};

export default BoxFlex;
