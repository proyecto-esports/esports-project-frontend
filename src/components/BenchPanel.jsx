import { Box, Button, Image, Text } from '@chakra-ui/react';
import { useContext, useEffect, useState } from 'react';

// import { UserContext } from '../context/jwtContext';
import { useAuth } from '../hooks/AuthContext';
import { API } from '../services/Api';
import theme from './../theme';
import SellModal from './SellModal';

const BenchPanel = ({ currentPlayer, lineupStr }) => {
  const { user, login } = useAuth();
  // const userI = localStorage.getItem('user');
  // const { currentPlayer, setNewPlayer } = useContext(UserContext);
  const [bench, setBench] = useState([]);
  // const idUserI = JSON.parse(userI)._id;

  useEffect(() => {
    API.get(`users/benchPlayers/${user._id}`).then((res) => {
      const { updatedUser } = res.data.info.data;
      console.log('bench', bench);
      setBench(res.data.info.data);
      API.post(`/users/${user._id}`, { user: { ...updatedUser } }).then((res) => {
        const user = res.data.info.data;
        login({ user: user });
      });

      // API.get(`/users/${user._id}`).then((res) => {
      //   const user = res.data.info.data;
      //   login({ user: user });
      // });

      // API.post(`/users/${user._id}`, {user: {...user, }}).then((res) => {
      //   const user = res.data.info.data;
      //   login({ user: user });
      // });
    });
  }, [lineupStr]);

  const handleOnClick = (playerId) => {
    const changePlayer = {
      currentPlayer: currentPlayer,
      newPlayer: playerId,
    };
    API.put(`/users/changeLineUp/${user._id}`, changePlayer).then((res) => {
      const user = res.data.info.data;
      login({ user: user });
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
                onClick={() => handleOnClick(player._id)}
              >
                <Image
                  maxWidth="8rem"
                  src={player.image}
                  alt={player.nickname}
                  margin="0 auto"
                  borderRadius="5px"
                />
              </Button>
              <SellModal userId={user._id} playerId={player._id} />
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
