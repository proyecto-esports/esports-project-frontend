import {
  Box,
  Button,
  Flex,
  Img,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
} from '@chakra-ui/react';
import { useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';

import { useAuth } from '../hooks/AuthContext';
import { API } from '../services/API';
import theme from '../theme';

const ChangePasswordModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [newPassword, setNewPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const { user } = useAuth();

  const handleOnClick = () => {
    if (newPassword === repeatPassword) {
      const data = {
        password: newPassword,
      };
      console.log(user._id);
      API.patch(`/users/${user._id}`, data).then((res) => {
        console.log(res);
        onClose();
      });
    } else {
      console.log('iNCORRECT PASSWORD');
    }
  };

  return (
    <>
      <Flex gap="5rem" w="100%" onClick={onOpen}>
        <Box display="flex" justifyContent="space-between" w="100%">
          <Text>Change Password</Text>
          <Img
            src="https://res.cloudinary.com/dlqo06xcs/image/upload/v1671203775/utils/padlock-svgrepo-com_bo5yzu.svg"
            alt="padlock icon"
            width="1.5rem"
          />
        </Box>
      </Flex>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent background={theme.dark.background} color={theme.dark.primary}>
          <ModalHeader />
          <ModalCloseButton />
          <ModalBody display="flex" flexDirection="column" gap="1.5rem" padding="1.5rem">
            <Text>Enter a new password</Text>
            <Input type="password" onChange={(e) => setNewPassword(e.target.value)} />
            <Text>Repeat new password</Text>
            <Input type="password" onChange={(e) => setRepeatPassword(e.target.value)} />
            <Button
              type="button"
              bg={theme.dark.accent2}
              color={theme.dark.background}
              variant="solid"
              marginTop="1rem"
              width="max-content"
              onClick={handleOnClick}
            >
              CHANGE
            </Button>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ChangePasswordModal;
