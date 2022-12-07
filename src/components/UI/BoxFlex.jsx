import { Box } from '@chakra-ui/react';
import React from 'react';

const BoxFlex = ({ children }) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      flexDirection="column"
      bg="#272d54"
      w="100vw"
      h="100vh"
    >
      {children}
    </Box>
  );
};

export default BoxFlex;
