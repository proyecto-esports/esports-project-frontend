import { Box, Button, Image, Text } from '@chakra-ui/react';
import { useContext, useEffect, useState } from 'react';

import { UserContext } from '../context/jwtContext';
import { useAuth } from '../hooks/AuthContext';
import { API } from '../services/Api';
import theme from './../theme';
import SellModal from './SellModal';

const BenchPanel = () => {
  const { user, login } = useAuth();
  const { currentPlayer, setNewPlayer } = useContext(UserContext);
  const [bench, setBench] = useState([]);
  const { setInterruptor, interruptor } = useContext(UserContext);

  const getBench = () => {
    API.get(`users/benchPlayers/${user._id}`).then((res) => {
      setBench(res.data.info.data);
      API.get(`/users/${user._id}`).then((res) => {
        let newInfoUser = res.data.info.data;
        login({ user: newInfoUser });
      });
    });
  };

  useEffect(() => {
    getBench();
  }, [interruptor]);

  const data = (newP) => {
    const changePlayer = {
      currentPlayer: currentPlayer,
      newPlayer: newP,
    };
    API.put(`/users/changeLineUp/${user._id}`, changePlayer).then((res) => {
      res && setInterruptor(JSON.stringify(res));
    });
  };

  const handleOnClick = (id) => {
    data(id);
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
              backgroundSize="130%"
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
                  maxWidth="8rem"
                  src={player.image}
                  alt={player.nickname}
                  margin="0 auto"
                  borderRadius="5px"
                />
              </Button>
              <SellModal idUserI={user._id} id={player._id} />
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
};

export default BenchPanel;
