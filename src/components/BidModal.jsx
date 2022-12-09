import {
  Button,
  Center,
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
import DatosCartaModal from './DatosCartaModal';

const BidModal = ({ player }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [price, setPrice] = useState(0);

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
      <Button width={20} onClick={onOpen}>
        {player.value} €
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <form onSubmit={(ev) => createBid(ev)}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader />
            <ModalCloseButton />

            <ModalBody display="flex" flexDirection="column" gap={5}>
              <DatosCartaModal player={player} />
              <Center gap={2.5}>
                <Button
                  bg="#C2145A"
                  borderRadius={50}
                  color="#FFFFFF"
                  variant="solid"
                  type="button"
                  onClick={handleLessPrice}
                >
                  -
                </Button>
                <Input
                  type="number"
                  textAlign="center"
                  border="none"
                  value={price}
                  onChange={handlePrice}
                  min={player.value}
                />
                <Button
                  bg="#C2145A"
                  borderRadius={50}
                  color="#FFFFFF"
                  variant="solid"
                  type="button"
                  onClick={handleMorePrice}
                >
                  +
                </Button>
              </Center>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" margin="0 auto" onClick={onClose} type="submit">
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
