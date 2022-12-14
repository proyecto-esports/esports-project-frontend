import { Box, Button, Image, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

import { useAuth } from '../hooks/AuthContext';
import { API } from '../services/Api';

const LineupCards = () => {
  const { user } = useAuth();

  const [players, setPlayers] = useState(user.players);

  useEffect(() => {
    API.get(`/users/${user._id}`).then((res) => setPlayers(res.data.info.data.players));
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
};

export default LineupCards;
