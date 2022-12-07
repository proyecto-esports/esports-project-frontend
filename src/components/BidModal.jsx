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
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { useState } from 'react';

const BidModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [price, setPrice] = useState(0);

  const handlePrice = (e) => {
    setPrice(e.target.value);
  };

  const handleLessPrice = () => {
    setPrice(price - 100);
  };

  const handleMorePrice = () => {
    setPrice(price + 100);
  };

  //  const savePrice = () => {
  // Coge precio y llama a función de guardar puja
  // };

  return (
    <>
      <Button width={20} onClick={onOpen}>
        Pujar
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader />
          <ModalCloseButton />

          <ModalBody gap={2.5}>
            <Text fontWeight="bold" mb="1rem">
              Hola
            </Text>
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
                placeholder="Price"
                textAlign="center"
                border="none"
                value={price}
                onChange={handlePrice}
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
            <Button colorScheme="blue" margin="0 auto" onClick={onClose}>
              Pujar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default BidModal;
