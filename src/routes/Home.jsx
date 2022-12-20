import { Box, Button, Card, Text } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

import CardGroup from '../components/CardGroup';
import JoinModal from '../components/JoinModal';
import { useAuth } from '../hooks/AuthContext';
import theme from '../theme';
const Home = () => {
  const { user } = useAuth();

  return (
    <>
      <Box
        padding="1rem"
        h="calc(100vh - 4rem)"
        paddingTop="2rem"
        marginBottom="-4rem"
        w="100%"
        bg={theme.dark.background}
        display="flex"
        flexDirection="column"
        gap="2rem"
        alignItems="center"
        maxWidth="50rem"
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
        <CardGroup user={user} />
        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          justifyContent="center"
          gap="3rem"
        >
          <JoinModal />
          <NavLink to="/dashboard/create-group">
            <Button>
              <Text>Create Group</Text>
            </Button>
          </NavLink>
        </Box>
        <Card
          bg={theme.dark.popUpBackground}
          w="90%"
          color={theme.dark.primary}
          padding="1rem"
        >
          <Text>
            Welcome to E-Tactic v1.0! 🌈
            <br />
            Select either Create Group to generate and host your own League as the
            Administrator or Join Group already created by a friend; just ask him for the
            code & copy-paste!
          </Text>
        </Card>
      </Box>
    </>
  );
};

export default Home;
