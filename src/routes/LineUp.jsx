import { Box, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

import SlideEx from '../components/SlideEx';
import { useAuth } from '../hooks/AuthContext';
import { API } from '../services/Api';

const LineUp = () => {
  const { user, login } = useAuth();
  const { _id: id, lineup } = user;

  const [lineupStr, setLineupStr] = useState();

  useEffect(() => {
    API.get(`/users/${id}`).then((res) => {
      const updatedUser = res.data.info.data;
      login({ user: updatedUser });
      const nicknames = updatedUser.lineup.map((player) => player.nickname);
      console.log('lineupStr', nicknames.join(''));
      setLineupStr(nicknames.join(''));
    });
  }, [lineupStr]);

  return (
    <Box
      height="calc(100vh - 4rem)"
      marginTop="-2rem"
      w="100%"
      backgroundImage="url(https://res.cloudinary.com/dlqo06xcs/image/upload/v1670793623/Logo/backgroundLineUpBl_gtdbiq.png)"
      backgroundSize="cover"
      backgroundPosition="center"
      marginBottom="-4rem"
      overflowY="hidden"
    >
      <Box
        w="100%"
        display="flex"
        flexWrap="wrap"
        alignItems="center"
        justifyContent="space-around"
        height="calc(100vh - 10rem)"
      >
        {lineup ? (
          lineup.map((player) => (
            <SlideEx key={player._id} player={player} lineupStr={lineupStr} />
          ))
        ) : (
          <Text>...Loading</Text>
        )}
      </Box>
    </Box>
  );
};

export default LineUp;
