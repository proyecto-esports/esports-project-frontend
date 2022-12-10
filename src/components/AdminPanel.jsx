import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';

import { API } from '../services/API';
import theme from '../theme';

const local = localStorage.getItem('user');
const User = JSON.parse(local);
const renewMarket = () => {
  API.patch(`competitions/${User.competition}/market`);
};

const playMachs = () => {
  API.put(`players/points`).then(API.put(`users/points/${User.competition}`));
};

const AdminPanel = () => {
  const newMarket = () => {
    renewMarket();
  };
  const newMachs = () => {
    playMachs();
  };
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen} w="max-content">
        Admin Panel
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bg={theme.dark.background} color={theme.dark.primary}>
          <ModalHeader>Admin Panel</ModalHeader>
          <ModalCloseButton />
          <ModalBody flexDirection="column" display="flex" gap="2rem">
            <Button bg={theme.dark.popUpBackground} onClick={newMachs}>
              Play Machs
            </Button>
            <Button bg={theme.dark.popUpBackground} onClick={newMarket}>
              Renew Market
            </Button>
          </ModalBody>

          <ModalFooter>
            <Button bg={theme.dark.stas} mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AdminPanel;
