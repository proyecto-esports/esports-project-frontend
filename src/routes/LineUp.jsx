import { Box } from '@chakra-ui/react';

import SlideEx from '../components/Fade';
import NavBar from '../components/NavBar';
import TabBar from '../components/TabBar';

const LineUp = () => {
  return (
    <>
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
        <SlideEx />
        <SlideEx />
        <SlideEx />
        <SlideEx />
        <SlideEx />
      </Box>
      <TabBar />
    </>
  );
};

export default LineUp;