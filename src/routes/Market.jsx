import { Box, Stack } from '@chakra-ui/react';

import CardDataMarket from '../components/CardDataMarket';
import theme from '../theme';

const Market = () => {
  return (
    <Box w="100%" h="100%" alignItems="center" bg={theme.dark.background}>
      <Stack
        w="100%"
        h="100%"
        alignItems="center"
        display="flex"
        bg={theme.dark.background}
        gap="1rem"
        padding="1rem 0rem"
      >
        <CardDataMarket />
      </Stack>
    </Box>
  );
};

export default Market;
