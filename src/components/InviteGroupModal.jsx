import {
  Button,
  /* Editable,
  EditableInput,
  EditablePreview, */
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

import theme from '../theme';

const InviteGroupModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { onCopy, value, setValue, hasCopied } = useClipboard('');

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  return (
    <>
      <Button
        onClick={onOpen}
        bg={theme.dark.accent3}
        color="#FFFFFF"
        variant="solid"
        marginTop="1rem"
        width="max-content"
        alignSelf="flex-end"
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
            {/* <Editable placeholder="Paste here">
              <EditablePreview width="100%" />
              <EditableInput />
            </Editable> */}
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
