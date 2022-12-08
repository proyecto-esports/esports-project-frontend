import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Radio,
  RadioGroup,
  Text,
} from '@chakra-ui/react';
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
      competitions: [
        { name: 'League', isDisabled: true },
        { name: 'Tournament', isDisabled: true },
        { name: 'World', isDisabled: true },
      ],
    },
    {
      name: 'Rocket League',
      isDisabled: true,
      competitions: [
        { name: 'League', isDisabled: true },
        { name: 'Tournament', isDisabled: true },
        { name: 'World', isDisabled: true },
      ],
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
    <Box
      h="100vh"
      w="100%"
      bg={theme.dark.background}
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      gap="3rem"
    >
      <Text fontSize="4xl" color={theme.dark.primary}>
        New Competition
      </Text>
      <form onSubmit={handleSubmit(submitForm)}>
        <FormControl
          display="flex"
          flexDirection="column"
          maxWidth="30rem"
          padding="1rem"
          gap="1rem"
        >
          <FormLabel htmlFor="game" color={theme.dark.primary}>
            Select a game:
          </FormLabel>
          <Controller
            render={() => (
              <RadioGroup
                {...register('game')}
                name="game"
                display="flex"
                flexWrap="wrap"
                gap="1rem"
              >
                {games.map((game) => {
                  console.log('game', game);
                  const { name, isDisabled } = game;
                  console.log('game name', name);
                  const handleClick = () => setSelectedGame(game);
                  return (
                    <RadioCard
                      id={name}
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
                  <RadioGroup
                    {...register('competition')}
                    name="competition"
                    display="flex"
                    gap="1rem"
                  >
                    {selectedGame.competitions?.map((competition) => {
                      console.log('competition', competition);
                      const { name, isDisabled } = competition;
                      console.log('competition name', name);
                      return (
                        <Radio id={name} value={name} key={name} isDisabled={isDisabled}>
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
