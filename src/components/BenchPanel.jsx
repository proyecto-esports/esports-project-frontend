import { Box, Button, Image, Text } from '@chakra-ui/react';
import { useContext, useEffect, useState } from 'react';

import { UserContext } from '../context/jwtContext';
import { API } from '../services/Api';
import theme from './../theme';

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
    API.put(`/users/changeLineUp/${idUser}`, changePlayer).then((res) => {
      res && window.location.replace('')('/lineUp');
    });
  };
  const handleOnClick = (id) => {
    const newP = id;
    data(newP);
  };

  const handleSellPlayer = async (id) => {
    const playerSell = {
      player: id,
    };
    await API.put(`/users/sell/${idUser}`, playerSell).then((res) => {
      res && window.location.replace('')('/lineUp');
    });
  };

  return (
    <>
      {bench ? (
        bench.map((player) => (
          <Box key={player._id} marginTop="10%" maxWidth="45%" h="35%">
            <Box
              display="flex"
              alignItems="center"
              flexDirection="column"
              marginTop="1vh"
              backgroundColor="transparent"
              backgroundImage="url(https://res.cloudinary.com/dlqo06xcs/image/upload/v1670788899/Logo/backgroundCard_zw6qrv.png)"
              backgroundRepeat="no-repeat"
              backgroundPosition="center 0.01rem"
              backgroundSize="115%"
              gap="0.5rem"
              w="100%"
              h="100%%"
              variant="unstyled"
            >
              <Button
                variant="unstyled"
                width="100%"
                height="100%"
                onClick={() => {
                  setNewPlayer(player._id);
                  handleOnClick(player._id);
                }}
              >
                <Image
                  maxWidth="90%"
                  src={player.image}
                  alt={player.nickname}
                  margin="0 auto"
                />
              </Button>
              <Button
                width="3rem"
                height="2rem"
                border="2px"
                borderColor={theme.dark.stas}
                bg={theme.dark.bottons}
                color={theme.dark.background}
                fontWeight="bold"
                onClick={() => handleSellPlayer(player._id)}
              >
                Sell
              </Button>
              <Text
                color={theme.dark.primary}
                fontSize="1.2rem"
                backgroundColor="#101221BF"
              >
                {player.nickname}
              </Text>
            </Box>
          </Box>
        ))
      ) : (
        <Text>...Loading</Text>
      )}
    </>
  );
}

export default AllPlayers;
