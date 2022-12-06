import { AtSignIcon, UnlockIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from '@chakra-ui/react';
import React from 'react';

const Register = () => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  return (
    <Box
      display="flex"
      alignItems="center"
      flexDirection="column"
      bg="#272d54"
      w="100vw"
      h="100vh"
    >
      <Image
        src="https://res.cloudinary.com/dlqo06xcs/image/upload/v1670349592/LOGO_gbbhqo.png"
        alt="E-Tactic"
      />
      <InputGroup m="10px">
        <InputLeftElement pointerEvents="none">
          <AtSignIcon color="gray.300" />
        </InputLeftElement>
        <Input type="text" placeholder="Username" />
      </InputGroup>
      <InputGroup m="10px">
        <InputLeftElement pointerEvents="none">
          <AtSignIcon color="gray.300" />
        </InputLeftElement>
        <Input type="text" placeholder="Gmail" />
      </InputGroup>
      <InputGroup m="10px" size="md">
        <InputLeftElement pointerEvents="none">
          <UnlockIcon color="gray.300" />
        </InputLeftElement>
        <Input pr="4.5rem" type={show ? 'text' : 'password'} placeholder="Password" />
        <InputRightElement width="4.5rem">
          <Button h="1.75rem" size="sm" onClick={handleClick}>
            {show ? 'Hide' : 'Show'}
          </Button>
        </InputRightElement>
      </InputGroup>
      <InputGroup m="10px" size="md">
        <InputLeftElement pointerEvents="none">
          <UnlockIcon color="gray.300" />
        </InputLeftElement>
        <Input
          pr="4.5rem"
          type={show ? 'text' : 'password'}
          placeholder="Confirm password"
        />
        <InputRightElement width="4.5rem">
          <Button h="1.75rem" size="sm" onClick={handleClick}>
            {show ? 'Hide' : 'Show'}
          </Button>
        </InputRightElement>
      </InputGroup>
      <InputGroup m="10px">
        <InputLeftElement pointerEvents="none">
          <AtSignIcon color="gray.300" />
        </InputLeftElement>
        <Input type="image" placeholder="Avatar picture" />
      </InputGroup>

      <Button bg="#C2145A" color="#FFFFFF" variant="solid">
        SUBMIT
      </Button>
    </Box>
  );
};

export default Register;
