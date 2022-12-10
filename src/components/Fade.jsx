import { Box, Button, Image, Slide, useDisclosure } from '@chakra-ui/react';

import CardModel from './AllPlayers';

function SlideEx() {
  const { isOpen, onToggle, onClose } = useDisclosure();

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
          document.body.style.height = '100vh';
          document.body.style.overflowY = 'hidden';
          onToggle();
        }}
      >
        <Image
          w="100%"
          h="80%"
          src="https://images.contentstack.io/v3/assets/bltad9188aa9a70543a/bltd60716848ffd2e76/620ae2d400f003242ae10cba/48621450102_6078da4c6f_o.jpg?width=3200&height=1800"
          alt="Lol"
        />
        Player Name
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
}

export default SlideEx;
