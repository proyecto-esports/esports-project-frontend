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
              onClick={() => {
                setNewPlayer(player._id);
                handleOnClick(player._id);
              }}
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

export default AllPlayers;
