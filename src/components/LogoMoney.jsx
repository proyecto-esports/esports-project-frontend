import { Icon } from '@chakra-ui/react';
import React from 'react';

const LogoMoney = ({ color }) => {
  return (
    <Icon justifySelf="center" alignSelf="center" height="1rem">
      <svg
        alignmentBaseline="middle"
        width="1.2rem"
        height="1.2rem"
        viewBox="0 0 77 109"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M39.49 0C18.48 0 5.79 11.64 1.45 29.38C0.41 33.6 0 37.95 0 42.3V47.73H77V38.05C77 33.29 76.37 28.53 74.88 24.01C70.44 10.49 59.75 0 39.49 0ZM23.21 33.99C24.12 23.86 28.52 16.32 39.46 16.32C50.4 16.32 54.41 24.4 54.57 33.99H23.21Z"
          fill={color}
        />
        <path
          d="M24.29 51.99H0V67.78C0 72.1 0.46 76.42 1.6 80.58C5.86 96.1 17.66 108.26 38.67 108.26C64.57 108.26 73.57 91.69 76.49 81.6H53.65C51.48 86.59 48.77 90.4 39.27 90.4C31.46 90.4 26.58 85.64 24.28 79.32C23.34 76.72 22.83 73.86 22.74 70.96C22.71 70.55 22.69 70.14 22.68 69.73C22.63 68.39 22.63 67.04 22.67 65.73H55V52H24.29V51.99Z"
          fill={color}
        />
      </svg>
    </Icon>
  );
};

export default LogoMoney;
