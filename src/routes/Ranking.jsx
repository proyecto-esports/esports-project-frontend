import { Box } from '@chakra-ui/react';
import React from 'react';

import RankingBoard from '../components/RankingBoard';
import theme from '../theme';
import AdminPanel from './../components/AdminPanel';

const Ranking = () => {
  return (

    <Box
      w="100vw"
      h="100vh"
      alignItems="center"
      bg={theme.dark.background}
      overflow="scroll"
      overflowX="hidden"
    >
      <NavBar />

      <Box
        display="flex"
        alignItems="center"
        flexDirection="column"
        justifyContent="center"
        bg={theme.dark.background}
        w="100vw"
        h="90vh"
      >
        <AdminPanel />
        <RankingBoard />
      </Box>

      <TabBar />
    </Box>

  );
};

export default Ranking;
