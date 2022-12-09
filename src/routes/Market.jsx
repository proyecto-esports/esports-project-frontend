import { Stack } from '@chakra-ui/react';

import DatosCartaMercado from '../components/DatosCartaMercado';
import theme from '../theme';

const Market = () => {
  return (
    <Stack
      w="100vw"
      h="100vh"
      alignItems="center"
      display="flex"
      bg={theme.dark.background}
      gap="1rem"
      padding="1rem 0rem"
      overflow="scroll"
      overflowX="hidden"
    >
      <DatosCartaMercado />
    </Stack>
  );
};

export default Market;
