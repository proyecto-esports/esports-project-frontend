import {
  Box,
  Button,
  Modal,
  ModalContent,
  ModalOverlay,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import SkewLoader from 'react-spinners/SkewLoader';

import { useAuth } from '../hooks/AuthContext';
import { API } from '../services/API';
import theme from '../theme';

const SpinnerModalPoints = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { user } = useAuth();

  const updatePoints = () => {
    API.put(`users/points/${user.competition._id}`);
    setTimeout(() => {
      onClose();
    }, 3500);
  };

  return (
    <>
      <Button
        bg={theme.dark.popUpBackground}
        onClick={() => {
          updatePoints();
          onOpen();
        }}
      >
        Update Points
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent
          w="100%"
          h="50%"
          bg={theme.dark.popUpBackground}
          color={theme.dark.primary}
          display="flex"
          flexDirection="column"
          justifyContent="space-around"
          alignItems="center"
        >
          <Box
            h="70%"
            display="flex"
            flexDirection="column"
            justifyContent="space-around"
            alignItems="center"
          >
            <SkewLoader color={theme.dark.stas} size="110px" />
            <Text>One moment, the players are scoring</Text>
          </Box>
        </ModalContent>
      </Modal>
    </>
  );
};

export default SpinnerModalPoints;
