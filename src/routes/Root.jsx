import { Box, ChakraProvider } from '@chakra-ui/react';
import { Box, ChakraProvider } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';

import { AuthProvider } from './../hooks/AuthContext';
import theme from './../theme';
import theme from './../theme';

const Root = () => {
  return (
    <>
      <AuthProvider>
        <UserContextProvider>
          <ChakraProvider>
            <Box
              backgroundColor={theme.dark.background}
              width="100%"
              minHeight="100vh"
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              paddingTop="4rem"
              paddingBottom="4rem"
            >
              <Outlet />
            </Box>
          </ChakraProvider>
        </UserContextProvider>
      </AuthProvider>
    </>
  );
};

export default Root;
