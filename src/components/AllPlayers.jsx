import { Box, Button, Image, Text } from '@chakra-ui/react';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { UserContext } from '../context/jwtContext';
import { API } from '../services/Api';
function AllPlayers() {
  const navigate = useNavigate();
  const user = localStorage.getItem('user');
  const { currentPlayer } = useContext(UserContext);
  const [bench, setBench] = useState([]);
  const idUser = JSON.parse(user)._id;
 
    const formData = new formData();
    const { currentPlayer, newPlayer } = data;
    formData.append('currentPlayer', currentPlayer);
    formData.append('newPlayer', newPlayer);
    API.get(`/users/benchPlayers/{$idUser}`, formData).then((res) => {
      res && navigate('/lineUp');
    });
  };
  // const [currentPLayer, setCurrentPlayer] = useState('');
  const [newPlayer, setNewPlayer] = useState('');

  const getBench = async () => {
    await API.get(`users/benchPlayers/${idUser}`).then((res) => {
      setBench(res.data.info.data);
      console.log(res.data.info.data);
    });
  };

  useEffect(() => {
    getBench();
  }, []);
  console.log(newPlayer);
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
