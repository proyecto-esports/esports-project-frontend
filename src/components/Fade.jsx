import { Box, Button, Image, Slide, useDisclosure } from '@chakra-ui/react';
import { useContext } from 'react';

import { UserContext } from '../context/jwtContext';
import CardModel from './BenchPanel';

const SlideEx = ({ player }) => {
  const { isOpen, onToggle, onClose } = useDisclosure();
  const { setCurrentPlayer } = useContext(UserContext);
  return (
    <>
      <Button
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        gap="1vh"
        bg="#848484"
        borderRadius="5px"
        h="30%"
        w="45%"
        onClick={() => {
          setCurrentPlayer(player._id);
          document.body.style.height = '100vh';
          document.body.style.overflowY = 'hidden';
          onToggle();
        }}
      >
        <Image w="100%" h="80%" src={player.image} alt={player.nickname} />
        {player.nickname}
      </Button>
      <Slide position="fixed" direction="bottom" in={isOpen} style={{ zIndex: 10 }}>
        <Button
          marginTop="2vh"
          position="absolute"
          top="0.5rem"
          right="0.5rem"
          bg="transparent"
          onClick={onClose}
        >
          ❌
        </Button>
        <Box
          p="3rem"
          color="white"
          mt="4"
          bg="#272d54"
          rounded="md"
          shadow="md"
          h="80vh"
          w="100%"
          display="flex"
          flexdirection="row"
          justifyContent="space-around"
          flexWrap="wrap"
          overflowY="scroll"
        >
          <CardModel />
        </Box>
      </Slide>
    </>
  );
};

export default SlideEx;
