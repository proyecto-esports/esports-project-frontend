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

import { API } from '../services/API';
import theme from '../theme';

const JoinModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [code, setCode] = useState();

  const handleCode = (e) => {
    setCode(e.target.value);
  };

  const user = localStorage.getItem('user');
  const userId = JSON.parse(user)._id;

  const joinGroup = () => {
    const bodyJoin = {
      competition: code,
    };

    API.patch(`users/${userId}/invited`, bodyJoin).then(() => {
      API.put(`users/inicialplayers/${userId}`).then((res) => {
        return res;
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
          <form onSubmit={(ev) => joinGroup(ev)}>
            <ModalHeader>Join Group</ModalHeader>
            <ModalCloseButton />
            <ModalBody flexDirection="column" display="flex" gap="2rem">
              <Input placeholder="Invitation Code" onChange={handleCode} />
              <Button
                onClick={() => joinGroup}
                bg={theme.dark.popUpBackground}
                type="submit"
              >
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
