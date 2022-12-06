import { ChakraProvider } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';

const Root = () => {
  return (
    <>
      <ChakraProvider>
        <Outlet />
      </ChakraProvider>
    </>
  );
};

export default Root;
