import { Box, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

import SlideEx from '../components/SlideEx';
import { API } from '../services/Api';

const LineUp = () => {
  const [lineUp, setLineUp] = useState([]);
  const user = localStorage.getItem('user');
  const idUser = JSON.parse(user)._id;

  const getLineUp = async () => {
    await API.get(`/users/${idUser}`).then((res) => {
      setLineUp(res.data.info.data.lineup);
    });
    return lineUp;
  };

  useEffect(() => {
    getLineUp();
  }, []);

  return (
    <Box
      height="calc(100vh - 4rem)"
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
        height="calc(100vh - 8rem)"
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
