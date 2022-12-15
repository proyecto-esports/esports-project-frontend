import { Box, Text } from '@chakra-ui/react';

import theme from '../theme';

const NotFound = () => {
  return (
    <Box
      width="100vw"
      height="100vh"
      background={theme.dark.background}
      color={theme.dark.primary}
      padding="3rem"
      backgroundImage="url(https://res.cloudinary.com/dlqo06xcs/image/upload/v1671110199/utils/404map_xqzguk.png)"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        filter="drop-shadow(0 0 8px rgb(255 255 255 / 0.6))"
        display="flex"
        flexDirection="column"
        gap="5rem"
        justifyContent="center"
        alignItems="center"
      >
        <Text
          color={theme.dark.accent2}
          fontSize="4rem"
          text-shadow="0.2em 0.5em 0.1em white"
        >
          Error 404
        </Text>
        <Text color={theme.dark.accent2} fontSize="3rem">
          Not Found
        </Text>
        <Text color={theme.dark.accent2} fontSize="1.5rem" lineHeight="2rem">
          Make sure you typed in the page address correctly or go back to your previous
          page.
        </Text>
      </Box>
    </Box>
  );
};

export default NotFound;
