import { CheckIcon, CloseIcon } from '@chakra-ui/icons';
import {
  Box,
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
  Text,
  useDisclosure,
  useToast,
} from '@chakra-ui/react';
import { useState } from 'react';

import { useAuth } from '../hooks/AuthContext';
import { API } from '../services/API';
import theme from '../theme';
import CardDataModal from './CardDataModal';
import LogoMoney from './LogoMoney';

const BidModal = ({ player }) => {
  const toast = useToast();
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

  const { user, login } = useAuth();

  const createBid = (ev) => {
    ev.preventDefault();

    onClose();

    const bodyBid = {
      userId: user._id,
      playerId: player._id,
      money: Number(price),
    };
    console.log('bodyBid', bodyBid);
    API.post('/bids', bodyBid)
      .then((res) => {
        const { data: updatedUser } = res.data.info;
        login({ user: { ...user, money: updatedUser.money } });
        toast({
          duration: 2000,
          render: () => (
            <Box
              color="black"
              padding="2rem"
              bg={theme.dark.success}
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
              <CheckIcon height="3rem" width="3rem" />
              <Text>
                You have bid{' '}
                <Text fontWeight="600" display="inline">
                  {price}
                </Text>
                <LogoMoney color="black" /> for{' '}
                <Text fontWeight="600" display="inline">
                  {player.nickname}
                </Text>
              </Text>
            </Box>
          ),
        });
      })
      .catch(({ response: res }) => {
        console.log(res);
        toast({
          duration: 2000,
          render: () => (
            <Box
              color="black"
              padding="2rem"
              bg={theme.dark.failure}
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
              <CloseIcon height="3rem" width="3rem" color={theme.dark.background} />{' '}
              <Text>You don&quot;t have enough money: </Text>
              <Text fontWeight="600" display="inline">
                {user.money} <LogoMoney color="black" /> &lt; {price}{' '}
                <LogoMoney color="black" />
              </Text>
            </Box>
          ),
        });
      });
  };

  return (
    <>
      <Button
        width={20}
        onClick={onOpen}
        border="2px"
        borderColor={theme.dark.stats}
        bg={theme.dark.bottons}
        color={theme.dark.background}
        fontWeight="bold"
      >
        {player.value} <LogoMoney color={theme.dark.background} />
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <form onSubmit={(ev) => createBid(ev)}>
          <ModalOverlay />
          <ModalContent bg={theme.dark.background} alignSelf="center">
            <ModalHeader />
            <Box
              display="flex"
              flexDirection="row"
              gap="0.3rem"
              color={theme.dark.primary}
              alignContent="center"
              justifyContent="center"
              flexWrap="wrap"
            >
              <Box
                display="flex"
                alignContent="center"
                justifyContent="center"
                flexWrap="wrap"
              >
                Funds:{' '}
              </Box>
              <Text
                border="2px"
                borderColor={theme.dark.primary}
                padding="0.2rem"
                borderRadius="2xl"
              >
                {user.money} <LogoMoney color={theme.dark.primary} />
              </Text>
            </Box>
            <ModalCloseButton color={theme.dark.primary} />
            <ModalBody display="flex" flexDirection="column" gap={5} alignItems="center">
              <CardDataModal player={player} />
              <Center gap={2.5}>
                <Button
                  borderRadius={50}
                  color={theme.dark.primary}
                  variant="solid"
                  type="button"
                  onClick={handleLessPrice}
                  bg={theme.dark.stats}
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
                  <InputRightElement color={theme.dark.primary}>
                    <LogoMoney color={theme.dark.primary} />
                  </InputRightElement>
                </InputGroup>
                <Button
                  borderRadius={50}
                  color={theme.dark.primary}
                  variant="solid"
                  type="button"
                  onClick={handleMorePrice}
                  bg={theme.dark.stats}
                  fontSize="xx-large"
                >
                  +
                </Button>
              </Center>
            </ModalBody>
            <ModalFooter display="flex" flexDirection="row" gap="1rem">
              <Button
                bg={theme.dark.accent3}
                margin="0 auto"
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
