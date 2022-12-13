import { Box, Button, Image, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

import { API } from '../services/Api';
function LineupCards() {
  const [players, setPlayers] = useState();
  const users = localStorage.getItem('user');
  console.log(users);
  const getAllPlayers = async () => {
    API.get('/users/6390a0b7f06b238f9dac4ec7').then((res) => {
      console.log(res);
      setPlayers(res.data.info.data.players);
    });
  };
  useEffect(() => {
    getAllPlayers();
  }, []);

  return (
    <>
      {players ? (
        players.map((player) => (
          <Box
            key={player._id}
            borderRadius="5px"
            marginTop="10%"
            w="45%"
            h="30%"
            bg="#848484"
          >
            <Button
              display="flex"
              alignItems="center"
              justifyContent="space-around"
              flexDirection="column"
              marginTop="1vh"
              bg="#848484"
              w="100%"
              h="90%"
            >
              <Image w="100%" h="90%" src={player.image} alt={player.nickname} />
              {player.nickname}
            </Button>
          </Box>
        ))
      ) : (
        <Text>...Loading</Text>
      )}
    </>
  );
}

export default LineupCards;
