import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Radio,
  RadioGroup,
  Text,
} from '@chakra-ui/react';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import RadioCard from '../components/RadioCard';
import { useAuth } from '../hooks/AuthContext';
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
  const navigate = useNavigate();
  const { user, login } = useAuth();

  const submitForm = async (data) => {
    const { game, competition, name } = data;
    const formData = new FormData();

    formData.append('game', game);
    formData.append('competition', competition);
    formData.append('name', name);
    const usersArray = [user._id];
    // This step is needed for append an array in a FormData
    const usersStringified = JSON.stringify(usersArray);
    formData.append('users', usersStringified);

    API.post('/competitions', formData).then((res) => {
      const competition = res.data.info.data.competition;
      const role = res.data.info.data.user.role;
      console.log(role);
      login({ user: { ...user, competition: competition, role: role } });
      res && navigate('/');
      API.put(`users/inicialplayers/${user._id}`).then(() => {
        API.patch(`competitions/${competition._id}/market`);
      });
    });
  };

  return (
    <Box
      h="calc(100vh - 6rem)"
      paddingTop="2rem"
      marginBottom="-4rem"
      w="100%"
      bg={theme.dark.background}
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      gap="3rem"
    >
      <Text fontSize="4xl" color={theme.dark.primary}>
        Create Group
      </Text>
      <form onSubmit={handleSubmit(submitForm)}>
        <FormControl
          display="flex"
          flexDirection="column"
          maxWidth="30rem"
          padding="1rem"
          gap="1rem"
        >
          <Box>
            <FormLabel htmlFor="game" color={theme.dark.primary} margin="1rem 0">
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
                  color={theme.dark.primary}
                >
                  {games.map((game) => {
                    const { name, isDisabled } = game;

                    const handleClick = () => setSelectedGame(game);
                    return (
                      <RadioCard
                        id={name}
                        key={name}
                        name="game"
                        value={name}
                        isDisabled={isDisabled}
                        onClick={handleClick}
                        border="2px"
                        borderColor={theme.dark.accent2}
                        color={theme.dark.popUpBackground}
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
          </Box>

          <Box margin="0.6rem, 0">
            {selectedGame && (
              <>
                <FormLabel
                  htmlFor="competition"
                  color={theme.dark.primary}
                  margin="1.2rem 0"
                >
                  Competition:
                </FormLabel>
                <Controller
                  render={() => (
                    <RadioGroup
                      {...register('competition')}
                      name="competition"
                      display="flex"
                      gap="1rem"
                      color={theme.dark.accent1}
                    >
                      {selectedGame.competitions?.map((competition) => {
                        const { name, isDisabled } = competition;
                        return (
                          <Radio
                            id={name}
                            value={name}
                            key={name}
                            isDisabled={isDisabled}
                          >
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
          </Box>
          <Box>
            <FormLabel htmlFor="name" color={theme.dark.primary} margin="1.2rem 0">
              Name of the group:
            </FormLabel>
            <Input
              {...register('name')}
              id="name"
              name="name"
              placeholder="Name"
              color={theme.dark.accent1}
            />
          </Box>
          <Button
            type="submit"
            bg={theme.dark.primary}
            color="#101221"
            variant="solid"
            marginTop="1rem"
            width="100%"
            fontSize="large"
            _hover={{ color: 'white', background: '#C400FF' }}
          >
            Create
          </Button>
        </FormControl>
      </form>
    </Box>
  );
};

export default CreateGroup;
