import { CheckIcon } from '@chakra-ui/icons';
import { Box, Button, Text, useToast } from '@chakra-ui/react';

import theme from './../theme';
import LogoMoney from './LogoMoney';

const BidToast = ({ price, nickname, children }) => {
  const toast = useToast();

  return (
    <Button
      width="max-content"
      onClick={() =>
        toast({
          duration: 2000,
          render: () => (
            <Box
              color="black"
              padding="2rem"
              bg={theme.dark.primary}
              display="flex"
              flexDirection="column"
              alignItems="center"
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
              <Text>
                Yo have bid{' '}
                <Text fontWeight="600" display="inline">
                  {price}
                </Text>{' '}
                <LogoMoney /> for{' '}
                <Text fontWeight="600" display="inline">
                  {nickname}
                </Text>
              </Text>
            </Box>
          ),
        })
      }
    >
      {children}
    </Button>
  );
};

export default BidToast;
