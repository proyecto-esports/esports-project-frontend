import { Box, Button, Image, Slide, Text, useDisclosure } from '@chakra-ui/react';
import { useContext, useState } from 'react';

import { UserContext } from '../context/jwtContext';
import theme from './../theme';
import LineupCards from './BenchPanel';

const SlideEx = ({ player }) => {
  const { isOpen, onToggle, onClose } = useDisclosure();
  const { setCurrentPlayer } = useContext(UserContext);
  const [scrollBlocked, setScrollBlocked] = useState(false);
  console.log(scrollBlocked);
  const blocked =
    ((document.body.style.height = '100vh'), (document.body.style.overflowY = 'hidden'));
  const unBlocked =
    ((document.body.style.height = ''), (document.body.style.overflowY = ''));
  return (
    <>
      <Button
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        gap="0.5vh"
        backgroundColor="transparent"
        backgroundImage="url(https://res.cloudinary.com/dlqo06xcs/image/upload/v1670788899/Logo/backgroundCard_zw6qrv.png)"
        backgroundRepeat="no-repeat"
        backgroundPosition="center 0.01rem"
        backgroundSize="130%"
        borderRadius="5px"
        h="32%"
        w="45%"
        variant="unstyled"
        onClick={() => {
          setCurrentPlayer(player._id);
          setScrollBlocked(true);
          onToggle(scrollBlocked == true ? blocked : unBlocked);
        }}
      >
        <Image maxWidth="90%" h="70%" src={player.image} alt={player.nickname} />
        <Text color={theme.dark.primary} fontSize="1.2rem" backgroundColor="#101221BF">
          {player.nickname}
        </Text>
      </Button>

      <Slide
        position="fixed"
        direction="bottom"
        in={isOpen}
        style={{ zIndex: 10 }}
        pointerEvent="none"
      >
        <Button
          marginTop="2vh"
          position="absolute"
          top="0.5rem"
          right="0.5rem"
          bg="transparent"
          onClick={() => {
            onClose(), setScrollBlocked(false);
          }}
        >
          ❌
        </Button>
        <Box
          p="3rem"
          color={theme.dark.primary}
          mt="4"
          bg="#101221F2"
          rounded="md"
          shadow="md"
          h="100vh"
          w="100%"
          display="flex"
          flexdirection="row"
          justifyContent="space-around"
          flexWrap="wrap"
          overflowY="scroll"
        >
          <LineupCards />
        </Box>
      </Slide>
    </>
  );
};

export default SlideEx;
