import { AtSignIcon, UnlockIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Divider,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Link,
  Stack,
  Text,
} from '@chakra-ui/react';
import { useState } from 'react';


import { NavLink } from 'react-router-dom';


const Login = () => {
  const [show, setShow] = useState(false);
  const [gmail, setGmail] = useState('');
  const [password, setPassword] = useState('');

  const handleClick = () => setShow(!show);

  const handleGmail = (e) => {
    setGmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const userBody = {
    gmail: gmail,
    password: password,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    /*const res = await fetch('http://localhost:8080/api/v1/users/login', {
      method: 'POST',
      body: JSON.stringify(userBody),
    }); */
    console.log(userBody);
  };

  const isError = gmail === '' || password === '';

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
      <Stack spacing={4}>
        <FormControl>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <AtSignIcon color="gray.300" />
            </InputLeftElement>
            <Input
              type="gmail"
              placeholder="Gmail"
              value={gmail}
              onChange={handleGmail}
            />
            {!isError ? (
              <FormHelperText>Enter the email account.</FormHelperText>
            ) : (
              <FormErrorMessage>Email is required.</FormErrorMessage>
            )}
          </InputGroup>
          <InputGroup size="md">
            <InputLeftElement pointerEvents="none">
              <UnlockIcon color="gray.300" />
            </InputLeftElement>
            <Input
              pr="4.5rem"
              type={show ? 'text' : 'password'}
              placeholder="Enter password"
              value={password}
              onChange={handlePassword}
            />
            {!isError ? (
              <FormHelperText>Please enter a password.</FormHelperText>
            ) : (
              <FormErrorMessage>Password is required.</FormErrorMessage>
            )}
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={handleClick}>
                {show ? 'Hide' : 'Show'}
              </Button>
            </InputRightElement>
          </InputGroup>
          <Text>
            I’ve forgotten <Link color="teal.500">my password</Link>
          </Text>
          <Button
            bg="#C2145A"
            color="#FFFFFF"
            variant="solid"
            type="submit"
            onClick={handleSubmit}
          >
            SING IN
          </Button>
        </FormControl>
        <Button m="20px" color="#DCBEE9" variant="solid">
          Continue with Google
        </Button>
        <Box display="flex" alignItems="center">
          <Divider /> <Text>or</Text> <Divider />
        </Box>
        <Text>
          Not a user?{' '}
          <NavLink to="/register">
            <Link color={'GrayText'}>Register now!</Link>
          </NavLink>
        </Text>
      </Stack>
    </Box>
  );
};

export default Login;
