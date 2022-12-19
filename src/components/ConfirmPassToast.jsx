import { CheckIcon } from '@chakra-ui/icons';
import { Box, Text, useToast } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';

import theme from '../theme';

const ConfirmPassToast = ({ handleClick }) => {
  const toast = useToast({
    position: 'center',
    duration: '2000',
  });
  return (
    <Button
      bg={theme.dark.accent2}
      color={theme.dark.background}
      variant="solid"
      marginTop="1rem"
      width="max-content"
      onClick={() => {
        handleClick;
        toast({
          render: () => (
            <Box
              color="black"
              padding="2rem"
              bg={theme.dark.primary}
              display="flex"
              flexDirection="column"
              alignItems="center"
              boxShadow="outline"
              justifyContent="center"
              gap="1rem"
              width="max-content"
              borderRadius="1rem"
              position="fixed"
              left="50%"
              top="50%"
              transform="translate(-50%, -50%)"
            >
              <CheckIcon height="3rem" width="3rem" />
              <Text>Password change successful</Text>
            </Box>
          ),
        });
      }}
    >
      CHANGE
    </Button>
  );
};

export default ConfirmPassToast;
