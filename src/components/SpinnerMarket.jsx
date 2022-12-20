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

const SpinnerMarket = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { user } = useAuth();

  const renewMarket = () => {
    API.patch(`competitions/${user.competition._id}/market`);
    setTimeout(() => {
      onClose();
    }, 3500);
  };

  return (
    <>
      <Button
        bg={theme.dark.popUpBackground}
        onClick={() => {
          renewMarket();
          onOpen();
        }}
      >
        Renew Market
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
            <Text>Scouting new players</Text>
            <SkewLoader color={theme.dark.stats} size="110px" />
          </Box>
        </ModalContent>
      </Modal>
    </>
  );
};

export default SpinnerMarket;
