import { ChakraProvider } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';

import { UserContextProvider } from '../context/jwtContext';
import { AuthProvider } from './../hooks/AuthContext';

const Root = () => {
  return (
    <>
      <AuthProvider>
        <UserContextProvider>
          <ChakraProvider>
            <Outlet />
          </ChakraProvider>
        </UserContextProvider>
      </AuthProvider>
    </>
  );
};

export default Root;
