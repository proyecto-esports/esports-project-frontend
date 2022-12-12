import { Box, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

import SlideEx from '../components/Fade';
import NavBar from '../components/NavBar';
import TabBar from '../components/TabBar';
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
    <>
      <NavBar />
      <Box
        display="flex"
        flexWrap="wrap"
        alignItems="center"
        justifyContent="space-around"
        height="85vh"
        w="100vw"
        backgroundImage="url(https://res.cloudinary.com/dlqo06xcs/image/upload/v1670793623/Logo/backgroundLineUpBl_gtdbiq.png)"
        backgroundPosition="center"
      >
        {lineUp ? (
          lineUp.map((player) => <SlideEx key={player._id} player={player} />)
        ) : (
          <Text>...Loading</Text>
        )}
        <TabBar />
      </Box>
    </>
  );
};

export default LineUp;
