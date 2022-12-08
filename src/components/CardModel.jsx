import { Box, Button, Image } from '@chakra-ui/react';

function CardModel() {
  return (
    <Box h="25vh" bg="#848484">
      <Button
        display="flex"
        alignItems="center"
        justifyContent="space-around"
        flexDirection="column"
        gap="1vh"
        marginTop="1vh"
        bg="#848484"
        w="35vw"
        h="22vh"
      >
        <Image
          w="40vw"
          h="25vh"
          src="https://images.contentstack.io/v3/assets/bltad9188aa9a70543a/bltd60716848ffd2e76/620ae2d400f003242ae10cba/48621450102_6078da4c6f_o.jpg?width=3200&height=1800"
          alt="Lol"
        />
        Player Name
      </Button>
    </Box>
  );
}

export default CardModel;
