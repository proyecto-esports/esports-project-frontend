import { CheckIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
} from '@chakra-ui/react';
import { useDisclosure, useToast } from '@chakra-ui/react';

import { API } from '../services/API';
import theme from '../theme';

const SellModal = ({ idUserI, id }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

  const handleSellPlayer = async (id) => {
    const playerSell = {
      player: id,
    };
    await API.put(`/users/sell/${idUserI}`, playerSell).then((res) => {
      toast({
        duration: 2000,
        render: () => (
          <Box
            color="black"
            padding="2rem"
            bg={theme.dark.primary}
            display="flex"
            flexDirection="column"
            alignItems="center"
            boxShadow="outline"
            justifyContent="center"
            gap="1rem"
            width="max-content"
            borderRadius="1rem"
            position="fixed"
            left="50%"
            top="50%"
            transform="translate(-50%, -50%)"
          >
            <CheckIcon height="3rem" width="3rem" color={theme.dark.success} />
            <Text>Player sold</Text>
          </Box>
        ),
      });
      onClose();
      setTimeout(() => {
        res && window.location.replace('')('/lineUp');
      }, 2000);
    });
  };

  return (
    <>
      <Button
        width="3rem"
        height="2rem"
        border="2px"
        borderColor={theme.dark.stas}
        bg={theme.dark.bottons}
        color={theme.dark.background}
        fontWeight="bold"
        onClick={onOpen}
      >
        Sell
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent background={theme.dark.background} color={theme.dark.primary}>
          <ModalHeader />
          <ModalCloseButton />
          <ModalBody
            gap="2rem"
            display="flex"
            flexDirection="column"
            alignItems="space-around"
            padding="2.5rem"
          >
            <Box display="flex" justifyContent="center">
              <Text>Are you sure to sell this player?</Text>
            </Box>
            <Box display="flex" flexDirection="row" justifyContent="space-around">
              <Button
                width="4rem"
                borderRadius={50}
                color={theme.dark.primary}
                variant="solid"
                type="button"
                bg={theme.dark.stas}
                onClick={onClose}
              >
                No
              </Button>
              <Button
                width="4rem"
                borderRadius={50}
                color={theme.dark.primary}
                variant="solid"
                type="button"
                bg={theme.dark.success}
                onClick={() => handleSellPlayer(id)}
              >
                Yes
              </Button>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default SellModal;
