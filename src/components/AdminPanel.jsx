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

import theme from '../theme';
import SpinnerModal from './SpinnerMarket';
import SpinnerModalPoints from './SpinnerPoints';

const AdminPanel = () => {
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
            <SpinnerModalPoints />
            <SpinnerModal size="110px" text="" />
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
