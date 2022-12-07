import { AtSignIcon, UnlockIcon } from '@chakra-ui/icons';
import {
  Button,
  FormControl,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import BoxFlex from '../components/UI/BoxFlex.jsx';
import { API } from '../services/API.js';

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const submitForm = (data) => {
    const formData = new FormData();

    console.log('data', data);
    const { username, gmail, password, image } = data;
    formData.append('username', username);
    formData.append('gmail', gmail);
    formData.append('password', password);
    if (image.length !== 0) formData.append('image', image[0]);
    console.log(image[0]);
    console.log('formData', Object.entries(formData));
    API.post('users/register', formData).then((res) => {
      console.log('Response', res);
      res && navigate('/login');
    });
  };

  return (
    <BoxFlex>
      <Image
        src="https://res.cloudinary.com/dlqo06xcs/image/upload/v1670349592/LOGO_gbbhqo.png"
        alt="E-Tactic"
      />
      <form onSubmit={handleSubmit(submitForm)}>
        <FormControl>
          <InputGroup m="10px">
            <InputLeftElement pointerEvents="none">
              <AtSignIcon color="gray.300" />
            </InputLeftElement>
            <Input
              type="text"
              id="username"
              name="username"
              {...register('username')}
              placeholder="Username"
            />
          </InputGroup>
          <InputGroup m="10px">
            <InputLeftElement pointerEvents="none">
              <AtSignIcon color="gray.300" />
            </InputLeftElement>
            <Input
              type="text"
              id="gmail"
              name="gmail"
              {...register('gmail')}
              placeholder="Gmail"
            />
          </InputGroup>
          <InputGroup m="10px" size="md">
            <InputLeftElement pointerEvents="none">
              <UnlockIcon color="gray.300" />
            </InputLeftElement>
            <Input
              type={showPassword ? 'text' : 'password'}
              id="password"
              name="password"
              {...register('password')}
              placeholder="Password"
              pr="4.5rem"
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={() => setShowPassword(true)}>
                {showPassword ? 'Hide' : 'Show'}
              </Button>
            </InputRightElement>
          </InputGroup>
          <InputGroup m="10px">
            <InputLeftElement pointerEvents="none">
              <AtSignIcon color="gray.300" />
            </InputLeftElement>
            <Input
              type="file"
              id="image"
              name="image"
              {...register('image')}
              placeholder="Avatar image"
            />
          </InputGroup>
          <Button type="submit" bg="#C2145A" color="#FFFFFF" variant="solid">
            SUBMIT
          </Button>
        </FormControl>
      </form>
    </BoxFlex>
  );
};

export default Register;
