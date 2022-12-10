import { ChakraProvider } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';

import { UserContextProvider } from '../context/jwtContext';

const Root = () => {
  return (
    <>
      <UserContextProvider>
        <ChakraProvider>
          <Outlet />
        </ChakraProvider>
      </UserContextProvider>
    </>
  );
};

export default Root;
