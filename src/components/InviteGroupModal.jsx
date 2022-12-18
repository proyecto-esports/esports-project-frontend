import {
  Button,
  Flex,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';
import { useClipboard } from '@chakra-ui/react';
import { useDisclosure } from '@chakra-ui/react';
import React from 'react';
import { useEffect } from 'react';

import { useAuth } from '../hooks/AuthContext';
import { API } from '../services/Api';
import theme from '../theme';

const InviteGroupModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { onCopy, value, setValue, hasCopied } = useClipboard('');
  const { user } = useAuth();
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  let group = { competition: user.competition._id };

  useEffect(() => {
    API.post(`users/generateinvite/${user._id}`, group).then((res) => {
      const code = res.data.info.data;
      setValue(code);
    });
  }, [isOpen]);

  return (
    <>
      <Button
        onClick={onOpen}
        bg={theme.dark.accent3}
        color="#FFFFFF"
        variant="solid"
        marginTop="1rem"
        width="max-content"
      >
        Invite Friends
      </Button>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Invite Rivals</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Flex mb={2}>
              <Input
                value={value}
                onChange={(e) => {
                  setValue(e.target.value);
                }}
                mr={2}
              />
              <Button onClick={onCopy}>{hasCopied ? 'Copied!' : 'Copy'}</Button>
            </Flex>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default InviteGroupModal;
