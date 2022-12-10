import { Stack } from '@chakra-ui/react';

import CardDataMarket from '../components/CardDataMarket';
import NavBar from '../components/NavBar';
import TabBar from '../components/TabBar';
import theme from '../theme';

const Market = () => {
  return (
    <>
      <NavBar />
      <Stack
        w="100vw"
        h="100vh"
        alignItems="center"
        display="flex"
        bg={theme.dark.background}
        gap="1rem"
        padding="1rem 0rem"
        overflow="scroll"
        overflowX="hidden"
      >
        <CardDataMarket />
      </Stack>
      <TabBar />
    </>
  );
};

export default Market;
