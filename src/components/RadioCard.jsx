import { Box, useRadio } from '@chakra-ui/react';

import theme from './../theme';

const RadioCard = (props) => {
  const { getInputProps, getCheckboxProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getCheckboxProps();

  return (
    <Box as="label">
      <input {...input} />
      <Box
        {...checkbox}
        onClick={() => props.onClick()}
        cursor="pointer"
        borderWidth="1px"
        borderRadius="md"
        boxShadow="md"
        border="2px solid"
        borderColor={theme.dark.bottons}
        _checked={{
          bg: 'teal.600',
          color: theme.dark.bottons,

          borderColor: 'teal.600',
        }}
        _focus={{
          boxShadow: 'outline',
        }}
        px={5}
        py={3}
      >
        {props.children}
      </Box>
    </Box>
  );
};

export default RadioCard;
