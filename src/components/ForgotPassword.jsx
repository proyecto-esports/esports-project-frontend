import {
  Box,
  Button,
  Input,
  Modal,
  ModalContent,
  ModalOverlay,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { useState } from 'react';

import theme from '../theme';

const ForgotPassword = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [gmail, setGmail] = useState('');

  const handleOnClick = () => {
    console.log(gmail);
  };

  return (
    <>
      <Text style={{ color: theme.dark.accent3 }} onClick={onOpen}>
        Forgot password
      </Text>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay backdropFilter="blur(10px) hue-rotate(10deg)" />
        <ModalContent background={theme.dark.popUpBackground} width="80%" padding="1rem">
          <Box
            height="100%"
            width="100%"
            display="flex"
            flexDirection="column"
            gap="1rem"
            background={theme.dark.popUpBackground}
            color={theme.dark.primary}
            alignContent="center"
            justifyContent="center"
            flexWrap="wrap"
            borderRadius="10px"
          >
            <Text>An email will be sent with a new password.</Text>
            <Text color={theme.dark.accent3}>
              It is recommended to change it at login.
            </Text>

            <Input
              pr="4.5rem"
              type="gmail"
              placeholder="Gmail"
              id="gmail"
              name="gmail"
              color={theme.dark.accent1}
              onChange={(ev) => setGmail(ev.target.value)}
            />
            <Button
              type="button"
              bg={theme.dark.accent3}
              color={theme.dark.primary}
              variant="solid"
              marginTop="1rem"
              width="max-content"
              margin="0 auto"
              onClick={handleOnClick}
            >
              SEND
            </Button>
          </Box>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ForgotPassword;
