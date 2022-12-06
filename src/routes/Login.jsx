import { AtSignIcon, UnlockIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Divider,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Link,
  Stack,
  Text,
} from '@chakra-ui/react';
import React from 'react';

const Login = () => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  return (
    <Box bg="#272d54" w="100vw" h="100vh">
      <Image
        src="https://res.cloudinary.com/dlqo06xcs/image/upload/v1670349592/LOGO_gbbhqo.png"
        alt="E-Tactic"
      />
      <Stack spacing={4}>
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <AtSignIcon color="gray.300" />
          </InputLeftElement>
          <Input type="gmail" placeholder="Gmail" />
        </InputGroup>
        <InputGroup size="md">
          <InputLeftElement pointerEvents="none">
            <UnlockIcon color="gray.300" />
          </InputLeftElement>
          <Input
            pr="4.5rem"
            type={show ? 'text' : 'password'}
            placeholder="Enter password"
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? 'Hide' : 'Show'}
            </Button>
          </InputRightElement>
        </InputGroup>
      </Stack>
      <Text>
        I’ve forgotten <Link color="teal.500">my password</Link>
      </Text>
      <Button bg="#C2145A" color="#FFFFFF" variant="solid">
        SING IN
      </Button>
      <Button m="20px" color="#DCBEE9" variant="solid">
        Continue with Google
      </Button>
      <Box display="flex" alignItems="center">
        <Divider /> <Text>or</Text> <Divider />
      </Box>
      <Text>
        Not a user? <Link color="teal.500">Register now!</Link>
      </Text>
    </Box>
  );
};

export default Login;
