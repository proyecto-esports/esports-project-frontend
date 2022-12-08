import { Box, Button, FormControl, FormLabel, Radio, RadioGroup } from '@chakra-ui/react';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';

import RadioCard from '../components/RadioCard';
import { API } from '../services/API.js';
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
  const { register, handleSubmit, control } = useForm();

  const submitForm = (data) => {
    const { game, competition } = data;
    const formData = new FormData();

    formData.append('game', game);
    formData.append('competition', competition);

    API.post('competitions', formData).then((res) => console.log('Response', res));
  };

  return (
    <Box h="100vh" w="100%" bg={theme.dark.background} padding="1rem">
      <form onSubmit={handleSubmit(submitForm)}>
        <FormControl>
          <FormLabel htmlFor="game" color={theme.dark.primary}>
            Select a game:
          </FormLabel>
          <Controller
            render={() => (
              <RadioGroup
                ref={register()}
                name="game"
                display="flex"
                flexWrap="wrap"
                gap="1rem"
              >
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
            )}
            name="game"
            control={control}
          />

          {selectedGame && (
            <>
              <FormLabel htmlFor="competition" color={theme.dark.primary}>
                Competition:
              </FormLabel>
              <Controller
                render={() => (
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
                )}
                name="competition"
                control={control}
              />
            </>
          )}
          <Button
            type="submit"
            bg={theme.dark.accent3}
            color="#FFFFFF"
            variant="solid"
            marginTop="1rem"
            width="max-content"
          >
            Create
          </Button>
        </FormControl>
      </form>
    </Box>
  );
};

export default CreateGroup;
