import { Box } from '@chakra-ui/react';
import React from 'react';

import RankingBoard from '../components/RankingBoard';
import theme from '../theme';
import AdminPanel from './../components/AdminPanel';

const Ranking = () => {
  return (
    <Box w="100%" h="100%" alignItems="center" bg={theme.dark.background}>
      <Box
        display="flex"
        alignItems="center"
        flexDirection="column"
        justifyContent="center"
        bg={theme.dark.background}
        w="100%"
        h="100%"
      >
        <AdminPanel />
        <RankingBoard />
      </Box>
    </Box>
  );
};

export default Ranking;
