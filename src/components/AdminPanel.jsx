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

import { useAuth } from '../hooks/AuthContext';
import { API } from '../services/API';
import theme from '../theme';

const AdminPanel = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { user } = useAuth();

  const renewMarket = () => {
    API.patch(`competitions/${user.competition}/market`);
  };

  const playMatches = () => {
    API.put(`users/points/${user.competition}`);
  };

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
            <Button bg={theme.dark.popUpBackground} onClick={() => playMatches()}>
              Update Points
            </Button>
            <Button bg={theme.dark.popUpBackground} onClick={() => renewMarket()}>
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
