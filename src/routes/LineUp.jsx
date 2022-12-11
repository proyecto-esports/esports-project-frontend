import { Box, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

import SlideEx from '../components/Fade';
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
      display="flex"
      flexWrap="wrap"
      alignItems="center"
      justifyContent="space-around"
      h="100vh"
      w="100vw"
      bg="#272d54"
    >
      {lineUp ? (
        lineUp.map((player) => <SlideEx key={player._id} player={player} />)
      ) : (
        <Text>...Loading</Text>
      )}
    </Box>
  );
};

export default LineUp;
