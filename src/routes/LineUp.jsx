import { Box, Text } from '@chakra-ui/react';
import { useContext } from 'react';
import { useEffect, useState } from 'react';

import SlideEx from '../components/SlideEx';
import { UserContext } from '../context/jwtContext';
import { useAuth } from '../hooks/AuthContext';
import { API } from '../services/Api';
const LineUp = () => {
  const { user } = useAuth();
  const [lineUp, setLineUp] = useState([]);
  const { interruptor } = useContext(UserContext);
  const getLineUp = async () => {
    await API.get(`/users/${user._id}`).then((res) => {
      setLineUp(res.data.info.data.lineup);
    });
    return lineUp;
  };

  useEffect(() => {
    getLineUp();
  }, [interruptor]);

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
        {lineUp ? (
          lineUp.map((player) => <SlideEx key={player._id} player={player} />)
        ) : (
          <Text>...Loading</Text>
        )}
      </Box>
    </Box>
  );
};

export default LineUp;
