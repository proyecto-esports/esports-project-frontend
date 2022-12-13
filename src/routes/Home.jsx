import { Box, Button, Text } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

import CardGroup from '../components/CardGroup';
import JoinModal from '../components/JoinModel';
import theme from '../theme';

const Home = () => {
  return (
    <>
      <Box
        padding="1rem"
        h="93vh"
        w="100%"
        bg={theme.dark.background}
        display="flex"
        flexDirection="column"
        gap="2rem"
        alignItems="center"
      >
        <Text
          fontSize="3xl"
          w="100%"
          color={theme.dark.primary}
          borderBottom="2px"
          paddingBottom="1rem"
        >
          Your Groups
        </Text>
        <CardGroup />
        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          justifyContent="center"
          gap="3rem"
        >
          <JoinModal />
          <NavLink to="/creategroup">
            <Button>Create Group</Button>
          </NavLink>
        </Box>
      </Box>
    </>
  );
};

export default Home;
