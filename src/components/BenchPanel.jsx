import { Box, Button, Image, Text } from '@chakra-ui/react';
import { useContext, useEffect, useState } from 'react';

import { UserContext } from '../context/jwtContext';
import { API } from '../services/Api';

function AllPlayers() {
  const user = localStorage.getItem('user');
  const { currentPlayer, setNewPlayer } = useContext(UserContext);
  const [bench, setBench] = useState([]);
  const idUser = JSON.parse(user)._id;

  const getBench = async () => {
    await API.get(`users/benchPlayers/${idUser}`).then((res) => {
      setBench(res.data.info.data);
    });
  };

  useEffect(() => {
    getBench();
  }, []);

  const data = (newP) => {
    const changePlayer = {
      currentPlayer: currentPlayer,
      newPlayer: newP,
    };
    console.log(changePlayer);
    API.put(`/users/changeLineUp/${idUser}`, changePlayer).then((res) => {
      console.log(res);
      res && window.location.replace('')('/lineUp');
    });
  };
  const handleOnClick = (id) => {
    const newP = id;
    data(newP);
  };

  return (
    <>
      {bench ? (
        bench.map((player) => (
          <Box
            key={player._id}
            borderRadius="5px"
            marginTop="10%"
            w="45%"
            h="35%"
            backgroundColor="transparent"
            backgroundImage="url(https://res.cloudinary.com/dlqo06xcs/image/upload/v1670788899/Logo/backgroundCard_zw6qrv.png)"
            backgroundRepeat="no-repeat"
            backgroundPosition="center 0.01rem"
            backgroundSize="130%"
          >
            <Button
              display="flex"
              alignItems="center"
              justifyContent="space-around"
              flexDirection="column"
              marginTop="1vh"
              backgroundColor="transparent"
              w="100%"
              h="80%"
              variant="unstyled"
              onClick={() => {
                setNewPlayer(player._id);
                handleOnClick(player._id);
              }}
            >
              <Image maxWidth="90%" h="80%" src={player.image} alt={player.nickname} />
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

export default AllPlayers;
