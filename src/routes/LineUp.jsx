import { Box } from '@chakra-ui/react';

import SlideEx from '../components/Fade';

const LineUp = () => {
  return (
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
  );
};

export default LineUp;
