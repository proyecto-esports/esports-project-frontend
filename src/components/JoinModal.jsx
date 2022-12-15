import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import { useState } from 'react';

import { useAuth } from '../hooks/AuthContext';
import { API } from '../services/API';
import theme from '../theme';

const JoinModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [code, setCode] = useState();

  const handleCode = (e) => {
    setCode(e.target.value);
  };

  const { user, login } = useAuth();
  const joinGroup = () => {
    const bodyJoin = {
      competition: code,
    };

    API.patch(`users/${user._id}/invited`, bodyJoin).then(() => {
      API.put(`users/inicialplayers/${user._id.toString()}`).then((res) => {
        const user = res.data.info.data;
        onClose();
        login({ user: user });
      });
    });
  };

  return (
    <>
      <Button onClick={onOpen} w="max-content">
        Join Group
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bg={theme.dark.background} color={theme.dark.primary}>
          <form
            onSubmit={(ev) => {
              ev.preventDefault();
              joinGroup();
            }}
          >
            <ModalHeader>Join Group</ModalHeader>
            <ModalCloseButton />
            <ModalBody flexDirection="column" display="flex" gap="2rem">
              <Input placeholder="Invitation Code" onChange={handleCode} />
              <Button bg={theme.dark.popUpBackground} type="submit">
                Joing
              </Button>
            </ModalBody>
          </form>
          <ModalFooter>
            <Button bg={theme.dark.stas} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default JoinModal;
