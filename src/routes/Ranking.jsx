import { Box } from '@chakra-ui/react';
import React from 'react';

import NavBar from '../components/NavBar';
import RankingBoard from '../components/RankingBoard';
import TabBar from '../components/TabBar';
import theme from '../theme';

const Ranking = () => {
  return (
    <>
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
        <RankingBoard />
      </Box>

      <TabBar />
    </>
  );
};

export default Ranking;
