import { Box, FormControl, FormLabel, Radio, RadioGroup } from '@chakra-ui/react';
import { useState } from 'react';

import RadioCard from '../components/RadioCard';
import theme from './../theme';

const CreateGroup = () => {
  const games = [
    {
      name: 'Valorant',
      isDisabled: false,
      competitions: [
        { name: 'League', isDisabled: false },
        { name: 'Tournament', isDisabled: true },
        { name: 'World', isDisabled: true },
      ],
    },
    {
      name: 'LOL',
      isDisabled: true,
    },
    {
      name: 'Rocket League',
      isDisabled: true,
    },
  ];

  const [selectedGame, setSelectedGame] = useState(null);

  return (
    <Box h="100vh" w="100%" bg={theme.dark.background} padding="1rem">
      <FormControl>
        <FormLabel htmlFor="game" color={theme.dark.primary}>
          Select a game:
        </FormLabel>
        <RadioGroup name="game" display="flex" flexWrap="wrap" gap="1rem">
          {games.map((game) => {
            const { name, isDisabled } = game;
            const handleClick = () => setSelectedGame(game);
            return (
              <RadioCard
                key={name}
                value={name}
                isDisabled={isDisabled}
                onClick={handleClick}
              >
                {name}
              </RadioCard>
            );
          })}
        </RadioGroup>
        {selectedGame && (
          <>
            <FormLabel htmlFor="competition" color={theme.dark.primary}>
              Competition:
            </FormLabel>
            <RadioGroup name="competition">
              {selectedGame.competitions?.map((competition) => {
                const { name, isDisabled } = competition;
                return (
                  <Radio key={name} isDisabled={isDisabled}>
                    {name}
                  </Radio>
                );
              })}
            </RadioGroup>
          </>
        )}
      </FormControl>
    </Box>
  );
};

export default CreateGroup;
