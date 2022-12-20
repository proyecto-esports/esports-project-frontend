import { Box, Button, Image, Slide, Text, useDisclosure } from '@chakra-ui/react';
import { useContext, useState } from 'react';

import { UserContext } from '../context/jwtContext';
import theme from './../theme';
import BenchPanel from './BenchPanel';

const SlideEx = ({ player }) => {
  const { isOpen, onToggle, onClose } = useDisclosure();
  const { setCurrentPlayer } = useContext(UserContext);
  const [scrollBlocked, setScrollBlocked] = useState(false);
  const blocked =
    ((document.body.style.height = '100vh'), (document.body.style.overflowY = 'hidden'));
  const unBlocked =
    ((document.body.style.height = ''), (document.body.style.overflowY = ''));
  return (
    <>
      <Box
        width="45%"
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        h="33%"
      >
        <Button
          display="flex"
          flexDirection="column"
          gap="1rem"
          backgroundColor="transparent"
          justifyContent="flex-start"
          backgroundImage="url(https://res.cloudinary.com/dlqo06xcs/image/upload/v1670788899/Logo/backgroundCard_zw6qrv.png)"
          backgroundRepeat="no-repeat"
          overflow="visible"
          backgroundPosition="center 0.01rem"
          backgroundSize="105%"
          height="100%"
          width="100%"
          maxW="10rem"
          maxWidth="10rem"
          variant="unstyled"
          onClick={() => {
            setCurrentPlayer(player._id);
            setScrollBlocked(true);
            onToggle(scrollBlocked == true ? blocked : unBlocked);
          }}
        >
          <Image
            maxWidth="10rem"
            width="77%"
            src={player.image}
            alt={player.nickname}
            paddingTop="2.1rem"
            borderBottomRadius="1.8rem"
          />
          <Text
            color={theme.dark.primary}
            fontSize="1.2rem"
            backgroundColor="#101221BF"
            position="relative"
          >
            {player.nickname}
          </Text>
        </Button>
      </Box>

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
          <BenchPanel />
        </Box>
      </Slide>
    </>
  );
};

export default SlideEx;
