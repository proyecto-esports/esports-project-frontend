import { Box, Button, Image, Slide, useDisclosure } from '@chakra-ui/react';

import CardModel from './CardModel';

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
        h="30vh"
        onClick={() => {
          document.body.style.height = '100vh';
          document.body.style.overflowY = 'hidden';
          onToggle();
        }}
      >
        <Image
          w="40vw"
          h="25vh"
          src="https://images.contentstack.io/v3/assets/bltad9188aa9a70543a/bltd60716848ffd2e76/620ae2d400f003242ae10cba/48621450102_6078da4c6f_o.jpg?width=3200&height=1800"
          alt="Lol"
        />
        Player Name
      </Button>
      <Slide position="fixed" direction="bottom" in={isOpen} style={{ zIndex: 10 }}>
        <Box
          p="40px"
          color="white"
          mt="4"
          bg="#272d54"
          rounded="md"
          shadow="md"
          h="90vh"
          w="100vw"
          gap="2vh"
          display="flex"
          flexdirection="row"
          justifyContent="space-around"
          flexWrap="wrap"
        >
          <Button
            marginTop="1vh"
            position="absolute"
            top="0.5rem"
            right="0.5rem"
            bg="transparent"
            onClick={onClose}
          >
            ❌
          </Button>
        </Box>
        <Box
          p="40px"
          color="white"
          mt="4"
          bg="#272d54"
          rounded="md"
          shadow="md"
          h="90vh"
          w="100vw"
          gap="2vh"
          display="flex"
          flexdirection="row"
          justifyContent="space-around"
          flexWrap="wrap"
        >
          <CardModel />
          <CardModel />
          <CardModel />
          <CardModel />
          <CardModel />
          <CardModel />
          <CardModel />
          <CardModel />
          <CardModel />
        </Box>
      </Slide>
    </>
  );
}

export default SlideEx;
