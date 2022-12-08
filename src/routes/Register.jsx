import { AtSignIcon, UnlockIcon } from '@chakra-ui/icons';
import {
  Button,
  FormControl,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Box,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { API } from '../services/API.js';
import theme from './../theme';

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
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      bg={theme.dark.background}
      w="100vw"
      h="100vh"
    >
      <Box
        display="flex"
        flexDirection="column"
        gap="4rem"
        justifyContent="center"
        alignItems="center"
        padding="1rem"
      >
        <Box max-width="30rem" filter="drop-shadow(0 0 8px rgb(255 255 255 / 0.4))">
          <svg
            width="100%"
            height="109"
            viewBox="0 0 451 109"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_52_363)">
              <path
                d="M39.49 0C18.48 0 5.79 11.64 1.45 29.38C0.41 33.6 0 37.95 0 42.3V47.73H77V38.05C77 33.29 76.37 28.53 74.88 24.01C70.44 10.49 59.75 0 39.49 0ZM23.21 33.99C24.12 23.86 28.52 16.32 39.46 16.32C50.4 16.32 54.41 24.4 54.57 33.99H23.21Z"
                fill={theme.dark.accent2}
              />
              <path
                d="M24.29 51.99H0V67.78C0 72.1 0.46 76.42 1.6 80.58C5.86 96.1 17.66 108.26 38.67 108.26C64.57 108.26 73.57 91.69 76.49 81.6H53.65C51.48 86.59 48.77 90.4 39.27 90.4C31.46 90.4 26.58 85.64 24.28 79.32C23.34 76.72 22.83 73.86 22.74 70.96C22.71 70.55 22.69 70.14 22.68 69.73C22.63 68.39 22.63 67.04 22.67 65.73H55V52H24.29V51.99Z"
                fill={theme.dark.accent2}
              />
              <path
                d="M162.01 37.4H144.84V86.93H125.03V37.4H107.86V20.89H162.02V37.4H162.01Z"
                fill={theme.dark.accent2}
              />
              <path
                d="M204.37 72.4H185.69L181.82 86.93H162.01L183.33 20.98H206.73L227.96 86.93H208.15L204.38 72.4H204.37ZM200.03 55.89L195.03 36.93L190.03 55.89H200.03Z"
                fill={theme.dark.accent2}
              />
              <path
                d="M265.98 70.7C268.68 70.7 271.14 70.11 273.34 68.93C275.54 67.75 277.36 66.21 278.81 64.32L293.06 75.49C289.79 79.15 285.83 82.05 281.17 84.18C276.51 86.31 271.45 87.37 265.98 87.37C261.14 87.37 256.58 86.5 252.3 84.76C248.02 83.02 244.3 80.65 241.12 77.67C237.94 74.69 235.43 71.19 233.57 67.17C231.71 63.15 230.79 58.87 230.79 54.32C230.79 49.77 231.72 45.49 233.57 41.47C235.42 37.45 237.94 33.95 241.12 30.97C244.3 27.99 248.02 25.62 252.3 23.88C256.58 22.14 261.14 21.27 265.98 21.27C271.45 21.27 276.51 22.34 281.17 24.48C285.82 26.62 289.79 29.53 293.06 33.21L278.81 44.32C277.36 42.43 275.54 40.89 273.34 39.71C271.14 38.53 268.68 37.94 265.98 37.94C263.65 37.94 261.5 38.38 259.52 39.27C257.54 40.15 255.82 41.35 254.38 42.85C252.93 44.35 251.8 46.11 250.98 48.11C250.16 50.11 249.75 52.21 249.75 54.39C249.75 56.57 250.16 58.65 250.98 60.62C251.8 62.6 252.93 64.33 254.38 65.84C255.83 67.34 257.54 68.54 259.52 69.42C261.5 70.3 263.65 70.75 265.98 70.75V70.7Z"
                fill={theme.dark.accent2}
              />
              <path
                d="M351.93 37.4H334.76V86.93H314.95V37.4H297.78V20.89H351.94V37.4H351.93Z"
                fill={theme.dark.accent2}
              />
              <path
                d="M361.37 20.89H381.18V86.84H361.37V20.89Z"
                fill={theme.dark.accent2}
              />
              <path
                d="M423.92 70.7C426.62 70.7 429.08 70.11 431.28 68.93C433.48 67.75 435.3 66.21 436.75 64.32L451 75.49C447.73 79.15 443.77 82.05 439.11 84.18C434.45 86.31 429.39 87.37 423.92 87.37C419.08 87.37 414.52 86.5 410.24 84.76C405.96 83.02 402.24 80.65 399.06 77.67C395.88 74.69 393.37 71.19 391.51 67.17C389.65 63.15 388.73 58.87 388.73 54.32C388.73 49.77 389.66 45.49 391.51 41.47C393.36 37.45 395.88 33.95 399.06 30.97C402.24 27.99 405.96 25.62 410.24 23.88C414.52 22.14 419.08 21.27 423.92 21.27C429.39 21.27 434.45 22.34 439.11 24.48C443.76 26.62 447.73 29.53 451 33.21L436.75 44.32C435.3 42.43 433.48 40.89 431.28 39.71C429.08 38.53 426.62 37.94 423.92 37.94C421.59 37.94 419.44 38.38 417.46 39.27C415.48 40.15 413.76 41.35 412.32 42.85C410.87 44.35 409.74 46.11 408.92 48.11C408.1 50.11 407.69 52.21 407.69 54.39C407.69 56.57 408.1 58.65 408.92 60.62C409.74 62.6 410.87 64.33 412.32 65.84C413.77 67.34 415.48 68.54 417.46 69.42C419.44 70.3 421.59 70.75 423.92 70.75V70.7Z"
                fill={theme.dark.accent2}
              />
              <path d="M100 51.99H84V65.72H100V51.99Z" fill={theme.dark.accent2} />
            </g>
            <defs>
              <clipPath id="clip0_52_363">
                <rect width="451" height="108.25" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </Box>
        <form onSubmit={handleSubmit(submitForm)}>
          <FormControl
            display="flex"
            flexDirection="column"
            gap="1rem"
            alignItems="center"
          >
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <AtSignIcon color="gray.300" />
              </InputLeftElement>
              <Input
                type="text"
                id="username"
                name="username"
                {...register('username')}
                placeholder="Username"
                color={theme.dark.accent1}
                width="100%"
              />
            </InputGroup>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <AtSignIcon color="gray.300" />
              </InputLeftElement>
              <Input
                type="text"
                id="gmail"
                name="gmail"
                {...register('gmail')}
                placeholder="Gmail"
                color={theme.dark.accent1}
              />
            </InputGroup>
            <InputGroup>
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
                color={theme.dark.accent1}
              />
              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={() => setShowPassword(true)}>
                  {showPassword ? 'Hide' : 'Show'}
                </Button>
              </InputRightElement>
            </InputGroup>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <AtSignIcon color="gray.300" />
              </InputLeftElement>
              <Input
                type="file"
                id="image"
                name="image"
                {...register('image')}
                placeholder="Avatar image"
                color={theme.dark.accent1}
              />
            </InputGroup>
            <Button
              type="submit"
              bg={theme.dark.accent3}
              color="#FFFFFF"
              variant="solid"
              marginTop="1rem"
              width="max-content"
            >
              SUBMIT
            </Button>
          </FormControl>
        </form>
      </Box>
    </Box>
  );
};

export default Register;
