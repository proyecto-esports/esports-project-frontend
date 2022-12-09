import { Box, FormControl, FormLabel, RadioGroup } from '@chakra-ui/react';

import RadioCard from '../components/RadioCard';
import theme from './../theme';

const CreateGroup = () => {
  const games = [
    { name: 'Valorant', isDisabled: false },
    { name: 'LOL', isDisabled: true },
    { name: 'Rocket League', isDisabled: true },
  ];
  return (
    <Box h="100vh" w="100%" bg={theme.dark.background} padding="1rem">
      <FormControl>
        <FormLabel htmlFor="game" color={theme.dark.primary}>
          Select a game:
        </FormLabel>
        <RadioGroup
          name="game"
          defaultValue={games[0].name}
          display="flex"
          flexWrap="wrap"
          gap="1rem"
        >
          {games.map((game) => {
            const { name, isDisabled } = game;
            return (
              <RadioCard key={name} value={name} isDisabled={isDisabled}>
                {name}
              </RadioCard>
            );
          })}
        </RadioGroup>
      </FormControl>
    </Box>
  );
};

export default CreateGroup;
