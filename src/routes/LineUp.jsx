import { Box } from '@chakra-ui/react';

import SlideEx from '../components/SlideEx';
import TabBar from '../components/TabBar';

import { API } from '../services/Api';
import theme from '../theme';


const LineUp = () => {
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
        flexWrap="wrap"
        alignItems="center"
        justifyContent="space-around"
        h="100vh"
        w="100vw"
        bg="#272d54"
      >
        {lineUp ? (
          lineUp.map((player) => <SlideEx key={player._id} player={player} />)
        ) : (
          <Text>...Loading</Text>
        )}
      </Box>
      <TabBar />
    </Box>

  );
};

export default LineUp;
