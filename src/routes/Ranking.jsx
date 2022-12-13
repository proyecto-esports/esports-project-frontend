import { Box } from '@chakra-ui/react';
import React from 'react';

import NavBar from '../components/NavBar';
import RankingBoard from '../components/RankingBoard';
import TabBar from '../components/TabBar';
import theme from '../theme';
import AdminPanel from './../components/AdminPanel';
import InviteGroupModal from './../components/InviteGroupModal';

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
        <InviteGroupModal />
        <RankingBoard />
      </Box>

      <TabBar />
    </Box>
  );
};

export default Ranking;
