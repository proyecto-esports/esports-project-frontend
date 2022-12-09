import {
  Button,
  Center,
  Input,
  InputGroup,
  InputRightElement,
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
import DatosCartaModal from './DatosCartaModal';

const BidModal = ({ player }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [price, setPrice] = useState(player.value);

  const handlePrice = (e) => {
    setPrice(e.target.value);
  };

  const handleLessPrice = () => {
    setPrice(price / 100);
  };

  const handleMorePrice = () => {
    !price ? setPrice(100) : setPrice(price * 100);
  };

  const createBid = (ev) => {
    ev.preventDefault();
    const user = localStorage.getItem('user');
    const userId = JSON.parse(user);
    const bodyBid = {
      userId: userId._id,
      playerId: player._id,
      money: Number(price),
    };
    console.log(bodyBid);
    API.post('bids', bodyBid).then((res) => {
      console.log(bodyBid);
      console.log('Response', res);
    });
  };

  return (
    <>
      <Button
        width={20}
        onClick={onOpen}
        border="2px"
        borderColor={theme.dark.stas}
        bg={theme.dark.bottons}
        color={theme.dark.background}
        fontWeight="bold"
      >
        {player.value} €
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <form onSubmit={(ev) => createBid(ev)}>
          <ModalOverlay />
          <ModalContent bg={theme.dark.background}>
            <ModalHeader />
            <ModalCloseButton color={theme.dark.primary} />

            <ModalBody display="flex" flexDirection="column" gap={5} alignItems="center">
              <DatosCartaModal player={player} />
              <Center gap={2.5}>
                <Button
                  borderRadius={50}
                  color={theme.dark.primary}
                  variant="solid"
                  type="button"
                  onClick={handleLessPrice}
                  bg={theme.dark.stas}
                  fontSize="xx-large"
                >
                  -
                </Button>
                <InputGroup>
                  <Input
                    color={theme.dark.primary}
                    type="number"
                    textAlign="center"
                    border="none"
                    value={price}
                    onChange={handlePrice}
                    min={player.value}
                  />
                  <InputRightElement color={theme.dark.primary}>€</InputRightElement>
                </InputGroup>

                <Button
                  borderRadius={50}
                  color={theme.dark.primary}
                  variant="solid"
                  type="button"
                  onClick={handleMorePrice}
                  bg={theme.dark.stas}
                  fontSize="xx-large"
                >
                  +
                </Button>
              </Center>
            </ModalBody>

            <ModalFooter>
              <Button
                bg={theme.dark.accent3}
                margin="0 auto"
                onClick={onClose}
                type="submit"
                color={theme.dark.primary}
              >
                Pujar
              </Button>
            </ModalFooter>
          </ModalContent>
        </form>
      </Modal>
    </>
  );
};
export default BidModal;
