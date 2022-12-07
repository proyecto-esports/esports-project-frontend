import { AtSignIcon, UnlockIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  FormControl,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from '@chakra-ui/react';
import { useState } from 'react';
import React from 'react';

const Register = () => {
  const [show, setShow] = useState(false);
  const [username, setUsername] = useState('');
  const [gmail, setGmail] = useState('');
  const [password, setPassword] = useState('');
  const [image, setImage] = useState('');
  const handleClick = () => setShow(!show);
  const handleUsername = (e) => {
    setUsername(e.target.value);
  };
  const handleGmail = (e) => {
    setGmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleImage = (e) => {
    setImage(e.target.value);
  };

  const createUser = {
    nickname: username,
    gmail: gmail,
    password: password,
    image: image,
  };

  const handleSubmit = () => {
    console.log(createUser);
  };

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
      <FormControl>
        <InputGroup m="10px">
          <InputLeftElement pointerEvents="none">
            <AtSignIcon color="gray.300" />
          </InputLeftElement>
          <Input
            type="text"
            placeholder="Username"
            value={username}
            onChange={handleUsername}
          />
        </InputGroup>
        <InputGroup m="10px">
          <InputLeftElement pointerEvents="none">
            <AtSignIcon color="gray.300" />
          </InputLeftElement>
          <Input type="text" placeholder="Gmail" value={gmail} onChange={handleGmail} />
        </InputGroup>
        <InputGroup m="10px" size="md">
          <InputLeftElement pointerEvents="none">
            <UnlockIcon color="gray.300" />
          </InputLeftElement>
          <Input
            pr="4.5rem"
            type={show ? 'text' : 'password'}
            placeholder="Password"
            value={password}
            onChange={handlePassword}
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
          <Input
            type="file"
            placeholder="Avatar picture"
            value={image}
            onChange={handleImage}
          />
        </InputGroup>

        <Button bg="#C2145A" color="#FFFFFF" variant="solid" onClick={handleSubmit}>
          SUBMIT
        </Button>
      </FormControl>
    </Box>
  );
};

export default Register;
